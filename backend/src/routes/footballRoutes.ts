import { Router } from "express";
import {
  getNews,
  getLiveScores,
  getTeamInfo,
  getSearch,
  getAllTransfers,
} from "../controllers/footballController";

const router: Router = Router();

router.get("/news", getNews);
router.get("/live-scores", getLiveScores);
router.get("/team-info", getTeamInfo);
router.get("/search", getSearch);
router.get("/transfers", getAllTransfers);

export default router;
