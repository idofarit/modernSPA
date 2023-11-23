import React from "react";
import "./style.scss";
import HeroBanner from "../home/heroBanner/HeroBanner";
import Trending from "../home/trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
