import { PlayerModel } from "../../models/player-model";
import {
  delePlayerById,
  findAllPlayers,
  findPlayerById,
  postRegisterPlayer,
} from "../../repositorys/players-repositorys";
import { noContent, ok } from "../../utils/http-helper";

export const getPlayerService = async () => {
  const responseService = await findAllPlayers();
  let response = null;

  if (responseService) {
    response = await ok(responseService);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const postRegisterPlayerService = async (newPlayer: PlayerModel) => {
  const data = await postRegisterPlayer(newPlayer);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  const data = await delePlayerById(id);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const updatePlayerService = async (id: number) => {
  const data = await delePlayerById(id);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};
