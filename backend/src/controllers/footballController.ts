import { Request, Response } from "express";
import { rapidAPI, liveFootballTransfersAPI } from "../config/apiConfig";

// GET PRE-MATCH/POST-MATCH NEWS
export const getNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await rapidAPI.get("/news/v2/list");
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
    const response = await rapidAPI.get("/matches/v2/list-live");
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
    const response = await rapidAPI.get(`/teams/detail?ID=${req.query.id}`);
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};

// GET SEARCH FOR PLAYER AND TEAM
export const getSearch = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await rapidAPI.get(`/v2/search?Query=${req.query.query}`);
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
    const response = await liveFootballTransfersAPI.get("/news");
    res.status(200).json(response.data);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};
