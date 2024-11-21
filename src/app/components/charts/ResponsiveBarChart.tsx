"use client"

import { useMemoizedChartData } from "@nextjs-recharts/app/utils";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type TLeads = {
  date: string;
  count: number;
};

export const ResponsiveBarChart = () => {
  const [leadsData, setLeadsData] = useState([]);
  const memoizedLeadsData = useMemoizedChartData(leadsData);

  useEffect(() => {
    fetch("http://localhost:3210/dailyData")
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          setLeadsData(data?.leads?.data);
        }
      }
    );
  }, []);

  return (
    <ResponsiveContainer height={335}>
      <BarChart width={200} height={200} data={memoizedLeadsData as TLeads[]} >
        <CartesianGrid strokeDasharray="4,2" />
        <XAxis
          height={49}
          dataKey="date"
          minTickGap={2}
          style={{ fontSize: "12px" }}
          label={{ value: "Date", position: "insideBottom", fontSize: "14px" }}
        />
        <YAxis
          width={49}
          dataKey="count"
          style={{ fontSize: "12px" }}
          label={{ value: "Leads count", position: "insideLeft", fontSize: "14px", angle: "-90" }}
        />
        <Bar
          dataKey="count"
          fill="#7c2d12"
          opacity={0.6}
          label={{ position: "top", fill: "orange", fontSize: "12px", fontStyle: "bold" }}
          barSize={30}
          maxBarSize={39}
        />
        <Legend verticalAlign="top" color="#7c2d12"/>
      </BarChart>
    </ResponsiveContainer>
  );
};
