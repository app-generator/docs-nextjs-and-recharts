/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import { useMemo } from "react";

export const random255Max = () => Math.floor(Math.random() * 255);

export const clockTime = (date: Date) => format(date, "HH:mm");

export const dateMmmDdYy = (date: Date) => format(date, "MMM dd, yy");

export const dateMmmDd = (date: Date) => format(date, "MMM dd");

export const useMemoizedChartData = (d: any) => {
  return useMemo(() => {
    return d?.map((item: any) => ({
      date: dateMmmDd(new Date(parseInt(item.date))),
      count: item?.count,
    }));
  }, [d]);
};
