"use client"

import React, { useState } from "react";
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
  data: TUserCountries[];
  total: number;
};


export const ResponsivePieChart = ({ data, total }: TResponsivePieChartProps) => {
  const [rad, setRad] = useState({
    outerRad1: 70,
    innerRad: 74,
    outerRad2: 79,
  });

  return (
    <ResponsiveContainer
      className="w-full"
      aspect={1}
      onResize={(width) => {
        setRad({
          outerRad1: 3 * width / 10,
          innerRad: 3 * width / 10 + 4,
          outerRad2: 3 * width / 10 + 8,
        });
      }}
    >
      <PieChart
        className="w-full"
      >
        <Pie
          data={data}
          dataKey={"count"}
          nameKey={"country"}
          cx="50%"
          cy="50%"
          outerRadius={rad?.outerRad1}
          fill="#8884d8"
          label={{ fontSize: "12px", fontStyle: "bold" }}
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
          innerRadius={rad?.innerRad}
          outerRadius={rad?.outerRad2}
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
