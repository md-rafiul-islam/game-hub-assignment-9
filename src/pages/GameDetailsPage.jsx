import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router";

const GameDetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [install, setInstall] = useState(false);

  const btnInstall = () => {
    setInstall(!install);
  };

  const game = data.find((item) => item.id === id);

  if (!game) {
    return (
      <div className="text-center py-20 text-red-400 text-2xl font-semibold">
        Game Not Found
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <img className="h-96 rounded-2xl" src={game.coverPhoto} alt="" />

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-white">{game.title}</h1>
        <p className="text-gray-300 mt-1 text-sm">
          Category: <span className="text-white">{game.category}</span>
        </p>
      </div>

      {/* Ratings + Developer */}
      <div className="mt-4 flex items-center gap-6 text-gray-300">
        <p>
          ⭐ Ratings:{" "}
          <span className="text-white font-semibold">{game.ratings}</span>
        </p>
        <p>
          👨‍💻 Developer:{" "}
          <span className="text-white font-semibold">{game.developer}</span>
        </p>
      </div>

      <p className="mt-6 text-gray-300 leading-relaxed">{game.description}</p>

      <button className="btn bg-amber-900 rounded " onClick={btnInstall}>
        {" "}
        {install ? "UnInstall" : "Install"}
      </button>
    </div>
  );
};

export default GameDetailsPage;
