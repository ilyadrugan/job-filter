export interface Job {
  id: number;
  title: string;
  salary: string;
  location: string;
  experience: "Любой" | "1–3 года" | "3–5 лет" | "5+ лет";
}
