import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import type { PredictionResult } from "@/types/cutoff";

interface PredictionResultsProps {
  results: PredictionResult;
}

export function PredictionResults({ results }: PredictionResultsProps) {
  const { safe, borderline } = results;

  if (safe.length === 0 && borderline.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Enter your rank and preferences above to see predictions.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Safe Choices */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Safe Choices
        </h3>
        <div className="space-y-3">
          {safe.length === 0 ? (
            <div className="text-muted-foreground text-sm">
              No safe options found for your rank range.
            </div>
          ) : (
            safe.map((record) => (
              <div
                key={record.id}
                className="p-4 bg-emerald-400/10 border border-emerald-400/30 rounded-lg"
                data-testid={`safe-option-${record.id}`}
              >
                <div className="font-medium text-foreground">{record.institute}</div>
                <div className="text-sm text-emerald-400">{record.branch}</div>
                <div className="text-xs text-muted-foreground">
                  Closing Rank: {record.closingRank}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Borderline Options */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Borderline Options
        </h3>
        <div className="space-y-3">
          {borderline.length === 0 ? (
            <div className="text-muted-foreground text-sm">
              No borderline options found for your rank range.
            </div>
          ) : (
            borderline.map((record) => (
              <div
                key={record.id}
                className="p-4 bg-orange-400/10 border border-orange-400/30 rounded-lg"
                data-testid={`borderline-option-${record.id}`}
              >
                <div className="font-medium text-foreground">{record.institute}</div>
                <div className="text-sm text-orange-400">{record.branch}</div>
                <div className="text-xs text-muted-foreground">
                  Closing Rank: {record.closingRank}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
