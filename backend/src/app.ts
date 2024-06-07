import express, { Application } from "express";
import cors from "cors";
import footballRoutes from "./routes/footballRoutes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/football", footballRoutes);

export default app;
