import Charts from "@nextjs-recharts/app/components/Charts";
import { TableLatestCustomers } from "@nextjs-recharts/app/components/tables";
import UpcomingCalls from "@nextjs-recharts/app/components/UpcomingCalls";
import UserLocations from "@nextjs-recharts/app/components/UserLocations";
import WeeklyKPIDeck from "@nextjs-recharts/app/components/WeeklyKPIDeck";
import { getDailyData } from "@nextjs-recharts/app/dashboard/actions";

export default async function Home() {
  const dailyData = await getDailyData();

  return (
    <div className="container mx-auto p-4">
      <WeeklyKPIDeck />
      <div className="flex flex-col lg:flex-row md:gap-6">
        <div className="flex flex-col md:flex-row md:gap-6 lg:w-2/3">
          <UserLocations />
          <UpcomingCalls />
        </div>
        <Charts data={dailyData} />
      </div>
      <TableLatestCustomers />
    </div>
  );
};
