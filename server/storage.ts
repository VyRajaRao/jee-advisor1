import { type CutoffRecord, type InsertCutoffRecord, type CutoffFilters, type RankPrediction } from "@shared/schema";
import { randomUUID } from "crypto";
import { PostgresStorage } from './postgres-storage';

export interface IStorage {
  // Cutoff records
  getCutoffRecords(filters: CutoffFilters): Promise<{
    records: CutoffRecord[];
    total: number;
    page: number;
    totalPages: number;
  }>;
  createCutoffRecord(record: InsertCutoffRecord): Promise<CutoffRecord>;
  
  // Analytics
  getYearlyTrends(institute?: string, branch?: string): Promise<any[]>;
  getCategoryComparison(year?: number): Promise<any[]>;
  getTopCompetitiveBranches(year: number): Promise<any[]>;
  
  // Prediction
  predictColleges(prediction: RankPrediction): Promise<{
    safe: CutoffRecord[];
    borderline: CutoffRecord[];
  }>;
  
  // Metadata
  getUniqueValues(): Promise<{
    years: number[];
    institutes: string[];
    branches: string[];
    categories: string[];
  }>;
}

export class MemStorage implements IStorage {
  private cutoffRecords: Map<string, CutoffRecord>;

  constructor() {
    this.cutoffRecords = new Map();
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Generate comprehensive sample data covering 2016-2024
    const institutes = [
      "IIT Bombay", "IIT Delhi", "IIT Kharagpur", "IIT Kanpur", "IIT Madras",
      "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Indore", "IIT Mandi",
      "IIT Bhubaneswar", "IIT Gandhinagar", "IIT Jodhpur", "IIT Patna", "IIT Ropar",
      "IIT Varanasi", "IIT Palakkad", "IIT Tirupati", "IIT Bhilai", "IIT Goa",
      "IIT Jammu", "IIT Dharwad", "IIT Dhanbad"
    ];

    const branches = [
      "Computer Science and Engineering",
      "Electrical Engineering", 
      "Mechanical Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Electronics and Communication Engineering",
      "Biotechnology",
      "Metallurgical Engineering and Materials Science",
      "Aerospace Engineering",
      "Engineering Physics",
      "Mathematics and Computing",
      "Economics",
      "Production and Industrial Engineering"
    ];

    const categories = ["OPEN", "OBC-NCL", "SC", "ST"];
    const genderQuotas = ["Gender-Neutral", "Female-Only"];
    const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

    let counter = 0;
    
    for (const year of years) {
      for (const institute of institutes) {
        for (const branch of branches) {
          for (const category of categories) {
            for (const genderQuota of genderQuotas) {
              const id = randomUUID();
              
              // Generate realistic rank ranges based on institute prestige and branch popularity
              const instituteRank = institutes.indexOf(institute);
              const branchRank = branches.indexOf(branch);
              
              let baseClosingRank = 100 + (instituteRank * 50) + (branchRank * 30);
              
              // Adjust for category
              if (category === "OBC-NCL") baseClosingRank = Math.floor(baseClosingRank * 1.5);
              else if (category === "SC") baseClosingRank = Math.floor(baseClosingRank * 2.5);
              else if (category === "ST") baseClosingRank = Math.floor(baseClosingRank * 3.5);
              
              // Adjust for gender quota
              if (genderQuota === "Female-Only") baseClosingRank = Math.floor(baseClosingRank * 0.9);
              
              // Add some year-to-year variation
              const yearVariation = (Math.random() - 0.5) * 0.2;
              const closingRank = Math.floor(baseClosingRank * (1 + yearVariation));
              const openingRank = Math.max(1, closingRank - Math.floor(Math.random() * 50));

              const record: CutoffRecord = {
                id,
                year,
                institute,
                branch,
                category,
                genderQuota,
                openingRank,
                closingRank,
                createdAt: new Date(),
              };

              this.cutoffRecords.set(id, record);
              counter++;
            }
          }
        }
      }
    }
    
    console.log(`Initialized ${counter} cutoff records`);
  }

  async getCutoffRecords(filters: CutoffFilters): Promise<{
    records: CutoffRecord[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    let filteredRecords = Array.from(this.cutoffRecords.values());

    // Apply filters
    if (filters.year) {
      filteredRecords = filteredRecords.filter(r => r.year === filters.year);
    }
    if (filters.institute) {
      filteredRecords = filteredRecords.filter(r => 
        r.institute.toLowerCase().includes(filters.institute!.toLowerCase())
      );
    }
    if (filters.branch) {
      filteredRecords = filteredRecords.filter(r => 
        r.branch.toLowerCase().includes(filters.branch!.toLowerCase())
      );
    }
    if (filters.category) {
      filteredRecords = filteredRecords.filter(r => r.category === filters.category);
    }
    if (filters.genderQuota) {
      filteredRecords = filteredRecords.filter(r => r.genderQuota === filters.genderQuota);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredRecords = filteredRecords.filter(r => 
        r.institute.toLowerCase().includes(searchLower) ||
        r.branch.toLowerCase().includes(searchLower)
      );
    }

    // Sort by closing rank
    filteredRecords.sort((a, b) => a.closingRank - b.closingRank);

    const total = filteredRecords.length;
    const totalPages = Math.ceil(total / filters.limit);
    const offset = (filters.page - 1) * filters.limit;
    const records = filteredRecords.slice(offset, offset + filters.limit);

    return { records, total, page: filters.page, totalPages };
  }

  async createCutoffRecord(insertRecord: InsertCutoffRecord): Promise<CutoffRecord> {
    const id = randomUUID();
    const record: CutoffRecord = {
      ...insertRecord,
      id,
      createdAt: new Date(),
    };
    this.cutoffRecords.set(id, record);
    return record;
  }

  async getYearlyTrends(institute?: string, branch?: string): Promise<any[]> {
    let records = Array.from(this.cutoffRecords.values());
    
    if (institute) {
      records = records.filter(r => r.institute === institute);
    }
    if (branch) {
      records = records.filter(r => r.branch === branch);
    }

    // Group by year and calculate average closing rank
    const yearMap = new Map<number, number[]>();
    records.forEach(record => {
      if (!yearMap.has(record.year)) {
        yearMap.set(record.year, []);
      }
      yearMap.get(record.year)!.push(record.closingRank);
    });

    return Array.from(yearMap.entries())
      .map(([year, ranks]) => ({
        year,
        averageClosingRank: Math.round(ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length)
      }))
      .sort((a, b) => a.year - b.year);
  }

  async getCategoryComparison(year?: number): Promise<any[]> {
    let records = Array.from(this.cutoffRecords.values());
    
    if (year) {
      records = records.filter(r => r.year === year);
    }

    // Group by branch and category
    const branchCategoryMap = new Map<string, Map<string, number[]>>();
    
    records.forEach(record => {
      if (!branchCategoryMap.has(record.branch)) {
        branchCategoryMap.set(record.branch, new Map());
      }
      const categoryMap = branchCategoryMap.get(record.branch)!;
      if (!categoryMap.has(record.category)) {
        categoryMap.set(record.category, []);
      }
      categoryMap.get(record.category)!.push(record.closingRank);
    });

    return Array.from(branchCategoryMap.entries()).map(([branch, categoryMap]) => {
      const result: any = { branch };
      categoryMap.forEach((ranks, category) => {
        result[category] = Math.round(ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length);
      });
      return result;
    });
  }

  async getTopCompetitiveBranches(year: number): Promise<any[]> {
    const records = Array.from(this.cutoffRecords.values())
      .filter(r => r.year === year && r.category === "OPEN");

    const branchMap = new Map<string, number[]>();
    records.forEach(record => {
      if (!branchMap.has(record.branch)) {
        branchMap.set(record.branch, []);
      }
      branchMap.get(record.branch)!.push(record.closingRank);
    });

    return Array.from(branchMap.entries())
      .map(([branch, ranks]) => ({
        branch,
        bestClosingRank: Math.min(...ranks),
        averageClosingRank: Math.round(ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length)
      }))
      .sort((a, b) => a.bestClosingRank - b.bestClosingRank)
      .slice(0, 10);
  }

  async predictColleges(prediction: RankPrediction): Promise<{
    safe: CutoffRecord[];
    borderline: CutoffRecord[];
  }> {
    const records = Array.from(this.cutoffRecords.values())
      .filter(r => 
        r.category === prediction.category &&
        r.genderQuota === prediction.genderQuota &&
        r.year === 2024 // Use latest year for prediction
      );

    const safe = records
      .filter(r => r.closingRank > prediction.rank * 1.2)
      .sort((a, b) => a.closingRank - b.closingRank)
      .slice(0, 10);

    const borderline = records
      .filter(r => 
        r.closingRank >= prediction.rank * 0.8 && 
        r.closingRank <= prediction.rank * 1.2
      )
      .sort((a, b) => a.closingRank - b.closingRank)
      .slice(0, 10);

    return { safe, borderline };
  }

  async getUniqueValues(): Promise<{
    years: number[];
    institutes: string[];
    branches: string[];
    categories: string[];
  }> {
    const records = Array.from(this.cutoffRecords.values());
    
    return {
      years: [...new Set(records.map(r => r.year))].sort((a, b) => b - a),
      institutes: [...new Set(records.map(r => r.institute))].sort(),
      branches: [...new Set(records.map(r => r.branch))].sort(),
      categories: [...new Set(records.map(r => r.category))].sort(),
    };
  }
}

let storage: IStorage;
if (process.env.DATABASE_URL) {
  storage = new PostgresStorage(process.env.DATABASE_URL);
} else {
  storage = new MemStorage();
}
export { storage };
