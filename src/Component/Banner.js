import React from "react";
import "./Banner.css";
import Header from "./Header";
// import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <Header />
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
