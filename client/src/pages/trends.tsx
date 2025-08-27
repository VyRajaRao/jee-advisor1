import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TrendChart } from "@/components/charts/trend-chart";
import { CategoryChart } from "@/components/charts/category-chart";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { TrendData, CategoryData, CompetitiveBranch } from "@/types/cutoff";

export default function Trends() {
  const [trendFilters, setTrendFilters] = useState({
    institute: "IIT Bombay",
    branch: "Computer Science and Engineering",
  });
  const [categoryYear, setCategoryYear] = useState(2024);

  // Fetch yearly trends
  const { data: trendsData, isLoading: trendsLoading } = useQuery<TrendData[]>({
    queryKey: ["/api/trends/yearly", trendFilters],
    queryFn: async () => {
      const params = new URLSearchParams(trendFilters);
      const response = await fetch(`/api/trends/yearly?${params}`);
      if (!response.ok) throw new Error("Failed to fetch trends");
      return response.json();
    },
  });

  // Fetch category comparison
  const { data: categoryData, isLoading: categoryLoading } = useQuery<CategoryData[]>({
    queryKey: ["/api/trends/category", categoryYear],
    queryFn: async () => {
      const response = await fetch(`/api/trends/category?year=${categoryYear}`);
      if (!response.ok) throw new Error("Failed to fetch category data");
      return response.json();
    },
  });

  // Fetch competitive branches
  const { data: competitiveBranches, isLoading: competitiveLoading } = useQuery<CompetitiveBranch[]>({
    queryKey: ["/api/trends/competitive", categoryYear],
    queryFn: async () => {
      const response = await fetch(`/api/trends/competitive?year=${categoryYear}`);
      if (!response.ok) throw new Error("Failed to fetch competitive branches");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-4">Trends & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive visualizations revealing admission patterns and competitive trends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cutoff Trend Chart */}
          <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-foreground">Cutoff Trends by Year</h3>
              <div className="flex space-x-2">
                <Select 
                  value={`${trendFilters.institute}-${trendFilters.branch}`} 
                  onValueChange={(value) => {
                    const [institute, ...branchParts] = value.split('-');
                    const branch = branchParts.join('-');
                    setTrendFilters({ institute, branch });
                  }}
                >
                  <SelectTrigger className="w-48" data-testid="trend-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IIT Bombay-Computer Science and Engineering">
                      IIT Bombay CSE
                    </SelectItem>
                    <SelectItem value="IIT Delhi-Computer Science and Engineering">
                      IIT Delhi CSE
                    </SelectItem>
                    <SelectItem value="IIT Kharagpur-Computer Science and Engineering">
                      IIT Kharagpur CSE
                    </SelectItem>
                    <SelectItem value="IIT Bombay-Electrical Engineering">
                      IIT Bombay EE
                    </SelectItem>
                    <SelectItem value="IIT Delhi-Electrical Engineering">
                      IIT Delhi EE
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="h-64">
              {trendsLoading ? (
                <Skeleton className="w-full h-full" />
              ) : trendsData ? (
                <TrendChart data={trendsData} />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  No trend data available
                </div>
              )}
            </div>
          </div>

          {/* Top Competitive Branches */}
          <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-foreground">Most Competitive Branches {categoryYear}</h3>
              <Select 
                value={categoryYear.toString()} 
                onValueChange={(value) => setCategoryYear(parseInt(value))}
              >
                <SelectTrigger className="w-24" data-testid="competitive-year">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              {competitiveLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : competitiveBranches ? (
                competitiveBranches.slice(0, 5).map((branch, index) => (
                  <div
                    key={branch.branch}
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
                    data-testid={`competitive-branch-${index}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className={`w-4 h-4 rounded-full ${
                          index === 0 ? 'bg-cyan-400' :
                          index === 1 ? 'bg-emerald-400' :
                          index === 2 ? 'bg-pink-400' :
                          index === 3 ? 'bg-purple-400' :
                          'bg-orange-400'
                        }`}
                      />
                      <span className="text-foreground font-medium">{branch.branch}</span>
                    </div>
                    <span 
                      className={`font-semibold ${
                        index === 0 ? 'text-cyan-400' :
                        index === 1 ? 'text-emerald-400' :
                        index === 2 ? 'text-pink-400' :
                        index === 3 ? 'text-purple-400' :
                        'text-orange-400'
                      }`}
                    >
                      Rank {branch.bestClosingRank}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground text-center py-8">
                  No competitive branch data available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Comparison Chart */}
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <h3 className="text-lg font-semibold text-foreground">Category-wise Cutoff Comparison</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/30"
                data-testid="category-open"
              >
                OPEN
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-emerald-400/20 text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/30"
                data-testid="category-obc"
              >
                OBC-NCL
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-pink-400/20 text-pink-400 border-pink-400/30 hover:bg-pink-400/30"
                data-testid="category-sc"
              >
                SC
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-purple-400/20 text-purple-400 border-purple-400/30 hover:bg-purple-400/30"
                data-testid="category-st"
              >
                ST
              </Button>
            </div>
          </div>
          <div className="h-80">
            {categoryLoading ? (
              <Skeleton className="w-full h-full" />
            ) : categoryData ? (
              <CategoryChart data={categoryData.slice(0, 8)} />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No category comparison data available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
