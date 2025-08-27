import { storage } from "../server/storage";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const year = req.query.year ? parseInt(req.query.year) : undefined;
      const comparison = await storage.getCategoryComparison(year);
      res.status(200).json(comparison);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category comparison" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
