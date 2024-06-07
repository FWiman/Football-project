"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sportmonksAPI = axios_1.default.create({
    baseURL: "https://livescore6.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": "c985aa66c8msh68b80898819a690p1411c8jsn1458117435bc",
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
    },
});
exports.default = sportmonksAPI;
