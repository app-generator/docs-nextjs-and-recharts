"use client"

import React from "react";
import { random255Max } from "@nextjs-recharts/app/utils";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";

type TUserCountries = {
  country: string;
  count: number;
};

type TResponsivePieChartProps = {
  data: any;
  total: number;
  width: number;
  height: number;
};


export const ResponsivePieChart = ({ data, total, width, height }: TResponsivePieChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height} className="p-1">
      <PieChart width={width - 70} height={height - 70}>
        <Pie
          data={data}
          dataKey={"count"}
          nameKey={"country"}
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
          label={{ fontSize: "10px", fontStyle: "bold" }}
        >
          {data?.map((entry: TUserCountries, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={`rgb(${random255Max()}, ${random255Max()}, ${random255Max()})`}
            />
          ))}
        </Pie>
        <Pie
          data={[{ total }]}
          dataKey={"total"}
          cx="50%"
          cy="50%"
          innerRadius={74}
          outerRadius={79}
          fill="orange"
        />
        <Tooltip
          itemStyle={{ padding: "2px 4px", fontStyle: "bold" }}
          wrapperStyle={{ padding: "2px 4px" }}
          contentStyle={{ padding: "2px 4px", fontSize: "12px" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
