import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

export const listClubs = async (club: string): Promise<ClubModel[]> => {
  const data = await fs.readFile("src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
