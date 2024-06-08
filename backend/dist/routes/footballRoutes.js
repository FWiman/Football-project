"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const footballController_1 = require("../controllers/footballController");
const router = (0, express_1.Router)();
router.get("/news", footballController_1.getNews);
router.get("/live-scores", footballController_1.getLiveScores);
router.get("/team-info", footballController_1.getTeamInfo);
router.get("/search", footballController_1.getSearch);
router.get("/transfers", footballController_1.getAllTransfers);
exports.default = router;
