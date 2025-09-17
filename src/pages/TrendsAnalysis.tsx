import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, TrendingUp, BarChart3, Download, Filter } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Mock data for charts
const cutoffTrendData = [
  { year: '2019', 'IIT Delhi': 45, 'IIT Bombay': 50, 'IIT Madras': 60 },
  { year: '2020', 'IIT Delhi': 42, 'IIT Bombay': 48, 'IIT Madras': 58 },
  { year: '2021', 'IIT Delhi': 40, 'IIT Bombay': 45, 'IIT Madras': 55 },
  { year: '2022', 'IIT Delhi': 38, 'IIT Bombay': 43, 'IIT Madras': 52 },
  { year: '2023', 'IIT Delhi': 35, 'IIT Bombay': 40, 'IIT Madras': 50 },
  { year: '2024', 'IIT Delhi': 33, 'IIT Bombay': 38, 'IIT Madras': 48 }
];

const coursePopularityData = [
  { course: 'Computer Science', applications: 45000, selections: 1200 },
  { course: 'Mechanical Engineering', applications: 35000, selections: 2500 },
  { course: 'Electrical Engineering', applications: 30000, selections: 2200 },
  { course: 'Civil Engineering', applications: 25000, selections: 2800 },
  { course: 'Chemical Engineering', applications: 20000, selections: 1800 }
];

const admissionRateData = [
  { college: 'IIT Delhi', rate: 2.8, year: 2024 },
  { college: 'IIT Bombay', rate: 3.1, year: 2024 },
  { college: 'IIT Madras', rate: 3.5, year: 2024 },
  { college: 'IIT Kanpur', rate: 4.2, year: 2024 },
  { college: 'IIT Kharagpur', rate: 4.8, year: 2024 }
];

const TrendsAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 animated-gradient opacity-5 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-pink/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-neon-pink hover:text-neon-blue transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-neon-pink" />
            <span className="text-xl font-bold text-neon-pink">Trends & Analysis</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text-purple">
              Data-Driven Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive trends, analyze historical data, and make informed decisions 
              with interactive visualizations spanning 8+ years of college admission data
            </p>
          </div>

          {/* Controls */}
          <Card className="glass-card border-neon-pink/30 mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-neon-pink">
                <Filter className="h-5 w-5" />
                Analysis Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex gap-4">
                  <Select defaultValue="2024">
                    <SelectTrigger className="neon-border w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="neon-border w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="neon-glow">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Cutoff Trends Chart */}
            <Card className="glass-card border-neon-blue/20 animate-slide-up">
              <CardHeader>
                <CardTitle className="neon-text">Cutoff Rank Trends (2019-2024)</CardTitle>
                <CardDescription>
                  Historical cutoff trends for top engineering colleges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={cutoffTrendData}>
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
                    <Line 
                      type="monotone" 
                      dataKey="IIT Delhi" 
                      stroke="hsl(var(--neon-blue))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--neon-blue))', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="IIT Bombay" 
                      stroke="hsl(var(--neon-purple))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--neon-purple))', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="IIT Madras" 
                      stroke="hsl(var(--neon-pink))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--neon-pink))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Course Popularity Chart */}
            <Card className="glass-card border-neon-purple/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="neon-text-purple">Course Popularity Analysis</CardTitle>
                <CardDescription>
                  Applications vs selections by engineering branch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={coursePopularityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="course" 
                      stroke="hsl(var(--foreground))"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--neon-purple) / 0.3)',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="applications" 
                      fill="hsl(var(--neon-purple) / 0.8)" 
                      name="Applications"
                    />
                    <Bar 
                      dataKey="selections" 
                      fill="hsl(var(--neon-blue) / 0.8)" 
                      name="Selections"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Analysis Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Admission Rate Analysis */}
            <Card className="glass-card border-neon-green/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-neon-green">Admission Rates 2024</CardTitle>
                <CardDescription>
                  Acceptance rates across premier engineering institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={admissionRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="college" 
                      stroke="hsl(var(--foreground))"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--neon-green) / 0.3)',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="hsl(var(--neon-green))" 
                      fill="hsl(var(--neon-green) / 0.3)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="glass-card border-neon-blue/20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 neon-text">
                  <BarChart3 className="h-5 w-5" />
                  Key Insights
                </CardTitle>
                <CardDescription>
                  Data-driven observations from our analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <h4 className="font-semibold text-neon-blue mb-2">Trending Upward</h4>
                  <p className="text-sm text-muted-foreground">
                    Computer Science remains the most competitive branch with cutoffs improving by 15% over 5 years
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                  <h4 className="font-semibold text-neon-purple mb-2">Market Shift</h4>
                  <p className="text-sm text-muted-foreground">
                    Emerging fields like AI/ML are seeing 300% increase in applications year-over-year
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                  <h4 className="font-semibold text-neon-pink mb-2">Geographic Trend</h4>
                  <p className="text-sm text-muted-foreground">
                    Southern IITs showing consistent improvement in research rankings and placements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsAnalysis;