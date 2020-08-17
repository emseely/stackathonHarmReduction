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
        <div className="homeIcon">
          <img src={search}></img>
          Drug Search
        </div>
      </Link>
      <Link to="/checkin">
        <div className="homeIcon">
          <img src={checkin}></img>
          Check-in
        </div>
      </Link>
      <Link to="/resources">
        <div className="homeIcon">
          <img src={hands}></img>
          Resources
        </div>
      </Link>
      <Link to="/emergency">
        <div className="homeIcon">
          <img src={warn}></img>
          Emergency
        </div>
      </Link>
    </div>
  );
};

export default Home;
