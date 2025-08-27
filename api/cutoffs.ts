import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";
import { cutoffFiltersSchema, rankPredictionSchema } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const filters = cutoffFiltersSchema.parse({
        year: req.query.year ? parseInt(req.query.year) : undefined,
        institute: req.query.institute,
        branch: req.query.branch,
        category: req.query.category,
        genderQuota: req.query.genderQuota,
        search: req.query.search,
        page: req.query.page ? parseInt(req.query.page) : 1,
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
      });
      const result = await storage.getCutoffRecords(filters);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid filter parameters" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
