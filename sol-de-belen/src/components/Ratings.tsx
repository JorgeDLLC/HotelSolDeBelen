import booking from "../assets/images/logo-booking.png";
import tripadvisor from "../assets/images/logo-tripadvisor.png";
import "../styles/Ratings.css";
type Rating = {
  logo: string;
  score: string;
  label: string;
  reviews: string;
};

const ratings: Rating[] = [
  {
    logo: booking,
    score: "4.9/5",
    label: "Excellent",
    reviews: "3.5K reviews on Booking",
  },
  {
    logo: tripadvisor,
    score: "4.8/5",
    label: "Good",
    reviews: "2.4K reviews on Tripadvisor",
  },
];

export default function Ratings() {
  return (
    <section className="ratings-section">
      <h2 className="ratings-title">¿Por qué elegir Sol de Belén?</h2>

      <div className="ratings-row">
        {ratings.map((r) => (
          <div key={r.score} className="rating-card">
            <img src={r.logo} alt={r.reviews} className="rating-logo" />

            <div className="rating-score">
              <strong>{r.score}</strong>
              <span className="rating-star">★</span>
              <span className="rating-label">{r.label}</span>
            </div>

            <p className="rating-reviews">{r.reviews}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
