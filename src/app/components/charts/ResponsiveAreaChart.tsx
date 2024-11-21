"use client"

import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { TDailyData } from "./ResponsiveLineChart";

type TResponsiveAreaChartProps = {
  data: TDailyData[];
};

export const ResponsiveAreaChart = ({ data }: TResponsiveAreaChartProps) => {
  const tooltipStyle = { padding: "2px", fontSize: "10px" }

  return (
    <ResponsiveContainer
      className="w-full"
      height={335}
    >
      <AreaChart
        data={data}
        className="w-full"
        height={200}
      >
        <CartesianGrid strokeDasharray="4,2"/>
        <XAxis
          height={49}
          dataKey="date"
          style={{ fontSize: "12px" }}
          label={{ value: "Date", position: "insideBottom", fontSize: "14px" }}
        />
        <YAxis
          width={49}
          dataKey="count"
          style={{ fontSize: "12px" }}
          label={{ value: "Customers count", position: "insideLeft", fontSize: "14px", angle: "-90" }}
        />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#134e4a"
          fill="#a7f3d0"
          strokeWidth={2}
          opacity={0.6}
        />
        <Tooltip itemStyle={tooltipStyle} contentStyle={tooltipStyle}/>
        <Legend verticalAlign="top" color="#134e4a"/>
      </AreaChart>
    </ResponsiveContainer>
  );
};
