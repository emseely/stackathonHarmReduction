import React from "react";
import { Link } from "react-router-dom";
import ring from "../assets/ring.png";
import settings from "../assets/settings.png";
import about from "../assets/question.png";

const Navbar = () => {
  return (
    <nav>
      <div id="upperLeft">
        <Link to="/">
          <img src={ring}></img>
          <h1>Home</h1>
        </Link>
      </div>

      <div id="upperRight">
        <Link to="/about">
          <img src={about}></img>
          <h1>About</h1>
        </Link>
        <Link to="/settings">
          <img src={settings}></img>
          <h1>Settings</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
