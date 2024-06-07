import axios from "axios";

// Create a new axios instance with a custom config LIVESCORE6
export const rapidAPI = axios.create({
  baseURL: "https://livescore6.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.API_FOOTBALL_TOKEN,
    "x-rapidapi-host": "livescore6.p.rapidapi.com",
  },
});

// Create a new axios instance with a custom config FOOTBALLDATA
export const liveFootballTransfersAPI = axios.create({
  baseURL: "https://live-football-transfers-in-europe.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.API_FOOTBALL_TOKEN,
    "x-rapidapi-host": "live-football-transfers-in-europe.p.rapidapi.com",
  },
});
