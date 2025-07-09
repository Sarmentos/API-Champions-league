import { findAllPlayers } from "../../repositorys/players-repositorys";
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
