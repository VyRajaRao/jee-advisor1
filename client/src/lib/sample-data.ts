import type { CutoffRecord, TrendData, CategoryData, CompetitiveBranch } from "@/types/cutoff";

// Sample cutoff data generator for demonstration purposes
export function generateSampleCutoffData(): CutoffRecord[] {
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

  const sampleData: CutoffRecord[] = [];
  let idCounter = 1;

  for (const year of years) {
    for (const institute of institutes) {
      for (const branch of branches) {
        for (const category of categories) {
          for (const genderQuota of genderQuotas) {
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

            sampleData.push({
              id: `sample-${idCounter++}`,
              year,
              institute,
              branch,
              category,
              genderQuota,
              openingRank,
              closingRank,
              createdAt: new Date(),
            });
          }
        }
      }
    }
  }

  return sampleData;
}

// Generate sample trend data for charts
export function generateSampleTrendData(institute: string, branch: string): TrendData[] {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  
  // Base closing rank based on institute and branch prestige
  const instituteRank = ["IIT Bombay", "IIT Delhi", "IIT Kharagpur", "IIT Kanpur", "IIT Madras"].indexOf(institute);
  const branchRank = ["Computer Science and Engineering", "Electrical Engineering", "Mechanical Engineering"].indexOf(branch);
  
  let baseRank = 50 + (instituteRank >= 0 ? instituteRank * 20 : 100) + (branchRank >= 0 ? branchRank * 30 : 50);
  
  return years.map(year => {
    // Add some realistic year-to-year variation
    const variation = (Math.random() - 0.5) * 0.3;
    const yearTrend = year >= 2020 ? 1.1 : 1.0; // COVID impact
    
    return {
      year,
      averageClosingRank: Math.floor(baseRank * yearTrend * (1 + variation))
    };
  });
}

// Generate sample category comparison data
export function generateSampleCategoryData(): CategoryData[] {
  const branches = [
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Mechanical Engineering", 
    "Chemical Engineering",
    "Civil Engineering"
  ];

  return branches.map(branch => {
    const branchRank = branches.indexOf(branch);
    const baseRank = 100 + (branchRank * 150);

    return {
      branch: branch.replace(" and Engineering", "").replace("Engineering", "Engg"),
      OPEN: baseRank,
      "OBC-NCL": Math.floor(baseRank * 1.5),
      SC: Math.floor(baseRank * 2.5),
      ST: Math.floor(baseRank * 3.5),
    };
  });
}

// Generate sample competitive branches data
export function generateSampleCompetitiveBranches(): CompetitiveBranch[] {
  const branches = [
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Electronics and Communication Engineering",
    "Biotechnology",
    "Metallurgical Engineering",
    "Aerospace Engineering",
    "Engineering Physics"
  ];

  return branches.map((branch, index) => {
    const baseRank = 50 + (index * 100);
    const variation = Math.floor(Math.random() * 50);

    return {
      branch,
      bestClosingRank: baseRank + variation,
      averageClosingRank: Math.floor((baseRank + variation) * 1.2)
    };
  }).sort((a, b) => a.bestClosingRank - b.bestClosingRank);
}

// Utility functions for filtering and searching sample data
export function filterSampleData(
  data: CutoffRecord[],
  filters: {
    year?: number;
    institute?: string;
    branch?: string;
    category?: string;
    genderQuota?: string;
    search?: string;
  }
): CutoffRecord[] {
  return data.filter(record => {
    if (filters.year && record.year !== filters.year) return false;
    if (filters.institute && !record.institute.toLowerCase().includes(filters.institute.toLowerCase())) return false;
    if (filters.branch && !record.branch.toLowerCase().includes(filters.branch.toLowerCase())) return false;
    if (filters.category && record.category !== filters.category) return false;
    if (filters.genderQuota && record.genderQuota !== filters.genderQuota) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      if (!record.institute.toLowerCase().includes(searchLower) && 
          !record.branch.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    return true;
  });
}

// Pagination utility
export function paginateData<T>(data: T[], page: number, limit: number): {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
} {
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const items = data.slice(offset, offset + limit);

  return { items, total, page, totalPages };
}

// Export sample data for immediate use
export const SAMPLE_CUTOFF_DATA = generateSampleCutoffData();

// Metadata extraction from sample data
export const SAMPLE_METADATA = {
  years: [...new Set(SAMPLE_CUTOFF_DATA.map(r => r.year))].sort((a, b) => b - a),
  institutes: [...new Set(SAMPLE_CUTOFF_DATA.map(r => r.institute))].sort(),
  branches: [...new Set(SAMPLE_CUTOFF_DATA.map(r => r.branch))].sort(),
  categories: [...new Set(SAMPLE_CUTOFF_DATA.map(r => r.category))].sort(),
};
