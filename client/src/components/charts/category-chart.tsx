import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface CategoryChartProps {
  data: Array<{
    branch: string;
    OPEN?: number;
    "OBC-NCL"?: number;
    SC?: number;
    ST?: number;
  }>;
}

export function CategoryChart({ data }: CategoryChartProps) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 17%)" />
          <XAxis 
            dataKey="branch" 
            stroke="hsl(215, 20%, 65%)"
            fontSize={12}
            angle={-45}
            textAnchor="end"
            height={80}
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
            dataKey="OPEN" 
            fill="hsl(186, 100%, 69%)" 
            name="OPEN"
          />
          <Bar 
            dataKey="OBC-NCL" 
            fill="hsl(142, 76%, 36%)" 
            name="OBC-NCL"
          />
          <Bar 
            dataKey="SC" 
            fill="hsl(322, 81%, 43%)" 
            name="SC"
          />
          <Bar 
            dataKey="ST" 
            fill="hsl(251, 91%, 95%)" 
            name="ST"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
