import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, GraduationCap, BarChart3, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const [searchRank, setSearchRank] = useState("");

  const handleQuickSearch = () => {
    if (searchRank) {
      window.location.href = `/predictor?rank=${searchRank}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-4xl lg:text-6xl font-bold neon-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-pink-400 bg-clip-text"
                data-testid="hero-title"
              >
                Explore JEE Cutoffs
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Navigate your admission journey with comprehensive cutoff data from 2016-2024.{" "}
                <span className="text-cyan-400 font-semibold">Plan smartly, succeed confidently.</span>
              </p>
            </div>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <div className="gradient-border">
                <div className="gradient-border-content p-6">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick College Finder</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="Enter your JEE Rank"
                        value={searchRank}
                        onChange={(e) => setSearchRank(e.target.value)}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        data-testid="quick-search-input"
                      />
                    </div>
                    <Button 
                      onClick={handleQuickSearch}
                      className="btn-neon-cyan transition-all duration-300"
                      data-testid="quick-search-button"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Find Colleges
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2" data-testid="stat-records">
                  20,000+
                </div>
                <div className="text-muted-foreground">Cutoff Records</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-2" data-testid="stat-institutes">
                  23
                </div>
                <div className="text-muted-foreground">IIT Institutes</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2" data-testid="stat-years">
                  9
                </div>
                <div className="text-muted-foreground">Years of Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to make informed decisions about your JEE admission journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Explorer */}
            <Link href="/explorer">
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cutoff Explorer</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced filtering and search through comprehensive JEE cutoff data
                </p>
              </div>
            </Link>

            {/* Trends */}
            <Link href="/trends">
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Trends Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive visualizations revealing admission patterns and trends
                </p>
              </div>
            </Link>

            {/* Compare */}
            <Link href="/compare">
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">College Comparison</h3>
                <p className="text-muted-foreground text-sm">
                  Side-by-side analysis of cutoffs across different institutes
                </p>
              </div>
            </Link>

            {/* Predictor */}
            <Link href="/predictor">
              <div className="bg-card border border-border rounded-xl p-6 hover-neon transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Rank Predictor</h3>
                <p className="text-muted-foreground text-sm">
                  Discover your college possibilities based on your JEE rank
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
