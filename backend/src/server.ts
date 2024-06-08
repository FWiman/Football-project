import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.PORT || 5000;
const apiKey = process.env.API_FOOTBALL_TOKEN;

if (!apiKey) {
  console.error(
    "API key not found. Please set API_FOOTBALL_TOKENAPI_FOOTBALL_TOKEN in your .env file."
  );
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
