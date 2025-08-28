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
        page: 1,
        limit: 50000,
      });
      const result = await storage.getCutoffRecords(filters);
      const headers = 'Institute,Branch,Year,Category,Gender Quota,Opening Rank,Closing Rank\n';
      const csv = headers + result.records.map(record => 
        `"${record.institute}","${record.branch}",${record.year},"${record.category}","${record.genderQuota}",${record.openingRank || ''},${record.closingRank}`
      ).join('\n');
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="jee_cutoffs.csv"');
      res.status(200).send(csv);
    } catch (error) {
      res.status(500).json({ error: 'Failed to export CSV' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
