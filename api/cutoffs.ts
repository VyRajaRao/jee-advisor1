import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { cutoffFiltersSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const filters = cutoffFiltersSchema.parse({
        year: req.query.year ? parseInt(req.query.year as string) : undefined,
        institute: req.query.institute as string,
        branch: req.query.branch as string,
        category: req.query.category as string,
        genderQuota: req.query.genderQuota as string,
        search: req.query.search as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
      });
      const result = await storage.getCutoffRecords(filters);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: 'Invalid filter parameters' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
