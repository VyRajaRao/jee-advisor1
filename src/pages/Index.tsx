import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Target, Info, Sparkles, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10 -z-10" />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-neon-blue" />
            <span className="text-2xl font-bold neon-text">RankAdvisor</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-neon-blue transition-colors">Home</Link>
            <Link to="/explore" className="text-foreground hover:text-neon-blue transition-colors">Explore</Link>
            <Link to="/trends" className="text-foreground hover:text-neon-blue transition-colors">Trends</Link>
            <Link to="/predictor" className="text-foreground hover:text-neon-blue transition-colors">Predictor</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow-pulse">
              <span className="neon-text-purple">Rank</span>
              <span className="neon-text">Advisor</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Discover your perfect college match with AI-powered rank prediction, 
              comprehensive trend analysis, and detailed college exploration
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="neon-glow group relative overflow-hidden" asChild>
              <Link to="/explore">
                <span className="relative z-10">Get Started</span>
                <Sparkles className="ml-2 h-5 w-5 animate-float" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="neon-border hover:neon-glow" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* College Explorer Card */}
            <Link to="/explore" className="group">
              <Card className="glass-card border-neon-blue/20 hover:neon-glow transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                    <Search className="h-8 w-8 text-neon-blue animate-pulse" />
                  </div>
                  <CardTitle className="text-xl neon-text">Explore Colleges</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Search and filter thousands of colleges by name, rank, location, and courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Advanced search filters</li>
                    <li>• Real-time results</li>
                    <li>• Detailed college profiles</li>
                    <li>• Compare institutions</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Rank Predictor Card */}
            <Link to="/predictor" className="group">
              <Card className="glass-card border-neon-purple/20 hover:shadow-neon-purple hover:border-neon-purple/40 transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-neon-purple/10 border border-neon-purple/30">
                    <Target className="h-8 w-8 text-neon-purple animate-pulse" />
                  </div>
                  <CardTitle className="text-xl neon-text-purple">Rank Predictor</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    AI-powered predictions for college admissions based on your rank and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Smart rank analysis</li>
                    <li>• Probability scores</li>
                    <li>• Category-wise predictions</li>
                    <li>• Visual insights</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Trends & Analysis Card */}
            <Link to="/trends" className="group">
              <Card className="glass-card border-neon-pink/20 hover:shadow-[0_0_30px_hsl(330_100%_70%/0.5)] hover:border-neon-pink/40 transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-neon-pink/10 border border-neon-pink/30">
                    <TrendingUp className="h-8 w-8 text-neon-pink animate-pulse" />
                  </div>
                  <CardTitle className="text-xl text-neon-pink">Trends & Analysis</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Interactive charts and comprehensive analysis of college admission trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Historical cutoff trends</li>
                    <li>• Interactive visualizations</li>
                    <li>• Course popularity metrics</li>
                    <li>• Export capabilities</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* About Card */}
            <Link to="/about" className="group">
              <Card className="glass-card border-neon-green/20 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.5)] hover:border-neon-green/40 transition-all duration-300 group-hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-neon-green/10 border border-neon-green/30">
                    <Info className="h-8 w-8 text-neon-green animate-pulse" />
                  </div>
                  <CardTitle className="text-xl text-neon-green">About & Support</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Learn more about our platform, methodology, and get help when you need it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Platform overview</li>
                    <li>• Data methodology</li>
                    <li>• User guides & tutorials</li>
                    <li>• Contact support</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-card to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-float">
              <div className="text-4xl md:text-5xl font-bold neon-text mb-2">150+</div>
              <div className="text-muted-foreground">Colleges in Database</div>
            </div>
            <div className="animate-float" style={{animationDelay: '1s'}}>
              <div className="text-4xl md:text-5xl font-bold neon-text-purple mb-2">95%</div>
              <div className="text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="animate-float" style={{animationDelay: '2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-neon-pink mb-2">8 Years</div>
              <div className="text-muted-foreground">Historical Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 RankAdvisor. Empowering students with data-driven college decisions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;