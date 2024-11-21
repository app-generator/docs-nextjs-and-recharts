/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react";
import {
  ResponsiveBarChart,
  ResponsiveLineChart,
  ResponsiveAreaChart,
} from "@nextjs-recharts/app/components/charts";
import { Tabs } from "@nextjs-recharts/app/components/tabs";
import { useMemoizedChartData } from "../utils";

const Charts = ({ data }: any) => {
  const prospectsChartData = useMemoizedChartData(data?.prospects?.data);
  const customersChartData = useMemoizedChartData(data?.customers?.data);

  const tabs = [
    {
      id: 1,
      name: "Daily Leads",
      content: (<ResponsiveBarChart />),
    },
    {
      id: 2,
      name: "Daily Prospects",
      content: (<ResponsiveLineChart data={prospectsChartData} />),
    },
    {
      id: 3,
      name: "Daily Customers",
      content: (<ResponsiveAreaChart data={customersChartData} />),
    }
  ]

  return (
    <div className="mx-auto my-4 w-full lg:w-5/12" >
      <h2 className="my-2 text-sm text-gray-400 font-bold uppercase">This Week</h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Charts;
