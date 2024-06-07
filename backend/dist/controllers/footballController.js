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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTransfers = exports.getTeamInfo = exports.getLiveScores = exports.getNews = void 0;
const apiConfig_1 = __importDefault(require("../config/apiConfig"));
// GET PRE-MATCH/POST-MATCH NEWS
const getNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.default.get("/news/v2/list");
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
        const response = yield apiConfig_1.default.get("/livescores");
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
        const response = yield apiConfig_1.default.get(`/teams/${req.query.id}`);
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getTeamInfo = getTeamInfo;
// GET ALL TRANSFERS
const getAllTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiConfig_1.default.get("/transfers");
        res.status(200).json(response.data);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getAllTransfers = getAllTransfers;
