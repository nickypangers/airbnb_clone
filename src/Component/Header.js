import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        src="https://cdn.freebiesupply.com/logos/large/2x/airbnb-logo-png-transparent.png"
        alt=""
        className="header__icon"
      />
      <div className="header__center">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header__right">
        <p className="header__becomeAHost">Become a host</p>
        <div className="header__language">
          <LanguageIcon fontSize="small" />
          <ExpandMoreIcon fontSize="small" />
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
