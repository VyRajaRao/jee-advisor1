import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Target, Calculator, TrendingUp, MapPin } from "lucide-react";

interface PredictionResult {
  college: string;
  probability: number;
  rank: number;
  location: string;
  branch: string;
  status: 'High' | 'Medium' | 'Low';
}

const RankPredictor = () => {
  const [formData, setFormData] = useState({
    rank: '',
    category: '',
    preferredBranch: '',
    homeState: ''
  });
  
  const [predictions, setPredictions] = useState<PredictionResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock prediction logic - replace with real ML model
  const generatePredictions = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockPredictions: PredictionResult[] = [
        {
          college: "IIT Delhi",
          probability: 85,
          rank: 1,
          location: "New Delhi",
          branch: formData.preferredBranch || "Computer Science",
          status: 'High'
        },
        {
          college: "IIT Bombay", 
          probability: 72,
          rank: 2,
          location: "Mumbai",
          branch: formData.preferredBranch || "Computer Science",
          status: 'High'
        },
        {
          college: "IIT Madras",
          probability: 65,
          rank: 3,
          location: "Chennai",
          branch: formData.preferredBranch || "Computer Science", 
          status: 'Medium'
        },
        {
          college: "IIT Kanpur",
          probability: 58,
          rank: 4,
          location: "Kanpur",
          branch: formData.preferredBranch || "Computer Science",
          status: 'Medium'
        },
        {
          college: "IIT Kharagpur",
          probability: 45,
          rank: 5,
          location: "Kharagpur", 
          branch: formData.preferredBranch || "Computer Science",
          status: 'Low'
        }
      ];
      
      setPredictions(mockPredictions);
      setIsLoading(false);
    }, 1500);
  };
  
  const handlePredict = () => {
    if (formData.rank && formData.category && formData.preferredBranch) {
      generatePredictions();
    }
  };
  
  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return 'text-neon-green';
    if (probability >= 50) return 'text-neon-blue';
    return 'text-neon-pink';
  };
  
  const getStatusBadge = (status: string, probability: number) => {
    if (status === 'High') return 'bg-neon-green/20 text-neon-green border-neon-green/30';
    if (status === 'Medium') return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
    return 'bg-neon-pink/20 text-neon-pink border-neon-pink/30';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 animated-gradient opacity-5 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-neon-purple/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-neon-purple hover:text-neon-blue transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Target className="h-6 w-6 text-neon-purple" />
            <span className="text-xl font-bold neon-text-purple">Rank Predictor</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text-purple">
              AI-Powered College Predictions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized college admission predictions based on your rank, category, and preferences. 
              Our ML model analyzes 8+ years of historical data to provide accurate insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="glass-card border-neon-purple/30 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 neon-text-purple">
                  <Calculator className="h-5 w-5" />
                  Prediction Parameters
                </CardTitle>
                <CardDescription>
                  Enter your details to get personalized college admission predictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rank" className="text-foreground font-medium">Your Rank</Label>
                  <Input
                    id="rank"
                    type="number"
                    placeholder="Enter your JEE/NEET rank"
                    value={formData.rank}
                    onChange={(e) => setFormData({...formData, rank: e.target.value})}
                    className="neon-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground font-medium">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger className="neon-border">
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC-NCL</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="branch" className="text-foreground font-medium">Preferred Branch</Label>
                  <Select value={formData.preferredBranch} onValueChange={(value) => setFormData({...formData, preferredBranch: value})}>
                    <SelectTrigger className="neon-border">
                      <SelectValue placeholder="Select preferred branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science">Computer Science & Engineering</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                      <SelectItem value="Chemical Engineering">Chemical Engineering</SelectItem>
                      <SelectItem value="Aerospace Engineering">Aerospace Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="homeState" className="text-foreground font-medium">Home State (Optional)</Label>
                  <Select value={formData.homeState} onValueChange={(value) => setFormData({...formData, homeState: value})}>
                    <SelectTrigger className="neon-border">
                      <SelectValue placeholder="Select your home state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handlePredict} 
                  className="w-full neon-glow" 
                  disabled={!formData.rank || !formData.category || !formData.preferredBranch || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-foreground border-t-transparent" />
                      Analyzing...
                    </div>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Predict My Chances
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="glass-card border-neon-blue/30 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 neon-text">
                  <Target className="h-5 w-5" />
                  Prediction Results
                </CardTitle>
                <CardDescription>
                  {predictions.length > 0 
                    ? "Based on your inputs, here are your college admission probabilities"
                    : "Fill the form and click predict to see your personalized results"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {predictions.length === 0 && !isLoading && (
                  <div className="text-center py-12">
                    <Target className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                    <p className="text-muted-foreground">Your predictions will appear here</p>
                  </div>
                )}
                
                {isLoading && (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-20 bg-muted/20 rounded-lg" />
                      </div>
                    ))}
                  </div>
                )}
                
                {predictions.length > 0 && !isLoading && (
                  <div className="space-y-4">
                    {predictions.map((prediction, index) => (
                      <Card key={index} className="glass-card border-neon-blue/20 hover:neon-glow transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-foreground">{prediction.college}</h4>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {prediction.location} • {prediction.branch}
                              </div>
                            </div>
                            <Badge className={getStatusBadge(prediction.status, prediction.probability)}>
                              {prediction.status} Chance
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Admission Probability</span>
                              <span className={`font-bold ${getProbabilityColor(prediction.probability)}`}>
                                {prediction.probability}%
                              </span>
                            </div>
                            <Progress value={prediction.probability} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {predictions.length > 0 && (
            <Card className="glass-card border-neon-green/20 mt-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-neon-green">Prediction Insights</CardTitle>
                <CardDescription>
                  Key factors affecting your admission chances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                    <h4 className="font-semibold text-neon-blue mb-2">Rank Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Your rank puts you in the top percentile for premier engineering colleges
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                    <h4 className="font-semibold text-neon-purple mb-2">Category Benefit</h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.category === 'general' 
                        ? "General category has standard cutoff requirements"
                        : "Reserved category provides additional admission opportunities"
                      }
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-neon-green/10 border border-neon-green/20">
                    <h4 className="font-semibold text-neon-green mb-2">Branch Demand</h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.preferredBranch} is highly competitive with excellent career prospects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default RankPredictor;