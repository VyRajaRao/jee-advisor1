import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { RankInput } from "@/components/predictor/rank-input";
import { PredictionResults } from "@/components/predictor/prediction-results";
import { useLocation } from "wouter";
import type { RankPrediction, PredictionResult } from "@/types/cutoff";

export default function Predictor() {
  const [location] = useLocation();
  const [prediction, setPrediction] = useState<RankPrediction>({
    rank: 0,
    category: "OPEN",
    genderQuota: "Gender-Neutral",
  });
  const [results, setResults] = useState<PredictionResult>({ safe: [], borderline: [] });

  // Parse URL parameters for direct rank input
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const rank = params.get('rank');
    if (rank) {
      setPrediction(prev => ({ ...prev, rank: parseInt(rank) }));
    }
  }, [location]);

  const predictMutation = useMutation({
    mutationFn: async (prediction: RankPrediction) => {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prediction),
      });
      
      if (!response.ok) {
        throw new Error("Failed to predict colleges");
      }
      
      return response.json();
    },
    onSuccess: (data: PredictionResult) => {
      setResults(data);
    },
    onError: (error) => {
      console.error("Prediction failed:", error);
      setResults({ safe: [], borderline: [] });
    },
  });

  const handlePredict = () => {
    if (prediction.rank && prediction.category && prediction.genderQuota) {
      predictMutation.mutate(prediction);
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-400 mb-4">Rank Predictor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your college possibilities based on your JEE rank and preferences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <RankInput
            prediction={prediction}
            onPredictionChange={setPrediction}
            onPredict={handlePredict}
            isLoading={predictMutation.isPending}
          />

          <PredictionResults results={results} />
        </div>
      </div>
    </div>
  );
}
