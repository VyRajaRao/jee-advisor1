import { storage } from "../server/storage";
import { cutoffFiltersSchema } from "../shared/schema";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const filters = cutoffFiltersSchema.parse({
        year: req.query.year ? parseInt(req.query.year) : undefined,
        institute: req.query.institute,
        branch: req.query.branch,
        category: req.query.category,
        genderQuota: req.query.genderQuota,
        search: req.query.search,
        page: 1,
        limit: 50000,
      });
      const result = await storage.getCutoffRecords(filters);
      const headers = "Institute,Branch,Year,Category,Gender Quota,Opening Rank,Closing Rank\n";
      const csv = headers + result.records.map(record => 
        `"${record.institute}","${record.branch}",${record.year},"${record.category}","${record.genderQuota}",${record.openingRank || ''},${record.closingRank}`
      ).join('\n');
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="jee_cutoffs.csv"');
      res.status(200).send(csv);
    } catch (error) {
      res.status(500).json({ error: "Failed to export CSV" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
