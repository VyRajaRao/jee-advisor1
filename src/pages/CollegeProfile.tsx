import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MapPin, Users, BookOpen, Award, TrendingUp, Star, Phone, Globe, Mail } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockColleges } from "@/data/colleges";
import { generateCollegeDetails, predefinedCollegeData } from "@/data/collegeData";

const CollegeProfile = () => {
  const { id } = useParams();
  
  // Find the basic college info from the shared data
  const basicCollegeInfo = mockColleges.find(c => c.id === Number(id));
  
  if (!basicCollegeInfo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="glass-card border-neon-blue/20">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">College Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested college profile could not be found.</p>
            <Button asChild className="neon-glow">
              <Link to="/explore">Back to Explorer</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Get detailed college data - use predefined data for some colleges, generate for others
  const college = predefinedCollegeData[Number(id)] || generateCollegeDetails(basicCollegeInfo);

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 animated-gradient opacity-5 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/explore" className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Explorer</span>
          </Link>
          <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
            Rank #{college.rank}
          </Badge>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-8 animate-fade-in">
            <Card className="glass-card border-neon-blue/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                        <Award className="h-8 w-8 text-neon-blue" />
                      </div>
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold neon-text mb-2">
                          {college.name}
                        </h1>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{college.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>Est. {college.established}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {college.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                        {college.type}
                      </Badge>
                      {college.rankings.map((ranking, index) => (
                        <Badge key={index} variant="outline" className="border-neon-blue/30 text-neon-blue">
                          {ranking.agency}: #{ranking.rank}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-80">
                    <Card className="glass-card border-neon-purple/20">
                      <CardHeader>
                        <CardTitle className="text-lg neon-text-purple">Quick Contact</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4 text-neon-blue" />
                          <a href={college.website} target="_blank" rel="noopener noreferrer" 
                             className="text-neon-blue hover:text-neon-purple transition-colors">
                            Official Website
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-neon-green" />
                          <span className="text-muted-foreground">{college.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-neon-pink" />
                          <span className="text-muted-foreground">{college.email}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="courses" className="animate-slide-up">
            <TabsList className="grid w-full grid-cols-4 glass-card border border-neon-blue/20">
              <TabsTrigger value="courses" className="data-[state=active]:neon-glow">Courses</TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:neon-glow">Trends</TabsTrigger>
              <TabsTrigger value="placements" className="data-[state=active]:neon-glow">Placements</TabsTrigger>
              <TabsTrigger value="facilities" className="data-[state=active]:neon-glow">Facilities</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="mt-6">
              <Card className="glass-card border-neon-blue/20">
                <CardHeader>
                  <CardTitle className="neon-text">Available Courses & Cutoffs</CardTitle>
                  <CardDescription>
                    Detailed information about courses offered and their admission requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {college.courses.map((course, index) => (
                      <Card key={index} className="glass-card border-neon-purple/20 hover:neon-glow transition-all">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-lg mb-2 text-foreground">{course.name}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Cutoff:</span>
                              <span className="text-neon-blue font-medium">{course.cutoff}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Total Seats:</span>
                              <span className="text-neon-purple font-medium">{course.seats}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends" className="mt-6">
              <Card className="glass-card border-neon-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 neon-text">
                    <TrendingUp className="h-5 w-5" />
                    Cutoff Trends Analysis
                  </CardTitle>
                  <CardDescription>
                    Historical cutoff data across different categories (2019-2024)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={college.cutoffTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
                      <YAxis stroke="hsl(var(--foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--neon-blue) / 0.3)',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="general" stroke="hsl(var(--neon-blue))" strokeWidth={3} name="General" />
                      <Line type="monotone" dataKey="obc" stroke="hsl(var(--neon-purple))" strokeWidth={3} name="OBC" />
                      <Line type="monotone" dataKey="sc" stroke="hsl(var(--neon-green))" strokeWidth={3} name="SC" />
                      <Line type="monotone" dataKey="st" stroke="hsl(var(--neon-pink))" strokeWidth={3} name="ST" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Placements Tab */}
            <TabsContent value="placements" className="mt-6">
              <Card className="glass-card border-neon-blue/20">
                <CardHeader>
                  <CardTitle className="neon-text">Placement Statistics</CardTitle>
                  <CardDescription>
                    Comprehensive placement data and career outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={college.placementStats}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
                      <YAxis stroke="hsl(var(--foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--neon-purple) / 0.3)',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="avgPackage" fill="hsl(var(--neon-blue) / 0.8)" name="Avg Package (LPA)" />
                      <Bar dataKey="placementRate" fill="hsl(var(--neon-purple) / 0.8)" name="Placement Rate %" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                      <div className="text-3xl font-bold neon-text mb-2">₹25.82 LPA</div>
                      <div className="text-muted-foreground">Average Package 2024</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                      <div className="text-3xl font-bold neon-text-purple mb-2">₹3.0 Cr</div>
                      <div className="text-muted-foreground">Highest Package 2024</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-neon-green/10 border border-neon-green/20">
                      <div className="text-3xl font-bold text-neon-green mb-2">95%</div>
                      <div className="text-muted-foreground">Placement Rate 2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-6">
              <Card className="glass-card border-neon-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 neon-text">
                    <Star className="h-5 w-5" />
                    Campus Facilities
                  </CardTitle>
                  <CardDescription>
                    World-class infrastructure and amenities available on campus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {college.facilities.map((facility, index) => (
                      <div key={index} className="p-4 rounded-lg glass-card border border-neon-blue/20 text-center hover:neon-glow transition-all">
                        <Users className="h-8 w-8 mx-auto text-neon-blue mb-2" />
                        <span className="text-foreground font-medium">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;