export interface Ad {
  id: number;
  title: string;
  image: string; // URL completa que manda Django
  link_url: string;
  start_date: string;
  end_date: string;
}