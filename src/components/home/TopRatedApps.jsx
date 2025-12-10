import React from "react";
import { Link } from "react-router";
import AppCard from "../AppCard";

const TopRatedApps = ({ data }) => {
  const topApps = [...data]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 4);

  return (
    <div className="bg-[#0d0f17] text-white py-10 px-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">TOP RATED APPS</h2>
        <Link
          to="/all-games"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          See All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <AppCard app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedApps;
