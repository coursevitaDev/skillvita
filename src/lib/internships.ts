import fs from "node:fs/promises";
import path from "node:path";

export type InternshipType = "remote" | "on-site" | "hybrid";

export interface Internship {
  id: string;
  title: string;
  company: string;
  duration: string;
  skills: string[];
  stipend?: string;
  pay?: string;
  location: string;
  type: InternshipType;
  domain: string;
}

export async function getInternships(): Promise<Internship[]> {
  const file = path.join(process.cwd(), "data", "sample-internships.json");
  const raw = await fs.readFile(file, "utf-8");
  const data = JSON.parse(raw) as Internship[];
  return data;
}

