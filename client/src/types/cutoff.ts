export interface CutoffRecord {
  id: string;
  year: number;
  institute: string;
  branch: string;
  category: string;
  genderQuota: string;
  openingRank: number | null;
  closingRank: number;
  createdAt: Date;
}

export interface CutoffFilters {
  year?: number;
  institute?: string;
  branch?: string;
  category?: string;
  genderQuota?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CutoffResponse {
  records: CutoffRecord[];
  total: number;
  page: number;
  totalPages: number;
}

export interface TrendData {
  year: number;
  averageClosingRank: number;
}

export interface CategoryData {
  branch: string;
  OPEN?: number;
  "OBC-NCL"?: number;
  SC?: number;
  ST?: number;
}

export interface CompetitiveBranch {
  branch: string;
  bestClosingRank: number;
  averageClosingRank: number;
}

export interface PredictionResult {
  safe: CutoffRecord[];
  borderline: CutoffRecord[];
}

export interface RankPrediction {
  rank: number;
  category: string;
  genderQuota: string;
}

export interface Metadata {
  years: number[];
  institutes: string[];
  branches: string[];
  categories: string[];
}
