import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import type { RankPrediction } from "@/types/cutoff";

interface RankInputProps {
  prediction: RankPrediction;
  onPredictionChange: (prediction: RankPrediction) => void;
  onPredict: () => void;
  isLoading: boolean;
}

export function RankInput({
  prediction,
  onPredictionChange,
  onPredict,
  isLoading,
}: RankInputProps) {
  const updatePrediction = (key: keyof RankPrediction, value: any) => {
    onPredictionChange({ ...prediction, [key]: value });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label className="block text-sm font-medium text-muted-foreground mb-2">
            Your JEE Rank
          </Label>
          <Input
            type="number"
            placeholder="e.g., 1500"
            value={prediction.rank || ""}
            onChange={(e) => updatePrediction("rank", parseInt(e.target.value) || 0)}
            className="w-full focus:ring-2 focus:ring-purple-400"
            data-testid="rank-input"
          />
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-muted-foreground mb-2">
            Category
          </Label>
          <Select 
            value={prediction.category} 
            onValueChange={(value) => updatePrediction("category", value)}
          >
            <SelectTrigger 
              className="w-full focus:ring-2 focus:ring-purple-400"
              data-testid="category-select"
            >
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="OPEN">OPEN</SelectItem>
              <SelectItem value="OBC-NCL">OBC-NCL</SelectItem>
              <SelectItem value="SC">SC</SelectItem>
              <SelectItem value="ST">ST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-muted-foreground mb-2">
            Gender Quota
          </Label>
          <Select 
            value={prediction.genderQuota} 
            onValueChange={(value) => updatePrediction("genderQuota", value)}
          >
            <SelectTrigger 
              className="w-full focus:ring-2 focus:ring-purple-400"
              data-testid="gender-quota-select"
            >
              <SelectValue placeholder="Select Gender Quota" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gender-Neutral">Gender-Neutral</SelectItem>
              <SelectItem value="Female-Only">Female-Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button
        onClick={onPredict}
        disabled={!prediction.rank || !prediction.category || !prediction.genderQuota || isLoading}
        className="w-full mt-6 btn-neon-purple transition-all duration-300"
        data-testid="predict-button"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        {isLoading ? "Predicting..." : "Predict My Colleges"}
      </Button>
    </div>
  );
}
