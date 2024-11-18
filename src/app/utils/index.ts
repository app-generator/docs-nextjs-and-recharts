import { format } from "date-fns";

export const random255Max = () => Math.floor(Math.random() * 255);

export const clockTime = (date: Date) => format(date, "HH:mm");

export const dateMmmDdYy = (date: Date) => format(date, "MMM dd, yy");

export const dateMmmDd = (date: Date) => format(date, "MMM dd");
