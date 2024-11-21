/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ResponsivePieChart } from "@nextjs-recharts/app/components/charts";
import {
  getTopCustomerDestinations,
  getUserCountriesData,
} from "@nextjs-recharts/app/dashboard/actions";

const UserLocations = async () => {
  const userCountriesData = await getUserCountriesData();
  const { all, thisWeek } = userCountriesData;

  const topSalesDestinations = await getTopCustomerDestinations();
  const { data } = topSalesDestinations;

  return (
    <div className="mx-auto my-4 w-full md:flex-grow lg:flex-grow-0">
      <h2 className="my-2 text-sm text-gray-400 font-bold uppercase">User Locations</h2>
      <div className="mx-auto flex gap-1 justify-center bg-orange-50 shadow rounded">

        <div className="w-full flex flex-col">
          <ResponsivePieChart data={all?.data} total={all?.total} />
          <h2 className="text-sm md:text-xs p-2 text-gray-400 text-center font-bold">All</h2>
        </div>

        <div className="w-full flex flex-col gap-1 justify-center">
          <ResponsivePieChart data={thisWeek?.data} total={thisWeek?.total} />
          <h2 className="text-sm md:text-xs p-2 text-gray-400 text-center font-bold">This Week</h2>
        </div>
      </div>

      <div className="my-4">
        <h2 className="my-1 text-sm text-gray-400 font-bold uppercase">This Week's Top Customer Bases</h2>
        <div className="stats bg-blue-50 rounded shadow w-full">

          <div className="stat p-1 place-items-center">
            <div className="stat-title font-bold">{data[0]?.country}</div>
            <div className="stat-value">{data[0]?.count}</div>
            <div className="stat-desc text-red-600">{data[0]?.index} %↘︎</div>
          </div>

          <div className="stat p-1 place-items-center">
            <div className="stat-title font-bold">{data[1]?.country}</div>
            <div className="stat-value text-green-900">{data[1]?.count}</div>
            <div className="stat-asc text-sm text-green-600">{data[1]?.index} %↗︎</div>
          </div>

          <div className="stat p-1 place-items-center">
            <div className="stat-title font-bold">{data[2]?.country}</div>
            <div className="stat-value">{data[2]?.count}</div>
            <div className="stat-asc text-sm text-green-600">{data[2]?.index} %↗︎</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserLocations;
