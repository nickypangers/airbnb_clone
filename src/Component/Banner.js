import React from "react";
import "./Banner.css";
import Header from "./Header";
import SearchRow from "./SearchRow";

function Banner() {
  return (
    <div className="banner">
      <Header />
      <SearchRow />
      <div className="banner__info">
        <h1>Go Near</h1>
        <p>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </p>
        <button>Explore nearby</button>
      </div>
    </div>
  );
}

export default Banner;
