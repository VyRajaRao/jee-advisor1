// College data structure interface
export interface CollegeData {
  name: string;
  shortName: string;
  rank: number;
  location: string;
  established: number;
  type: string;
  website: string;
  phone: string;
  email: string;
  description: string;
  courses: Array<{
    name: string;
    cutoff: string;
    seats: number;
  }>;
  facilities: string[];
  rankings: Array<{
    agency: string;
    rank: number | string;
    year: number;
  }>;
  cutoffTrends: Array<{
    year: number;
    general: number;
    obc: number;
    sc: number;
    st: number;
  }>;
  placementStats: Array<{
    year: number;
    avgPackage: number;
    highestPackage: number;
    placementRate: number;
  }>;
}

// Helper function to generate realistic cutoff trends
const generateCutoffTrends = (baseRank: number, type: string): CollegeData['cutoffTrends'] => {
  const trends = [];
  let baseGeneral = baseRank;
  
  // Adjust base cutoff based on college type
  if (type === 'Medical') {
    baseGeneral = Math.max(baseRank * 0.5, 50); // Medical colleges have tighter cutoffs
  } else if (type === 'Science') {
    baseGeneral = Math.max(baseRank * 0.8, 100);
  }
  
  for (let year = 2019; year <= 2024; year++) {
    // Simulate improving cutoffs over time (ranks getting better/lower)
    const yearFactor = (2024 - year + 1) * 0.1;
    trends.push({
      year,
      general: Math.round(baseGeneral * (1 + yearFactor)),
      obc: Math.round(baseGeneral * (1 + yearFactor) * 2.2),
      sc: Math.round(baseGeneral * (1 + yearFactor) * 4.5),
      st: Math.round(baseGeneral * (1 + yearFactor) * 6.8),
    });
  }
  return trends;
};

// Helper function to generate placement statistics
const generatePlacementStats = (rank: number, type: string): CollegeData['placementStats'] => {
  const stats = [];
  let basePackage = 25 - (rank * 0.08); // Better ranks have higher packages
  
  if (type === 'Medical') {
    basePackage = Math.max(8 - (rank * 0.02), 3); // Medical has different salary structure
  } else if (type === 'Science') {
    basePackage = Math.max(12 - (rank * 0.05), 4);
  }
  
  basePackage = Math.max(basePackage, 2.5); // Minimum package
  
  for (let year = 2020; year <= 2024; year++) {
    const yearGrowth = (year - 2019) * 0.15; // 15% year-over-year growth
    const currentPackage = basePackage * (1 + yearGrowth);
    
    stats.push({
      year,
      avgPackage: Math.round(currentPackage * 100) / 100,
      highestPackage: Math.round(currentPackage * (3 + Math.random()) * 100) / 100,
      placementRate: Math.min(95, 60 + (150 - rank) * 0.2), // Better colleges have higher placement rates
    });
  }
  return stats;
};

// Helper function to generate courses based on college type
const generateCourses = (type: string, rank: number) => {
  const engineeringCourses = [
    'Computer Science & Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Electronics & Communication Engineering',
    'Information Technology',
    'Aerospace Engineering',
    'Biotechnology',
    'Metallurgical Engineering'
  ];
  
  const medicalCourses = [
    'MBBS',
    'MD - Internal Medicine',
    'MS - General Surgery',
    'MD - Pediatrics',
    'MD - Radiology',
    'MS - Orthopedics',
    'MD - Anesthesiology',
    'MD - Pathology'
  ];
  
  const scienceCourses = [
    'Physics',
    'Chemistry',
    'Mathematics',
    'Biology',
    'Computer Science',
    'Statistics',
    'Environmental Science',
    'Biotechnology'
  ];
  
  let courseList = [];
  let examType = 'JEE Main';
  let baseSeats = 120;
  
  if (type === 'Engineering') {
    courseList = engineeringCourses.slice(0, 4 + Math.floor(Math.random() * 3));
    if (rank <= 50) {
      examType = 'JEE Advanced';
    }
  } else if (type === 'Medical') {
    courseList = medicalCourses.slice(0, 3 + Math.floor(Math.random() * 3));
    examType = 'NEET';
    baseSeats = 150;
  } else {
    courseList = scienceCourses.slice(0, 4 + Math.floor(Math.random() * 2));
    examType = 'CUET';
    baseSeats = 100;
  }
  
  return courseList.map(course => ({
    name: course,
    cutoff: `${examType} Rank ${Math.max(1, rank * 50 - 1000)}-${rank * 100}`,
    seats: baseSeats - Math.floor(Math.random() * 30)
  }));
};

// Helper function to generate facilities
const generateFacilities = (type: string): string[] => {
  const commonFacilities = ['Library', 'Cafeteria', 'Sports Complex', 'WiFi Campus', 'Auditorium'];
  const engineeringFacilities = ['Research Labs', 'Computer Labs', 'Workshop', 'Innovation Center'];
  const medicalFacilities = ['Hospital', 'Medical Labs', 'Anatomy Lab', 'Simulation Center'];
  const scienceFacilities = ['Research Centers', 'Observatory', 'Herbarium', 'Science Museum'];
  
  let facilities = [...commonFacilities];
  
  if (type === 'Engineering') {
    facilities.push(...engineeringFacilities.slice(0, 3));
  } else if (type === 'Medical') {
    facilities.push(...medicalFacilities.slice(0, 3));
  } else {
    facilities.push(...scienceFacilities.slice(0, 2));
  }
  
  return facilities;
};

// Helper function to generate rankings
const generateRankings = (rank: number, type: string) => {
  const rankings = [];
  
  if (type === 'Engineering') {
    rankings.push(
      { agency: 'NIRF Engineering', rank: rank + Math.floor(Math.random() * 5), year: 2024 },
      { agency: 'India Today', rank: rank + Math.floor(Math.random() * 10), year: 2024 }
    );
    if (rank <= 100) {
      rankings.push({ agency: 'QS World University', rank: 500 + rank * 5, year: 2024 });
    }
  } else if (type === 'Medical') {
    rankings.push(
      { agency: 'NIRF Medical', rank: rank + Math.floor(Math.random() * 3), year: 2024 },
      { agency: 'Outlook', rank: rank + Math.floor(Math.random() * 8), year: 2024 }
    );
  } else {
    rankings.push(
      { agency: 'NIRF University', rank: rank + Math.floor(Math.random() * 5), year: 2024 },
      { agency: 'The Week', rank: rank + Math.floor(Math.random() * 10), year: 2024 }
    );
  }
  
  return rankings;
};

// Helper function to generate realistic establishment year
const generateEstablishmentYear = (rank: number): number => {
  // Top colleges tend to be older
  if (rank <= 25) return 1950 + Math.floor(Math.random() * 20); // 1950-1970
  if (rank <= 75) return 1960 + Math.floor(Math.random() * 25); // 1960-1985  
  if (rank <= 120) return 1970 + Math.floor(Math.random() * 30); // 1970-2000
  return 1980 + Math.floor(Math.random() * 35); // 1980-2015
};

// Function to generate college details from basic info
const generateCollegeDetails = (college: any): CollegeData => {
  const shortName = college.name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('');
  
  const established = generateEstablishmentYear(college.rank);
  
  const emailDomain = college.name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 8);
  
  const phoneArea = Math.floor(Math.random() * 900) + 100;
  const phoneNumber = Math.floor(Math.random() * 9000000) + 1000000;
  
  return {
    name: college.name,
    shortName,
    rank: college.rank,
    location: college.location + ', India',
    established,
    type: college.type === 'Engineering' ? 'Engineering Institute' : 
          college.type === 'Medical' ? 'Medical College' : 'Science College',
    website: `https://www.${emailDomain}.edu.in`,
    phone: `+91-${phoneArea}-${phoneNumber}`,
    email: `info@${emailDomain}.edu.in`,
    description: `${college.name} is a prestigious ${college.type.toLowerCase()} institution established in ${established}. Known for its academic excellence, research contributions, and strong alumni network, it has consistently ranked among the top institutions in India.`,
    courses: generateCourses(college.type, college.rank),
    facilities: generateFacilities(college.type),
    rankings: generateRankings(college.rank, college.type),
    cutoffTrends: generateCutoffTrends(college.rank, college.type),
    placementStats: generatePlacementStats(college.rank, college.type),
  };
};

// Export the function to be used in CollegeProfile component
export { generateCollegeDetails };

// Predefined data for top colleges (keeping the existing detailed data)
export const predefinedCollegeData: Record<number, CollegeData> = {
  1: {
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    rank: 1,
    location: "New Delhi, India",
    established: 1961,
    type: "Public Engineering Institute",
    website: "https://home.iitd.ac.in",
    phone: "+91-11-2659-1999",
    email: "info@admin.iitd.ac.in",
    description: "IIT Delhi is one of the premier engineering institutions in India, known for its excellent academic programs, cutting-edge research, and distinguished alumni network.",
    courses: [
      { name: "Computer Science & Engineering", cutoff: "JEE Advanced Rank 1-65", seats: 120 },
      { name: "Electrical Engineering", cutoff: "JEE Advanced Rank 100-300", seats: 105 },
      { name: "Mechanical Engineering", cutoff: "JEE Advanced Rank 200-400", seats: 115 },
      { name: "Chemical Engineering", cutoff: "JEE Advanced Rank 300-500", seats: 70 }
    ],
    facilities: ["Library", "Hostels", "Sports Complex", "Research Labs", "Medical Center", "Cafeteria"],
    rankings: [
      { agency: "NIRF Engineering", rank: 2, year: 2024 },
      { agency: "QS World University", rank: 197, year: 2024 },
      { agency: "THE World University", rank: "401-500", year: 2024 }
    ],
    cutoffTrends: [
      { year: 2019, general: 65, obc: 150, sc: 320, st: 450 },
      { year: 2020, general: 60, obc: 140, sc: 300, st: 420 },
      { year: 2021, general: 55, obc: 135, sc: 290, st: 400 },
      { year: 2022, general: 50, obc: 130, sc: 280, st: 385 },
      { year: 2023, general: 45, obc: 125, sc: 270, st: 370 },
      { year: 2024, general: 40, obc: 120, sc: 260, st: 360 }
    ],
    placementStats: [
      { year: 2020, avgPackage: 16.93, highestPackage: 1.2, placementRate: 85 },
      { year: 2021, avgPackage: 18.05, highestPackage: 1.8, placementRate: 88 },
      { year: 2022, avgPackage: 20.17, highestPackage: 2.0, placementRate: 90 },
      { year: 2023, avgPackage: 23.49, highestPackage: 2.5, placementRate: 92 },
      { year: 2024, avgPackage: 25.82, highestPackage: 3.0, placementRate: 95 }
    ]
  }
};
