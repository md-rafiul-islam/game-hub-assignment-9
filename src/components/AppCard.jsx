import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <div
      className="bg-[#151821] rounded-2xl p-5 shadow-lg hover:shadow-xl
                       transition-all duration-300 border border-transparent hover:border-[#333] hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold uppercase">{app.title}</h3>
        <img
          src={app.coverPhoto}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <div className="bg-[#1e2330] rounded-xl flex items-center justify-center h-48 mb-5">
        <img src={app.coverPhoto} alt="" className="h-40 object-contain" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Highest Rating</p>
          <p className="text-lg font-bold text-purple-400 flex items-center gap-1">
            ⭐ {app.ratings}
          </p>
        </div>

        <Link
          to={`/game-details/${app.id}`}
          className="bg-[#d5ff3f] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#c7f536] transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
