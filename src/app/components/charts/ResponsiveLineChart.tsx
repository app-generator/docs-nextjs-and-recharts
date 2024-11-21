"use client"

import React from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  ReferenceLine
} from "recharts";

export type TDailyData = {
  date: string;
  count: string;
};

type TResponsiveLineChartProps = {
  data: TDailyData[];
};

export const ResponsiveLineChart = ({ data }: TResponsiveLineChartProps) => {
  const tooltipStyle = { padding: "2px", fontSize: "10px" }

  return (
    <ResponsiveContainer
      className="w-full"
      height={335}
    >
      <LineChart
        className="w-full"
        height={200}
        data={data}
      >
        <CartesianGrid strokeDasharray="4,2"/>
        <XAxis
          height={49}
          dataKey="date"
          style={{ fontSize: "12px" }}
          label={{value: "Date", position: "insideBottom", fontSize: "14px"}}
        />
        <YAxis
          width={49}
          dataKey="count"
          style={{ fontSize: "12px" }}
          label={{ value: "Prospects count", position: "insideLeft", fontSize: "14px", angle: "-90" }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#164e63"
          strokeWidth={2}
          opacity={0.6}
        />
        <ReferenceLine
          y="15"
          stroke="orange" strokeWidth={2} strokeDasharray="4,3"
        >
          <Label className="text-sm" position="insideBottomRight">
            Daily target
          </Label>
        </ReferenceLine>
        <Tooltip itemStyle={tooltipStyle} contentStyle={tooltipStyle}/>
        <Legend verticalAlign="top" color="#164e63"/>
      </LineChart>
    </ResponsiveContainer>
  );
};
