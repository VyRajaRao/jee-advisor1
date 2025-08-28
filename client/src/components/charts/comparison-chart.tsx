import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ComparisonChartProps {
  data: Array<{
    year: number;
    collegeA?: number;
    collegeB?: number;
  }>;
  collegeAName: string;
  collegeBName: string;
}

export function ComparisonChart({ data, collegeAName, collegeBName }: ComparisonChartProps) {
  return (
    <div className="w-full h-full overflow-x-auto">
      <div className="min-w-[400px]">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            <Legend 
              wrapperStyle={{ color: "hsl(210, 40%, 98%)" }}
            />
            <Bar 
              dataKey="collegeA" 
              fill="hsl(186, 100%, 69%)" 
              name={collegeAName}
            />
            <Bar 
              dataKey="collegeB" 
              fill="hsl(142, 76%, 36%)" 
              name={collegeBName}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
