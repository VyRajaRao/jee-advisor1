import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cutoffRecords = pgTable("cutoff_records", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  year: integer("year").notNull(),
  institute: text("institute").notNull(),
  branch: text("branch").notNull(),
  category: text("category").notNull(), // OPEN, OBC-NCL, SC, ST, etc.
  genderQuota: text("gender_quota").notNull(), // Gender-Neutral, Female-Only
  openingRank: integer("opening_rank"),
  closingRank: integer("closing_rank").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const insertCutoffRecordSchema = createInsertSchema(cutoffRecords).omit({
  id: true,
  createdAt: true,
});

export type InsertCutoffRecord = z.infer<typeof insertCutoffRecordSchema>;
export type CutoffRecord = typeof cutoffRecords.$inferSelect;

// Filter types for API
export const cutoffFiltersSchema = z.object({
  year: z.number().optional(),
  institute: z.string().optional(),
  branch: z.string().optional(),
  category: z.string().optional(),
  genderQuota: z.string().optional(),
  search: z.string().optional(),
  page: z.number().default(1),
  limit: z.number().default(10),
});

export type CutoffFilters = z.infer<typeof cutoffFiltersSchema>;

// Prediction input schema
export const rankPredictionSchema = z.object({
  rank: z.number().min(1),
  category: z.string(),
  genderQuota: z.string(),
});

export type RankPrediction = z.infer<typeof rankPredictionSchema>;
