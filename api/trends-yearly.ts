import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const { institute, branch } = req.query;
      const trends = await storage.getYearlyTrends(institute, branch);
      res.status(200).json(trends);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trends" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
