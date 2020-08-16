import React from "react";
import { Link } from "react-router-dom";
import lighthouse from "../assets/lighthousesmall.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={lighthouse}></img>
      </Link>

      <div id="upperRight">
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
