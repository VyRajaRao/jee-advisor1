import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, GraduationCap, ArrowLeft, ExternalLink, Filter } from "lucide-react";
import { mockColleges } from "@/data/colleges";

const CollegeExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [filteredColleges, setFilteredColleges] = useState(mockColleges);

  const handleSearch = () => {
    let filtered = mockColleges;
    
    if (searchTerm) {
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedLocation !== "all") {
      filtered = filtered.filter(college => college.location === selectedLocation);
    }
    
    if (selectedType !== "all") {
      filtered = filtered.filter(college => college.type === selectedType);
    }
    
    setFilteredColleges(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 animated-gradient opacity-5 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Search className="h-6 w-6 text-neon-blue" />
            <span className="text-xl font-bold neon-text">College Explorer</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Search and Filters */}
          <Card className="glass-card border-neon-blue/30 mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 neon-text">
                <Filter className="h-5 w-5" />
                Search & Filter Colleges
              </CardTitle>
              <CardDescription>
                Find the perfect college based on your preferences and requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <Input
                  placeholder="Search colleges or courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="neon-border"
                />
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="neon-border">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="New Delhi">New Delhi</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Kolkata">Kolkata</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Kanpur">Kanpur</SelectItem>
                    <SelectItem value="Kharagpur">Kharagpur</SelectItem>
                    <SelectItem value="Roorkee">Roorkee</SelectItem>
                    <SelectItem value="Guwahati">Guwahati</SelectItem>
                    <SelectItem value="Indore">Indore</SelectItem>
                    <SelectItem value="Mandi">Mandi</SelectItem>
                    <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                    <SelectItem value="Warangal">Warangal</SelectItem>
                    <SelectItem value="Mangalore">Mangalore</SelectItem>
                    <SelectItem value="Rourkela">Rourkela</SelectItem>
                    <SelectItem value="Kozhikode">Kozhikode</SelectItem>
                    <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                    <SelectItem value="Jaipur">Jaipur</SelectItem>
                    <SelectItem value="Bhopal">Bhopal</SelectItem>
                    <SelectItem value="Lucknow">Lucknow</SelectItem>
                    <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                    <SelectItem value="Vellore">Vellore</SelectItem>
                    <SelectItem value="Thiruvananthapuram">Thiruvananthapuram</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="neon-border">
                    <SelectValue placeholder="College type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medical">Medical</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleSearch} className="neon-glow">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college, index) => (
              <Card 
                key={college.id} 
                className="glass-card border-neon-blue/20 hover:neon-glow transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                      Rank #{college.rank}
                    </Badge>
                    <Badge variant="outline" className="border-neon-purple/30 text-neon-purple">
                      {college.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:neon-text transition-colors">
                    {college.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {college.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.slice(0, 3).map((course, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-foreground">Cutoff Range:</h4>
                    <p className="text-sm text-muted-foreground">{college.cutoff}</p>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 neon-glow text-xs" asChild>
                      <Link to={`/college/${college.id}`}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <Card className="glass-card border-neon-blue/20 animate-fade-in">
              <CardContent className="text-center py-12">
                <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeExplorer;
