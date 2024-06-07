import { Request, Response } from "express";
import sportmonksAPI from "../config/apiConfig";

// GET PRE-MATCH/POST-MATCH NEWS
export const getNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await sportmonksAPI.get("/news/pre-match");
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};

// GET LIVESCORES
export const getLiveScores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await sportmonksAPI.get("/livescores");
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};

// GET TEAM INFORMATION
export const getTeamInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await sportmonksAPI.get(`/teams/${req.query.id}`);
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TRANSFERS
export const getAllTransfers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await sportmonksAPI.get("/transfers");
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};
