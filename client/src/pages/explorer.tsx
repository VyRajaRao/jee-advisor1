import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FilterControls } from "@/components/cutoff/filter-controls";
import { CutoffTable } from "@/components/cutoff/cutoff-table";
import { Skeleton } from "@/components/ui/skeleton";
import type { CutoffFilters, CutoffResponse, Metadata } from "@/types/cutoff";

export default function Explorer() {
  const [filters, setFilters] = useState<CutoffFilters>({
    page: 1,
    limit: 10,
  });

  // Fetch metadata for filter options
  const { data: metadata } = useQuery<Metadata>({
    queryKey: ["/api/metadata"],
  });

  // Fetch cutoff records with current filters
  const { data: cutoffData, isLoading } = useQuery<CutoffResponse>({
    queryKey: ["/api/cutoffs", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          params.append(key, value.toString());
        }
      });

      const response = await fetch(`/api/cutoffs?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cutoff data");
      }
      return response.json();
    },
  });

  const handleFilterChange = (newFilters: CutoffFilters) => {
    setFilters({ ...newFilters, page: 1 }); // Reset to first page on filter change
  };

  const handleApplyFilters = () => {
    // Trigger refetch by updating filters (this happens automatically with React Query)
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  const handleExportCSV = async () => {
    try {
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== "" && key !== "page" && key !== "limit") {
          params.append(key, value.toString());
        }
      });

      const response = await fetch(`/api/export/csv?${params}`);
      
      if (!response.ok) {
        throw new Error("Failed to export CSV");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "jee_cutoffs.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Export failed:", error);
    }
  };

  if (!metadata) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-4">Cutoff Explorer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced filtering and real-time search through comprehensive JEE cutoff data
            </p>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-4">Cutoff Explorer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced filtering and real-time search through comprehensive JEE cutoff data
          </p>
        </div>

        <FilterControls
          filters={filters}
          metadata={metadata}
          onFilterChange={handleFilterChange}
          onApplyFilters={handleApplyFilters}
          onExportCSV={handleExportCSV}
        />

        {isLoading ? (
          <Skeleton className="h-96 w-full" />
        ) : cutoffData ? (
          <CutoffTable
            data={cutoffData}
            onPageChange={handlePageChange}
          />
        ) : (
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-muted-foreground">Failed to load cutoff data. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}
