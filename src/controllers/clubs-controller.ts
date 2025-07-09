import { Request, Response } from "express";
import { clubsService } from "../services/clubs/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
  const response = await clubsService();
  res.status(response.statusCode).json(response.body);
};
