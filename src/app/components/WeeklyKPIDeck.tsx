import { ReactNode } from "react";
import { getWeeklyData } from "@nextjs-recharts/app/dashboard/actions";
import {
  ShoppingBagIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";


const WeeklyKPIDeck = async () => {
  const weeklyData = await getWeeklyData();
  const { revenue, sales, signups } = weeklyData;

  return (
    <div className="stats rounded shadow w-full">
      <div className="stat place-items-center bg-orange-50">
        <div className="stat-figure">
          <UserGroupIcon height={48} width={48} stroke="orange" />
        </div>
        <div className="stat-title">New Signups</div>
        <div className="stat-value text-orange-900">{signups as ReactNode}</div>
      </div>
      <div className="stat place-items-center bg-blue-50">
        <div className="stat-figure">
          <ShoppingBagIcon height={48} width={48} stroke="skyblue" />
        </div>
        <div className="stat-title">Weekly Sales</div>
        <div className="stat-value text-blue-900">{sales as ReactNode}</div>
      </div>
      <div className="stat place-items-center bg-green-100">
        <div className="stat-figure">
          <CurrencyDollarIcon height={48} width={48} stroke="green" />
        </div>
        <div className="stat-title">Weekly Revenue</div>
        <div className="stat-value text-green-900">{revenue as ReactNode}</div>
      </div>
    </div>
  );
};

export default WeeklyKPIDeck;
