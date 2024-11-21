import React from "react";
import { getLatestSignupsData } from "@nextjs-recharts/app/dashboard/actions";
import { dateMmmDdYy } from "@nextjs-recharts/app/utils";

type TCustomer = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  createdAt: string;
};

export const TableLatestCustomers = async () => {
  const latestSignupsData = await getLatestSignupsData();

  return (
    <div className="mx-auto my-2">
      <h2 className="my-2 text-sm text-gray-400 font-bold uppercase">Latest Onboards</h2>
      <div className="overflow-x-auto shadow rounded">
        <table className="table table-zebra">
          <thead className="bg-gray-200">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone</th>
              <th>Created on</th>
            </tr>
          </thead>
          <tbody>
            {
              latestSignupsData.map((customer: TCustomer) => (
                <tr>
                  <td>{customer?.id}</td>
                  <td>{customer?.email}</td>
                  <td>{customer?.username}</td>
                  <td>{customer?.firstName}</td>
                  <td>{customer?.lastName}</td>
                  <td>{customer?.phone}</td>
                  <td>
                    {
                      dateMmmDdYy(new Date(parseInt(customer?.createdAt)))
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
