import { listClubs } from "../../repositorys/clubs-repository";
import { ok } from "../../utils/http-helper";

export const clubsService = async () => {
  const club = "someClubName";
  const data = await listClubs(club);
  const response = ok(data);
  return response;
};
