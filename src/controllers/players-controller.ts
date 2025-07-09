import { Request, Response } from "express";
import {
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  postRegisterPlayerService,
  updatePlayerService,
} from "../services/players/players-service";
import { PlayerModel } from "../models/player-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const byId = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(byId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postRegisterPlayer = async (req: Request, res: Response) => {
  try {
    const newPlayer: PlayerModel = req.body;
    const result = await postRegisterPlayerService(newPlayer);
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao registrar jogador" });
  }
};

export const deletePlayerById = async (req: Request, res: Response) => {
  try {
    const byId = parseInt(req.params.id);
    const result = await deletePlayerService(byId);
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao excluir jogador" });
  }
};

export const updatePlayer = async (req: Request, res: Response) => {
  try {
    const byId = parseInt(req.params.id);
    const result = await updatePlayerService(byId);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao  jogador" });
  }
};
