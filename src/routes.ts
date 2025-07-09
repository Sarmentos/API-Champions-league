import { Router } from "express";
import {
  deletePlayerById,
  getPlayer,
  getPlayerById,
  postRegisterPlayer,
  updatePlayer,
} from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postRegisterPlayer);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayer);
router.get("/clubs/list", getClubs);
export default router;
