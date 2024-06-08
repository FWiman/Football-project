"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTransfers = exports.getSearch = exports.getTeamInfo = exports.getLiveScores = exports.getNews = void 0;
const apiConfig_1 = require("../config/apiConfig");
// GET PRE-MATCH/POST-MATCH NEWS
const getNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.rapidAPI.get("/news/v2/list");
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getNews = getNews;
// GET LIVESCORES
const getLiveScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.rapidAPI.get("/matches/v2/list-live");
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getLiveScores = getLiveScores;
// GET TEAM INFORMATION
const getTeamInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.rapidAPI.get(`/teams/detail?ID=${req.query.id}`);
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getTeamInfo = getTeamInfo;
// GET SEARCH FOR PLAYER AND TEAM
const getSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.rapidAPI.get(`/v2/search?Query=${req.query.query}`);
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getSearch = getSearch;
// GET ALL TRANSFERS
const getAllTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.liveFootballTransfersAPI.get("/news");
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getAllTransfers = getAllTransfers;
