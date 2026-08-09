import { useEffect, useMemo, useState } from "react";
import "../styles/CloudbedsWidget.css";
const CLOUDBEDS_PROPERTY_CODE = "xFTHFv"; // tu code

function toISODate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

export default function CloudbedsWidget() {
  const today = useMemo(() => new Date(), []);
  const [checkIn, setCheckIn] = useState<string>(() => toISODate(today));
  const [checkOut, setCheckOut] = useState<string>(() =>
    toISODate(addDays(today, 1))
  );

  // Asegura coherencia: checkout >= checkin + 1
  useEffect(() => {
    const inD = new Date(checkIn);
    const outD = new Date(checkOut);
    if (!(outD > inD)) setCheckOut(toISODate(addDays(inD, 1)));
  }, [checkIn, checkOut]);

  const handleReserve = () => {
    const url = new URL(
      `https://hotels.cloudbeds.com/reservation/${CLOUDBEDS_PROPERTY_CODE}`
    );
    url.searchParams.set("checkin", checkIn);
    url.searchParams.set("checkout", checkOut);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="cloudbeds-bar" aria-label="Barra de reserva">
      <div className="cloudbeds-bar-inner">
        <label className="cloudbeds-field">
          <span className="cloudbeds-sr-only">Check-in</span>
          <input
            className="cloudbeds-input"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label className="cloudbeds-field">
          <span className="cloudbeds-sr-only">Check-out</span>
          <input
            className="cloudbeds-input"
            type="date"
            value={checkOut}
            min={toISODate(addDays(new Date(checkIn), 1))}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>

        <button className="cloudbeds-btn" type="button" onClick={handleReserve}>
          Reservar
        </button>
      </div>
    </div>
  );
}
