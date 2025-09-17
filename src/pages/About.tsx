import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info, Database, Brain, Target, Users, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 animated-gradient opacity-5 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-green/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-neon-green hover:text-neon-blue transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Info className="h-6 w-6 text-neon-green" />
            <span className="text-xl font-bold text-neon-green">About RankAdvisor</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neon-green">
              About RankAdvisor
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students with data-driven insights for smarter college decisions. 
              Our platform combines 8+ years of historical data with advanced analytics to guide your educational journey.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-card border-neon-blue/20 animate-slide-up">
              <CardHeader>
                <CardTitle className="neon-text">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to quality educational guidance by providing transparent, 
                  data-driven insights that help students make informed decisions about their 
                  college and career choices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-purple/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="neon-text-purple">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform for educational guidance in India, 
                  helping millions of students navigate their academic journey with 
                  confidence and clarity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <Card className="glass-card border-neon-blue/30 mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 neon-text text-2xl">
                <Brain className="h-6 w-6" />
                How RankAdvisor Works
              </CardTitle>
              <CardDescription className="text-lg">
                Understanding our methodology and data sources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-neon-blue/10 border border-neon-blue/30 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Database className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 neon-text">Data Collection</h3>
                  <p className="text-muted-foreground text-sm">
                    We aggregate data from official sources including JEE, NEET, and college admission records spanning 8+ years.
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 rounded-full bg-neon-purple/10 border border-neon-purple/30 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-neon-purple" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 neon-text-purple">AI Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Our machine learning models analyze patterns, trends, and correlations to generate accurate predictions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 rounded-full bg-neon-green/10 border border-neon-green/30 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-neon-green">Personalized Results</h3>
                  <p className="text-muted-foreground text-sm">
                    Get tailored recommendations and predictions based on your specific rank, category, and preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-card border-neon-pink/20 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-neon-pink">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                    Advanced college search and filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                    AI-powered rank prediction system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-pink" />
                    Interactive trend visualizations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green" />
                    Comprehensive college profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                    Historical cutoff analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                    Placement statistics and insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-green/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-neon-green">Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                    JEE Advanced & Main results (2016-2024)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                    NEET admission data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-pink" />
                    Official college websites
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green" />
                    NIRF rankings and reports
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                    Placement cell statistics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                    Student feedback and reviews
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Support */}
          <Card className="glass-card border-neon-blue/30 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 neon-text text-2xl">
                <Users className="h-6 w-6" />
                Contact & Support
              </CardTitle>
              <CardDescription className="text-lg">
                Get in touch with our team for help and feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 neon-text-purple">Get Help</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-neon-blue" />
                      <div>
                        <div className="font-medium text-foreground">Email Support</div>
                        <div className="text-muted-foreground">support@rankadvisor.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-neon-green" />
                      <div>
                        <div className="font-medium text-foreground">Phone Support</div>
                        <div className="text-muted-foreground">+91-1234-567-890</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-neon-pink">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/explore" className="block text-neon-blue hover:text-neon-purple transition-colors">
                      → College Explorer Guide
                    </Link>
                    <Link to="/predictor" className="block text-neon-blue hover:text-neon-purple transition-colors">
                      → How to Use Rank Predictor
                    </Link>
                    <Link to="/trends" className="block text-neon-blue hover:text-neon-purple transition-colors">
                      → Understanding Trend Charts
                    </Link>
                    <div className="block text-neon-blue hover:text-neon-purple transition-colors cursor-pointer">
                      → Frequently Asked Questions
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;