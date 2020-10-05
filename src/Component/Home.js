import React from "react";
import Banner from "./Banner";
import CovidBanner from "./CovidBanner";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <CovidBanner />
      {/* <Header /> */}
      <Banner />
      {/* <h1>Home component</h1> */}
    </div>
  );
}

export default Home;
