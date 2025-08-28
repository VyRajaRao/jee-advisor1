import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TrendChartProps {
  data: Array<{
    year: number;
    averageClosingRank: number;
  }>;
  title?: string;
}

export function TrendChart({ data, title = "Cutoff Trends by Year" }: TrendChartProps) {
  return (
    <div className="w-full h-full overflow-x-auto">
      <div className="min-w-[400px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 17%)" />
            <XAxis 
              dataKey="year" 
              stroke="hsl(215, 20%, 65%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(215, 20%, 65%)"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 84%, 8%)",
                border: "1px solid hsl(217, 32%, 17%)",
                borderRadius: "8px",
                color: "hsl(210, 40%, 98%)",
              }}
              labelStyle={{ color: "hsl(186, 100%, 69%)" }}
            />
            <Line
              type="monotone"
              dataKey="averageClosingRank"
              stroke="hsl(186, 100%, 69%)"
              strokeWidth={3}
              dot={{ 
                fill: "hsl(186, 100%, 69%)", 
                strokeWidth: 2, 
                r: 6 
              }}
              activeDot={{ 
                r: 8, 
                fill: "hsl(186, 100%, 69%)",
                stroke: "hsl(186, 100%, 69%)",
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
