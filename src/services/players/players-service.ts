import { noContent, ok } from "../../utils/http-helper";

export const getPlayerService = async () => {
  const responseService = { player: "ronaldo" };
  let response = null;

  if (responseService) {
    response = await ok(responseService);
  } else {
    response = await noContent();
  }

  return response;
};
