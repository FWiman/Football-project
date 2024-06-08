"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveFootballTransfersAPI = exports.rapidAPI = void 0;
const axios_1 = __importDefault(require("axios"));
// Create a new axios instance with a custom config LIVESCORE6
exports.rapidAPI = axios_1.default.create({
    baseURL: "https://livescore6.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": process.env.API_FOOTBALL_TOKEN,
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
    },
});
// Create a new axios instance with a custom config FOOTBALLDATA
exports.liveFootballTransfersAPI = axios_1.default.create({
    baseURL: "https://live-football-transfers-in-europe.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": process.env.API_FOOTBALL_TOKEN,
        "x-rapidapi-host": "live-football-transfers-in-europe.p.rapidapi.com",
    },
});
