import React from "react";
import Banner from "../components/home/Banner";
import { useLoaderData } from "react-router";
import TopRatedApps from "../components/home/TopRatedApps";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto ">
      <Banner data={data}></Banner>
      <TopRatedApps data={data}></TopRatedApps>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
