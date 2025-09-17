// Basic college information used across components
export interface BasicCollegeInfo {
  id: number;
  name: string;
  rank: number;
  location: string;
  courses: string[];
  cutoff: string;
  type: string;
}

export const mockColleges: BasicCollegeInfo[] = [
  // IITs
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    rank: 1,
    location: "New Delhi",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    cutoff: "JEE Advanced Rank 1-500",
    type: "Engineering"
  },
  {
    id: 2,
    name: "Indian Institute of Technology Bombay",
    rank: 2,
    location: "Mumbai",
    courses: ["Computer Science", "Aerospace Engineering", "Chemical Engineering"],
    cutoff: "JEE Advanced Rank 1-400",
    type: "Engineering"
  },
  {
    id: 3,
    name: "Indian Institute of Technology Madras",
    rank: 3,
    location: "Chennai",
    courses: ["Computer Science", "Mechanical Engineering", "Ocean Engineering"],
    cutoff: "JEE Advanced Rank 1-600",
    type: "Engineering"
  },
  {
    id: 4,
    name: "Indian Institute of Technology Kanpur",
    rank: 4,
    location: "Kanpur",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    cutoff: "JEE Advanced Rank 1-700",
    type: "Engineering"
  },
  {
    id: 5,
    name: "Indian Institute of Technology Kharagpur",
    rank: 5,
    location: "Kharagpur",
    courses: ["Computer Science", "Mining Engineering", "Metallurgical Engineering"],
    cutoff: "JEE Advanced Rank 1-800",
    type: "Engineering"
  },
  {
    id: 6,
    name: "Indian Institute of Technology Roorkee",
    rank: 6,
    location: "Roorkee",
    courses: ["Computer Science", "Civil Engineering", "Earthquake Engineering"],
    cutoff: "JEE Advanced Rank 1-900",
    type: "Engineering"
  },
  {
    id: 7,
    name: "Indian Institute of Technology Guwahati",
    rank: 7,
    location: "Guwahati",
    courses: ["Computer Science", "Electronics Engineering", "Biosciences"],
    cutoff: "JEE Advanced Rank 1-1000",
    type: "Engineering"
  },
  {
    id: 8,
    name: "Indian Institute of Technology Hyderabad",
    rank: 8,
    location: "Hyderabad",
    courses: ["Computer Science", "Biomedical Engineering", "Chemical Engineering"],
    cutoff: "JEE Advanced Rank 1-1200",
    type: "Engineering"
  },
  {
    id: 9,
    name: "Indian Institute of Technology Indore",
    rank: 9,
    location: "Indore",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    cutoff: "JEE Advanced Rank 1-1400",
    type: "Engineering"
  },
  {
    id: 10,
    name: "Indian Institute of Technology Mandi",
    rank: 10,
    location: "Mandi",
    courses: ["Computer Science", "Data Science", "Electrical Engineering"],
    cutoff: "JEE Advanced Rank 1-1600",
    type: "Engineering"
  },
  
  // NITs
  {
    id: 11,
    name: "National Institute of Technology Trichy",
    rank: 11,
    location: "Tiruchirappalli",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-2000",
    type: "Engineering"
  },
  {
    id: 12,
    name: "National Institute of Technology Warangal",
    rank: 12,
    location: "Warangal",
    courses: ["Computer Science", "Civil Engineering", "Chemical Engineering"],
    cutoff: "JEE Main Rank 1-2500",
    type: "Engineering"
  },
  {
    id: 13,
    name: "National Institute of Technology Surathkal",
    rank: 13,
    location: "Mangalore",
    courses: ["Computer Science", "Information Technology", "Mining Engineering"],
    cutoff: "JEE Main Rank 1-3000",
    type: "Engineering"
  },
  {
    id: 14,
    name: "National Institute of Technology Rourkela",
    rank: 14,
    location: "Rourkela",
    courses: ["Computer Science", "Metallurgical Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-3500",
    type: "Engineering"
  },
  {
    id: 15,
    name: "National Institute of Technology Calicut",
    rank: 15,
    location: "Kozhikode",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-4000",
    type: "Engineering"
  },
  
  // IISc and IISERs
  {
    id: 16,
    name: "Indian Institute of Science",
    rank: 16,
    location: "Bangalore",
    courses: ["Physics", "Chemistry", "Computer Science", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 17,
    name: "Indian Institute of Science Education and Research Pune",
    rank: 17,
    location: "Pune",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 18,
    name: "Indian Institute of Science Education and Research Kolkata",
    rank: 18,
    location: "Kolkata",
    courses: ["Physics", "Chemistry", "Earth Sciences", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  
  // Medical Colleges
  {
    id: 19,
    name: "All Institute of Medical Sciences Delhi",
    rank: 19,
    location: "New Delhi",
    courses: ["MBBS", "MD", "MS", "DM"],
    cutoff: "NEET Rank 1-100",
    type: "Medical"
  },
  {
    id: 20,
    name: "Post Graduate Institute of Medical Education and Research",
    rank: 20,
    location: "Chandigarh",
    courses: ["MBBS", "MD", "MS", "MCh"],
    cutoff: "NEET Rank 1-200",
    type: "Medical"
  },
  {
    id: 21,
    name: "Christian Medical College",
    rank: 21,
    location: "Vellore",
    courses: ["MBBS", "MD", "MS", "Nursing"],
    cutoff: "NEET Rank 1-300",
    type: "Medical"
  },
  {
    id: 22,
    name: "Armed Forces Medical College",
    rank: 22,
    location: "Pune",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-400",
    type: "Medical"
  },
  {
    id: 23,
    name: "Maulana Azad Medical College",
    rank: 23,
    location: "New Delhi",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-500",
    type: "Medical"
  },
  
  // More Engineering Colleges
  {
    id: 24,
    name: "Birla Institute of Technology and Science Pilani",
    rank: 24,
    location: "Pilani",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "BITSAT Score 350+",
    type: "Engineering"
  },
  {
    id: 25,
    name: "Vellore Institute of Technology",
    rank: 25,
    location: "Vellore",
    courses: ["Computer Science", "Information Technology", "Biotechnology"],
    cutoff: "VITEEE Rank 1-5000",
    type: "Engineering"
  },
  {
    id: 26,
    name: "Delhi Technological University",
    rank: 26,
    location: "New Delhi",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 27,
    name: "Netaji Subhas University of Technology",
    rank: 27,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-10000",
    type: "Engineering"
  },
  {
    id: 28,
    name: "Jadavpur University",
    rank: 28,
    location: "Kolkata",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "WBJEE Rank 1-2000",
    type: "Engineering"
  },
  {
    id: 29,
    name: "Anna University",
    rank: 29,
    location: "Chennai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "TNEA Rank 1-3000",
    type: "Engineering"
  },
  {
    id: 30,
    name: "College of Engineering Pune",
    rank: 30,
    location: "Pune",
    courses: ["Computer Science", "Mechanical Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-12000",
    type: "Engineering"
  },
  
  // State Engineering Colleges
  {
    id: 31,
    name: "PSG College of Technology",
    rank: 31,
    location: "Coimbatore",
    courses: ["Computer Science", "Mechanical Engineering", "Electronics Engineering"],
    cutoff: "TNEA Rank 1-5000",
    type: "Engineering"
  },
  {
    id: 32,
    name: "Thiagarajar College of Engineering",
    rank: 32,
    location: "Madurai",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "TNEA Rank 1-6000",
    type: "Engineering"
  },
  {
    id: 33,
    name: "Government College of Technology",
    rank: 33,
    location: "Coimbatore",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "TNEA Rank 1-4000",
    type: "Engineering"
  },
  {
    id: 34,
    name: "Visvesvaraya National Institute of Technology",
    rank: 34,
    location: "Nagpur",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-15000",
    type: "Engineering"
  },
  {
    id: 35,
    name: "Motilal Nehru National Institute of Technology",
    rank: 35,
    location: "Allahabad",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-16000",
    type: "Engineering"
  },
  
  // More Medical Colleges
  {
    id: 36,
    name: "King George's Medical University",
    rank: 36,
    location: "Lucknow",
    courses: ["MBBS", "MD", "MS", "DM"],
    cutoff: "NEET Rank 1-600",
    type: "Medical"
  },
  {
    id: 37,
    name: "Jawaharlal Institute of Postgraduate Medical Education",
    rank: 37,
    location: "Puducherry",
    courses: ["MBBS", "MD", "MS", "MCh"],
    cutoff: "NEET Rank 1-700",
    type: "Medical"
  },
  {
    id: 38,
    name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences",
    rank: 38,
    location: "Lucknow",
    courses: ["MD", "MS", "DM", "MCh"],
    cutoff: "NEET PG Rank 1-500",
    type: "Medical"
  },
  {
    id: 39,
    name: "Kasturba Medical College",
    rank: 39,
    location: "Mangalore",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-800",
    type: "Medical"
  },
  {
    id: 40,
    name: "St. John's Medical College",
    rank: 40,
    location: "Bangalore",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-900",
    type: "Medical"
  },
  
  // More Science Colleges
  {
    id: 41,
    name: "Indian Institute of Science Education and Research Bhopal",
    rank: 41,
    location: "Bhopal",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 42,
    name: "Indian Institute of Science Education and Research Thiruvananthapuram",
    rank: 42,
    location: "Thiruvananthapuram",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 43,
    name: "Indian Institute of Science Education and Research Mohali",
    rank: 43,
    location: "Mohali",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 44,
    name: "Indian Institute of Science Education and Research Berhampur",
    rank: 44,
    location: "Berhampur",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  {
    id: 45,
    name: "Indian Institute of Science Education and Research Tirupati",
    rank: 45,
    location: "Tirupati",
    courses: ["Physics", "Chemistry", "Biology", "Mathematics"],
    cutoff: "KVPY/JEE Advanced",
    type: "Science"
  },
  
  // More NITs
  {
    id: 46,
    name: "National Institute of Technology Durgapur",
    rank: 46,
    location: "Durgapur",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-18000",
    type: "Engineering"
  },
  {
    id: 47,
    name: "National Institute of Technology Jamshedpur",
    rank: 47,
    location: "Jamshedpur",
    courses: ["Computer Science", "Metallurgical Engineering", "Production Engineering"],
    cutoff: "JEE Main Rank 1-20000",
    type: "Engineering"
  },
  {
    id: 48,
    name: "National Institute of Technology Kurukshetra",
    rank: 48,
    location: "Kurukshetra",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-22000",
    type: "Engineering"
  },
  {
    id: 49,
    name: "National Institute of Technology Allahabad",
    rank: 49,
    location: "Allahabad",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-24000",
    type: "Engineering"
  },
  {
    id: 50,
    name: "National Institute of Technology Bhopal",
    rank: 50,
    location: "Bhopal",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-26000",
    type: "Engineering"
  },
  
  // IIITs
  {
    id: 51,
    name: "International Institute of Information Technology Hyderabad",
    rank: 51,
    location: "Hyderabad",
    courses: ["Computer Science", "Electronics Engineering", "Computational Engineering"],
    cutoff: "JEE Main Rank 1-5000",
    type: "Engineering"
  },
  {
    id: 52,
    name: "International Institute of Information Technology Bangalore",
    rank: 52,
    location: "Bangalore",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-6000",
    type: "Engineering"
  },
  {
    id: 53,
    name: "International Institute of Information Technology Delhi",
    rank: 53,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Human-Computer Interaction"],
    cutoff: "JEE Main Rank 1-7000",
    type: "Engineering"
  },
  {
    id: 54,
    name: "International Institute of Information Technology Allahabad",
    rank: 54,
    location: "Allahabad",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 55,
    name: "International Institute of Information Technology Gwalior",
    rank: 55,
    location: "Gwalior",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-9000",
    type: "Engineering"
  },
  
  // State Universities and Colleges
  {
    id: 56,
    name: "Delhi College of Engineering",
    rank: 56,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-15000",
    type: "Engineering"
  },
  {
    id: 57,
    name: "Pune Institute of Computer Technology",
    rank: 57,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-3000",
    type: "Engineering"
  },
  {
    id: 58,
    name: "Sardar Vallabhbhai National Institute of Technology",
    rank: 58,
    location: "Surat",
    courses: ["Computer Science", "Chemical Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-28000",
    type: "Engineering"
  },
  {
    id: 59,
    name: "National Institute of Technology Hamirpur",
    rank: 59,
    location: "Hamirpur",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-30000",
    type: "Engineering"
  },
  {
    id: 60,
    name: "National Institute of Technology Jalandhar",
    rank: 60,
    location: "Jalandhar",
    courses: ["Computer Science", "Electronics Engineering", "Instrumentation Engineering"],
    cutoff: "JEE Main Rank 1-32000",
    type: "Engineering"
  },
  
  // Private Engineering Colleges
  {
    id: 61,
    name: "Manipal Institute of Technology",
    rank: 61,
    location: "Manipal",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "Manipal Entrance Test",
    type: "Engineering"
  },
  {
    id: 62,
    name: "SRM Institute of Science and Technology",
    rank: 62,
    location: "Chennai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "SRMJEEE Rank 1-10000",
    type: "Engineering"
  },
  {
    id: 63,
    name: "Amity University",
    rank: 63,
    location: "Noida",
    courses: ["Computer Science", "Information Technology", "Biotechnology"],
    cutoff: "JEE Main Rank 1-50000",
    type: "Engineering"
  },
  {
    id: 64,
    name: "Lovely Professional University",
    rank: 64,
    location: "Jalandhar",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "LPUNEST/JEE Main",
    type: "Engineering"
  },
  {
    id: 65,
    name: "Kalinga Institute of Industrial Technology",
    rank: 65,
    location: "Bhubaneswar",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "KIITEE Rank 1-15000",
    type: "Engineering"
  },
  
  // More Medical Colleges
  {
    id: 66,
    name: "Madras Medical College",
    rank: 66,
    location: "Chennai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-1000",
    type: "Medical"
  },
  {
    id: 67,
    name: "Grant Medical College",
    rank: 67,
    location: "Mumbai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-1200",
    type: "Medical"
  },
  {
    id: 68,
    name: "Lady Hardinge Medical College",
    rank: 68,
    location: "New Delhi",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-1400",
    type: "Medical"
  },
  {
    id: 69,
    name: "University College of Medical Sciences",
    rank: 69,
    location: "New Delhi",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-1600",
    type: "Medical"
  },
  {
    id: 70,
    name: "Bangalore Medical College",
    rank: 70,
    location: "Bangalore",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-1800",
    type: "Medical"
  },
  
  // Continue with more colleges to reach 150+
  {
    id: 71,
    name: "Indian Institute of Technology Patna",
    rank: 71,
    location: "Patna",
    courses: ["Computer Science", "Mechanical Engineering", "Civil Engineering"],
    cutoff: "JEE Advanced Rank 1-1800",
    type: "Engineering"
  },
  {
    id: 72,
    name: "Indian Institute of Technology Bhubaneswar",
    rank: 72,
    location: "Bhubaneswar",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    cutoff: "JEE Advanced Rank 1-2000",
    type: "Engineering"
  },
  {
    id: 73,
    name: "Indian Institute of Technology Gandhinagar",
    rank: 73,
    location: "Gandhinagar",
    courses: ["Computer Science", "Chemical Engineering", "Civil Engineering"],
    cutoff: "JEE Advanced Rank 1-2200",
    type: "Engineering"
  },
  {
    id: 74,
    name: "Indian Institute of Technology Jodhpur",
    rank: 74,
    location: "Jodhpur",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    cutoff: "JEE Advanced Rank 1-2400",
    type: "Engineering"
  },
  {
    id: 75,
    name: "Indian Institute of Technology Ropar",
    rank: 75,
    location: "Ropar",
    courses: ["Computer Science", "Mechanical Engineering", "Chemical Engineering"],
    cutoff: "JEE Advanced Rank 1-2600",
    type: "Engineering"
  },
  {
    id: 76,
    name: "Indian Institute of Technology Varanasi",
    rank: 76,
    location: "Varanasi",
    courses: ["Computer Science", "Mechanical Engineering", "Metallurgical Engineering"],
    cutoff: "JEE Advanced Rank 1-2800",
    type: "Engineering"
  },
  {
    id: 77,
    name: "Indian Institute of Technology Dhanbad",
    rank: 77,
    location: "Dhanbad",
    courses: ["Computer Science", "Mining Engineering", "Mechanical Engineering"],
    cutoff: "JEE Advanced Rank 1-3000",
    type: "Engineering"
  },
  {
    id: 78,
    name: "Indian Institute of Technology Bhilai",
    rank: 78,
    location: "Bhilai",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    cutoff: "JEE Advanced Rank 1-3200",
    type: "Engineering"
  },
  {
    id: 79,
    name: "Indian Institute of Technology Goa",
    rank: 79,
    location: "Goa",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    cutoff: "JEE Advanced Rank 1-3400",
    type: "Engineering"
  },
  {
    id: 80,
    name: "Indian Institute of Technology Jammu",
    rank: 80,
    location: "Jammu",
    courses: ["Computer Science", "Civil Engineering", "Chemical Engineering"],
    cutoff: "JEE Advanced Rank 1-3600",
    type: "Engineering"
  },
  
  // More NITs
  {
    id: 81,
    name: "National Institute of Technology Silchar",
    rank: 81,
    location: "Silchar",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-35000",
    type: "Engineering"
  },
  {
    id: 82,
    name: "National Institute of Technology Agartala",
    rank: 82,
    location: "Agartala",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-40000",
    type: "Engineering"
  },
  {
    id: 83,
    name: "National Institute of Technology Arunachal Pradesh",
    rank: 83,
    location: "Yupia",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-45000",
    type: "Engineering"
  },
  {
    id: 84,
    name: "National Institute of Technology Delhi",
    rank: 84,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-25000",
    type: "Engineering"
  },
  {
    id: 85,
    name: "National Institute of Technology Goa",
    rank: 85,
    location: "Goa",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-30000",
    type: "Engineering"
  },
  
  // State Engineering Colleges
  {
    id: 86,
    name: "Bengal Engineering and Science University",
    rank: 86,
    location: "Howrah",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "WBJEE Rank 1-5000",
    type: "Engineering"
  },
  {
    id: 87,
    name: "Osmania University College of Engineering",
    rank: 87,
    location: "Hyderabad",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "TS EAMCET Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 88,
    name: "University Visvesvaraya College of Engineering",
    rank: 88,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Electronics Engineering"],
    cutoff: "KCET Rank 1-5000",
    type: "Engineering"
  },
  {
    id: 89,
    name: "College of Engineering Trivandrum",
    rank: 89,
    location: "Thiruvananthapuram",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "KEAM Rank 1-3000",
    type: "Engineering"
  },
  {
    id: 90,
    name: "Government College of Engineering Aurangabad",
    rank: 90,
    location: "Aurangabad",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-8000",
    type: "Engineering"
  },
  
  // More Medical Colleges
  {
    id: 91,
    name: "Government Medical College Thiruvananthapuram",
    rank: 91,
    location: "Thiruvananthapuram",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-2000",
    type: "Medical"
  },
  {
    id: 92,
    name: "Government Medical College Kozhikode",
    rank: 92,
    location: "Kozhikode",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-2200",
    type: "Medical"
  },
  {
    id: 93,
    name: "Stanley Medical College",
    rank: 93,
    location: "Chennai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-2400",
    type: "Medical"
  },
  {
    id: 94,
    name: "Government Medical College Nagpur",
    rank: 94,
    location: "Nagpur",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-2600",
    type: "Medical"
  },
  {
    id: 95,
    name: "B.J. Medical College",
    rank: 95,
    location: "Ahmedabad",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-2800",
    type: "Medical"
  },
  
  // Continue with more diverse colleges
  {
    id: 96,
    name: "Thapar Institute of Engineering and Technology",
    rank: 96,
    location: "Patiala",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-40000",
    type: "Engineering"
  },
  {
    id: 97,
    name: "Birla Institute of Technology Mesra",
    rank: 97,
    location: "Ranchi",
    courses: ["Computer Science", "Electronics Engineering", "Chemical Engineering"],
    cutoff: "JEE Main Rank 1-45000",
    type: "Engineering"
  },
  {
    id: 98,
    name: "Jamia Millia Islamia",
    rank: 98,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-35000",
    type: "Engineering"
  },
  {
    id: 99,
    name: "Aligarh Muslim University",
    rank: 99,
    location: "Aligarh",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-38000",
    type: "Engineering"
  },
  {
    id: 100,
    name: "Jamia Hamdard",
    rank: 100,
    location: "New Delhi",
    courses: ["Pharmacy", "Medicine", "Nursing"],
    cutoff: "NEET Rank 1-3000",
    type: "Medical"
  },
  
  // Continue adding more colleges to reach 150+
  {
    id: 101,
    name: "Coimbatore Institute of Technology",
    rank: 101,
    location: "Coimbatore",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "TNEA Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 102,
    name: "SSN College of Engineering",
    rank: 102,
    location: "Chennai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "TNEA Rank 1-10000",
    type: "Engineering"
  },
  {
    id: 103,
    name: "R.V. College of Engineering",
    rank: 103,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Electronics Engineering"],
    cutoff: "KCET Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 104,
    name: "PES University",
    rank: 104,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Electronics Engineering"],
    cutoff: "PESSAT/KCET",
    type: "Engineering"
  },
  {
    id: 105,
    name: "BMS College of Engineering",
    rank: 105,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Mechanical Engineering"],
    cutoff: "KCET Rank 1-12000",
    type: "Engineering"
  },
  {
    id: 106,
    name: "Dayananda Sagar College of Engineering",
    rank: 106,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Electronics Engineering"],
    cutoff: "KCET Rank 1-15000",
    type: "Engineering"
  },
  {
    id: 107,
    name: "M.S. Ramaiah Institute of Technology",
    rank: 107,
    location: "Bangalore",
    courses: ["Computer Science", "Information Science", "Mechanical Engineering"],
    cutoff: "KCET Rank 1-18000",
    type: "Engineering"
  },
  {
    id: 108,
    name: "National Institute of Technology Patna",
    rank: 108,
    location: "Patna",
    courses: ["Computer Science", "Electronics Engineering", "Civil Engineering"],
    cutoff: "JEE Main Rank 1-50000",
    type: "Engineering"
  },
  {
    id: 109,
    name: "National Institute of Technology Raipur",
    rank: 109,
    location: "Raipur",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-55000",
    type: "Engineering"
  },
  {
    id: 110,
    name: "National Institute of Technology Jaipur",
    rank: 110,
    location: "Jaipur",
    courses: ["Computer Science", "Electronics Engineering", "Chemical Engineering"],
    cutoff: "JEE Main Rank 1-60000",
    type: "Engineering"
  },
  
  // More Medical Colleges
  {
    id: 111,
    name: "Government Medical College Chandigarh",
    rank: 111,
    location: "Chandigarh",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-3200",
    type: "Medical"
  },
  {
    id: 112,
    name: "Government Medical College Amritsar",
    rank: 112,
    location: "Amritsar",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-3400",
    type: "Medical"
  },
  {
    id: 113,
    name: "Government Medical College Patiala",
    rank: 113,
    location: "Patiala",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-3600",
    type: "Medical"
  },
  {
    id: 114,
    name: "Indira Gandhi Medical College",
    rank: 114,
    location: "Shimla",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-3800",
    type: "Medical"
  },
  {
    id: 115,
    name: "Government Medical College Srinagar",
    rank: 115,
    location: "Srinagar",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-4000",
    type: "Medical"
  },
  
  // More Engineering Colleges
  {
    id: 116,
    name: "Walchand College of Engineering",
    rank: 116,
    location: "Sangli",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-12000",
    type: "Engineering"
  },
  {
    id: 117,
    name: "Veermata Jijabai Technological Institute",
    rank: 117,
    location: "Mumbai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-8000",
    type: "Engineering"
  },
  {
    id: 118,
    name: "Sardar Patel College of Engineering",
    rank: 118,
    location: "Mumbai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-10000",
    type: "Engineering"
  },
  {
    id: 119,
    name: "K.J. Somaiya College of Engineering",
    rank: 119,
    location: "Mumbai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-15000",
    type: "Engineering"
  },
  {
    id: 120,
    name: "Fr. Conceicao Rodrigues College of Engineering",
    rank: 120,
    location: "Mumbai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-18000",
    type: "Engineering"
  },
  
  // More Science Colleges
  {
    id: 121,
    name: "St. Stephen's College",
    rank: 121,
    location: "New Delhi",
    courses: ["Physics", "Chemistry", "Mathematics", "Economics"],
    cutoff: "CUET Score 95%+",
    type: "Science"
  },
  {
    id: 122,
    name: "Hindu College",
    rank: 122,
    location: "New Delhi",
    courses: ["Physics", "Chemistry", "Mathematics", "Botany"],
    cutoff: "CUET Score 90%+",
    type: "Science"
  },
  {
    id: 123,
    name: "Hansraj College",
    rank: 123,
    location: "New Delhi",
    courses: ["Physics", "Chemistry", "Mathematics", "Zoology"],
    cutoff: "CUET Score 88%+",
    type: "Science"
  },
  {
    id: 124,
    name: "Ramjas College",
    rank: 124,
    location: "New Delhi",
    courses: ["Physics", "Chemistry", "Mathematics", "Geography"],
    cutoff: "CUET Score 85%+",
    type: "Science"
  },
  {
    id: 125,
    name: "Miranda House",
    rank: 125,
    location: "New Delhi",
    courses: ["Physics", "Chemistry", "Mathematics", "Life Sciences"],
    cutoff: "CUET Score 92%+",
    type: "Science"
  },
  
  // Continue with more colleges
  {
    id: 126,
    name: "Shri Mata Vaishno Devi University",
    rank: 126,
    location: "Katra",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-70000",
    type: "Engineering"
  },
  {
    id: 127,
    name: "Guru Gobind Singh Indraprastha University",
    rank: 127,
    location: "New Delhi",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-50000",
    type: "Engineering"
  },
  {
    id: 128,
    name: "Maharaja Surajmal Institute of Technology",
    rank: 128,
    location: "New Delhi",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-80000",
    type: "Engineering"
  },
  {
    id: 129,
    name: "Bharati Vidyapeeth College of Engineering",
    rank: 129,
    location: "New Delhi",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-90000",
    type: "Engineering"
  },
  {
    id: 130,
    name: "Indraprastha Institute of Information Technology",
    rank: 130,
    location: "New Delhi",
    courses: ["Computer Science", "Electronics Engineering", "Human-Computer Interaction"],
    cutoff: "JEE Main Rank 1-12000",
    type: "Engineering"
  },
  
  // More Medical Colleges
  {
    id: 131,
    name: "Vardhman Mahavir Medical College",
    rank: 131,
    location: "New Delhi",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-4200",
    type: "Medical"
  },
  {
    id: 132,
    name: "Lokmanya Tilak Municipal Medical College",
    rank: 132,
    location: "Mumbai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-4400",
    type: "Medical"
  },
  {
    id: 133,
    name: "Seth G.S. Medical College",
    rank: 133,
    location: "Mumbai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-4600",
    type: "Medical"
  },
  {
    id: 134,
    name: "Topiwala National Medical College",
    rank: 134,
    location: "Mumbai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-4800",
    type: "Medical"
  },
  {
    id: 135,
    name: "Government Medical College Mumbai",
    rank: 135,
    location: "Mumbai",
    courses: ["MBBS", "MD", "MS"],
    cutoff: "NEET Rank 1-5000",
    type: "Medical"
  },
  
  // More Engineering Colleges
  {
    id: 136,
    name: "Malviya National Institute of Technology",
    rank: 136,
    location: "Jaipur",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering"],
    cutoff: "JEE Main Rank 1-65000",
    type: "Engineering"
  },
  {
    id: 137,
    name: "Malaviya National Institute of Technology Jaipur",
    rank: 137,
    location: "Jaipur",
    courses: ["Computer Science", "Electronics Engineering", "Chemical Engineering"],
    cutoff: "JEE Main Rank 1-70000",
    type: "Engineering"
  },
  {
    id: 138,
    name: "Indian Institute of Information Technology Allahabad",
    rank: 138,
    location: "Allahabad",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-15000",
    type: "Engineering"
  },
  {
    id: 139,
    name: "Indian Institute of Information Technology Jabalpur",
    rank: 139,
    location: "Jabalpur",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-20000",
    type: "Engineering"
  },
  {
    id: 140,
    name: "Indian Institute of Information Technology Kancheepuram",
    rank: 140,
    location: "Chennai",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "JEE Main Rank 1-25000",
    type: "Engineering"
  },
  
  // More diverse colleges
  {
    id: 141,
    name: "Loyola College",
    rank: 141,
    location: "Chennai",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    cutoff: "Tamil Nadu Board 95%+",
    type: "Science"
  },
  {
    id: 142,
    name: "Fergusson College",
    rank: 142,
    location: "Pune",
    courses: ["Physics", "Chemistry", "Mathematics", "Biotechnology"],
    cutoff: "Maharashtra Board 90%+",
    type: "Science"
  },
  {
    id: 143,
    name: "Presidency College",
    rank: 143,
    location: "Kolkata",
    courses: ["Physics", "Chemistry", "Mathematics", "Economics"],
    cutoff: "West Bengal Board 92%+",
    type: "Science"
  },
  {
    id: 144,
    name: "Christ University",
    rank: 144,
    location: "Bangalore",
    courses: ["Computer Science", "Physics", "Chemistry", "Psychology"],
    cutoff: "CUET/University Entrance",
    type: "Science"
  },
  {
    id: 145,
    name: "Stella Maris College",
    rank: 145,
    location: "Chennai",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    cutoff: "Tamil Nadu Board 88%+",
    type: "Science"
  },
  
  // Final batch to exceed 150
  {
    id: 146,
    name: "Symbiosis Institute of Technology",
    rank: 146,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "SET/JEE Main",
    type: "Engineering"
  },
  {
    id: 147,
    name: "MIT World Peace University",
    rank: 147,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-25000",
    type: "Engineering"
  },
  {
    id: 148,
    name: "Vishwakarma Institute of Technology",
    rank: 148,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-20000",
    type: "Engineering"
  },
  {
    id: 149,
    name: "Cummins College of Engineering",
    rank: 149,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-22000",
    type: "Engineering"
  },
  {
    id: 150,
    name: "Sinhgad College of Engineering",
    rank: 150,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-28000",
    type: "Engineering"
  },
  {
    id: 151,
    name: "Pimpri Chinchwad College of Engineering",
    rank: 151,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-30000",
    type: "Engineering"
  },
  {
    id: 152,
    name: "Army Institute of Technology",
    rank: 152,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-35000",
    type: "Engineering"
  },
  {
    id: 153,
    name: "Bharati Vidyapeeth College of Engineering Pune",
    rank: 153,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Mechanical Engineering"],
    cutoff: "MHT-CET Rank 1-40000",
    type: "Engineering"
  },
  {
    id: 154,
    name: "D.Y. Patil College of Engineering",
    rank: 154,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-45000",
    type: "Engineering"
  },
  {
    id: 155,
    name: "Pune Institute of Computer Technology",
    rank: 155,
    location: "Pune",
    courses: ["Computer Science", "Information Technology", "Electronics Engineering"],
    cutoff: "MHT-CET Rank 1-5000",
    type: "Engineering"
  }
];
