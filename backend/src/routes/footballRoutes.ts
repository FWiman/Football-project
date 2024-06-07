import { Router } from "express";
import {
  getNews,
  getLiveScores,
  getTeamInfo,
} from "../controllers/footballController";

const router: Router = Router();

router.get("/news", getNews);
router.get("/live-scores", getLiveScores);
router.get("/team-info", getTeamInfo);

export default router;
