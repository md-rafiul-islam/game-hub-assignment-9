import React from "react";

const TopRatedApps = ({ data }) => {
  const topApps = [...data]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 4);

  return (
    <div className="bg-[#0d0f17] text-white py-10 px-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">TOP RATED APPS</h2>
        <button className="flex items-center gap-2 text-gray-300 hover:text-white">
          See All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <div
            key={app.id}
            className="bg-[#151821] rounded-2xl p-5 shadow-lg hover:shadow-xl
                       transition-all duration-300 border border-transparent hover:border-[#333]"
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
              <img
                src={app.coverPhoto}
                alt=""
                className="h-40 object-contain"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Highest Rating</p>
                <p className="text-lg font-bold text-purple-400 flex items-center gap-1">
                  ⭐ {app.ratings}
                </p>
              </div>

              <a
                href={app.downloadLink}
                target="_blank"
                className="bg-[#d5ff3f] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#c7f536] transition"
              >
                See Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedApps;
