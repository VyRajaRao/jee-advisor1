import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { cutoffFiltersSchema, rankPredictionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get cutoff records with filtering
  app.get("/api/cutoffs", async (req, res) => {
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
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid filter parameters" });
    }
  });

  // Get yearly trends
  app.get("/api/trends/yearly", async (req, res) => {
    try {
      const { institute, branch } = req.query;
      const trends = await storage.getYearlyTrends(
        institute as string,
        branch as string
      );
      res.json(trends);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trends" });
    }
  });

  // Get category comparison
  app.get("/api/trends/category", async (req, res) => {
    try {
      const year = req.query.year ? parseInt(req.query.year as string) : undefined;
      const comparison = await storage.getCategoryComparison(year);
      res.json(comparison);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category comparison" });
    }
  });

  // Get top competitive branches
  app.get("/api/trends/competitive", async (req, res) => {
    try {
      const year = req.query.year ? parseInt(req.query.year as string) : 2024;
      const branches = await storage.getTopCompetitiveBranches(year);
      res.json(branches);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch competitive branches" });
    }
  });

  // Predict colleges based on rank
  app.post("/api/predict", async (req, res) => {
    try {
      const prediction = rankPredictionSchema.parse(req.body);
      const result = await storage.predictColleges(prediction);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid prediction parameters" });
    }
  });

  // Get unique filter values
  app.get("/api/metadata", async (req, res) => {
    try {
      const metadata = await storage.getUniqueValues();
      res.json(metadata);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch metadata" });
    }
  });

  // Export cutoffs as CSV
  app.get("/api/export/csv", async (req, res) => {
    try {
      const filters = cutoffFiltersSchema.parse({
        year: req.query.year ? parseInt(req.query.year as string) : undefined,
        institute: req.query.institute as string,
        branch: req.query.branch as string,
        category: req.query.category as string,
        genderQuota: req.query.genderQuota as string,
        search: req.query.search as string,
        page: 1,
        limit: 50000, // Large limit for export
      });

      const result = await storage.getCutoffRecords(filters);
      
      // Convert to CSV
      const headers = "Institute,Branch,Year,Category,Gender Quota,Opening Rank,Closing Rank\n";
      const csv = headers + result.records.map(record => 
        `"${record.institute}","${record.branch}",${record.year},"${record.category}","${record.genderQuota}",${record.openingRank || ''},${record.closingRank}`
      ).join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="jee_cutoffs.csv"');
      res.send(csv);
    } catch (error) {
      res.status(500).json({ error: "Failed to export CSV" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
