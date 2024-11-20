import { getUpcomingCallsData } from "@nextjs-recharts/app/dashboard/actions";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { clockTime, dateMmmDdYy } from "../utils";

type TCall = {
  name: string;
  dueAt: string;
};

const UpcomingCalls = async () => {
  const upcomingCallsData = await getUpcomingCallsData();

  return (
    <div className="mx-auto my-4 w-full md:w-2/3 lg:3/4">
      <h2 className="my-2 text-sm text-gray-400 font-bold uppercase">Upcoming Calls</h2>
      <div className="overflow-auto mx-auto px-2 py-1 h-96 bg-blue-50 shadow border border-gray-100 rounded">
        {
          upcomingCallsData?.map((call: TCall, index: number) => (
            <div key={index}  className="m-1 p-2 bg-white border border-gray-200 shadow-0 rounded">
              <h3 className="text-xs font-bold">Call with {call?.name}</h3>
              <span className="text-xs text-gray-600">
                Due {formatDistanceToNow(new Date(parseInt(call?.dueAt)), { addSuffix: true })}
                &nbsp;at {clockTime(new Date(parseInt(call?.dueAt)))}
                &nbsp;on {dateMmmDdYy(new Date(parseInt(call?.dueAt)))}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default UpcomingCalls;