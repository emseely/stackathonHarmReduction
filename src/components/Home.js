import React from "react";
import checkin from "../assets/timer.png";
import search from "../assets/search.png";

import hands from "../assets/handshake.png";
import warn from "../assets/warn.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homePage">
      <Link to="/search">
        <img src={search}></img>
        <p>Drug Search</p>
      </Link>
      <Link to="/checkin">
        <img src={checkin}></img>
        <p>Check-in</p>
      </Link>
      <Link to="/resources">
        <img src={hands}></img>
        <p> Resources</p>
      </Link>
      <Link to="/emergency">
        <img src={warn}></img>
        <p>Emergency</p>
      </Link>
    </div>
  );
};

export default Home;
