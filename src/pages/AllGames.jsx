import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const AllGames = () => {
  const data = useLoaderData();
  const [text, setText] = useState("");

  const term = text.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? data.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : data;

  // console.log(searchedProducts);

  const searchApp = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="w-11/12 mx-auto mt-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">All Games</h1>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={searchApp}
              type="search"
              value={text}
              name="searchBox"
            />
          </label>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {searchedProducts.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
