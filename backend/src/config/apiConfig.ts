import axios from "axios";

const sportmonksAPI = axios.create({
  baseURL: "https://livescore6.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "c985aa66c8msh68b80898819a690p1411c8jsn1458117435bc",
    "x-rapidapi-host": "livescore6.p.rapidapi.com",
  },
});

export default sportmonksAPI;
