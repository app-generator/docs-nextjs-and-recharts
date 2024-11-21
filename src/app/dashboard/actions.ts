"use server"

export const getWeeklyData = async () => {
  const response = await fetch("http://localhost:3210/weeklyData");
  if (response.status === 200) return response.json();
};

export const getUserCountriesData = async () => {
  const response = await fetch("http://localhost:3210/userCountries");
  if (response.status === 200) return response.json();
};

export const getTopCustomerDestinations = async () => {
  const response = await fetch("http://localhost:3210/topCustomerDestinations");
  if (response.status === 200) return response.json();
};

export const getDailyData = async () => {
  const response = await fetch("http://localhost:3210/dailyData");
  if (response.status === 200) return response.json();
};

export const getUpcomingCallsData = async () => {
  const response = await fetch("http://localhost:3210/upcomingCalls");
  if (response.status === 200) return response.json();
};

export const getLatestSignupsData = async () => {
  const response = await fetch("http://localhost:3210/latestSignups");
  if (response.status === 200) return response.json();
};
