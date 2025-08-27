import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const year = req.query.year ? parseInt(req.query.year) : 2024;
      const branches = await storage.getTopCompetitiveBranches(year);
      res.status(200).json(branches);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch competitive branches" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
