import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ComparisonChart } from "@/components/charts/comparison-chart";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart3 } from "lucide-react";
import type { TrendData, Metadata } from "@/types/cutoff";

export default function Compare() {
  const [collegeA, setCollegeA] = useState({
    institute: "IIT Bombay",
    branch: "Computer Science and Engineering",
  });
  const [collegeB, setCollegeB] = useState({
    institute: "IIT Delhi",
    branch: "Computer Science and Engineering",
  });
  const [showComparison, setShowComparison] = useState(false);

  // Fetch metadata for filter options
  const { data: metadata } = useQuery<Metadata>({
    queryKey: ["/api/metadata"],
  });

  // Fetch comparison data for College A
  const { data: dataA, isLoading: loadingA } = useQuery<TrendData[]>({
    queryKey: ["/api/trends/yearly", collegeA],
    queryFn: async () => {
      const params = new URLSearchParams(collegeA);
      const response = await fetch(`/api/trends/yearly?${params}`);
      if (!response.ok) throw new Error("Failed to fetch college A data");
      return response.json();
    },
    enabled: showComparison,
  });

  // Fetch comparison data for College B
  const { data: dataB, isLoading: loadingB } = useQuery<TrendData[]>({
    queryKey: ["/api/trends/yearly", collegeB],
    queryFn: async () => {
      const params = new URLSearchParams(collegeB);
      const response = await fetch(`/api/trends/yearly?${params}`);
      if (!response.ok) throw new Error("Failed to fetch college B data");
      return response.json();
    },
    enabled: showComparison,
  });

  const handleCompare = () => {
    setShowComparison(true);
  };

  // Combine data for comparison chart
  const comparisonData = React.useMemo(() => {
    if (!dataA || !dataB) return [];

    const yearsA = new Map(dataA.map(d => [d.year, d.averageClosingRank]));
    const yearsB = new Map(dataB.map(d => [d.year, d.averageClosingRank]));
    
    const allYears = new Set([...yearsA.keys(), ...yearsB.keys()]);
    
    return Array.from(allYears).sort().map(year => ({
      year,
      collegeA: yearsA.get(year),
      collegeB: yearsB.get(year),
    }));
  }, [dataA, dataB]);

  if (!metadata) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-400 mb-4">College Comparison</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Side-by-side analysis of cutoffs across different institutes and branches
            </p>
          </div>
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-pink-400 mb-4">College Comparison</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Side-by-side analysis of cutoffs across different institutes and branches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* College A Selection */}
          <div className="gradient-border">
            <div className="gradient-border-content p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">College A</h3>
              <div className="space-y-4">
                <Select 
                  value={collegeA.institute} 
                  onValueChange={(value) => setCollegeA(prev => ({ ...prev, institute: value }))}
                >
                  <SelectTrigger 
                    className="w-full focus:ring-2 focus:ring-cyan-400"
                    data-testid="college-a-institute"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {metadata.institutes.slice(0, 10).map((institute) => (
                      <SelectItem key={institute} value={institute}>
                        {institute}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select 
                  value={collegeA.branch} 
                  onValueChange={(value) => setCollegeA(prev => ({ ...prev, branch: value }))}
                >
                  <SelectTrigger 
                    className="w-full focus:ring-2 focus:ring-cyan-400"
                    data-testid="college-a-branch"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {metadata.branches.slice(0, 10).map((branch) => (
                      <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* College B Selection */}
          <div className="gradient-border">
            <div className="gradient-border-content p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">College B</h3>
              <div className="space-y-4">
                <Select 
                  value={collegeB.institute} 
                  onValueChange={(value) => setCollegeB(prev => ({ ...prev, institute: value }))}
                >
                  <SelectTrigger 
                    className="w-full focus:ring-2 focus:ring-emerald-400"
                    data-testid="college-b-institute"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {metadata.institutes.slice(0, 10).map((institute) => (
                      <SelectItem key={institute} value={institute}>
                        {institute}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select 
                  value={collegeB.branch} 
                  onValueChange={(value) => setCollegeB(prev => ({ ...prev, branch: value }))}
                >
                  <SelectTrigger 
                    className="w-full focus:ring-2 focus:ring-emerald-400"
                    data-testid="college-b-branch"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {metadata.branches.slice(0, 10).map((branch) => (
                      <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Results */}
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-foreground">Comparison Results</h3>
            <Button
              onClick={handleCompare}
              className="btn-neon-pink transition-all duration-300"
              data-testid="compare-button"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Compare
            </Button>
          </div>
          <div className="h-64">
            {!showComparison ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Click "Compare" to see the comparison chart
              </div>
            ) : loadingA || loadingB ? (
              <Skeleton className="w-full h-full" />
            ) : comparisonData.length > 0 ? (
              <ComparisonChart
                data={comparisonData}
                collegeAName={`${collegeA.institute} ${collegeA.branch}`}
                collegeBName={`${collegeB.institute} ${collegeB.branch}`}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No comparison data available for the selected colleges
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
