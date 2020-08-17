import { Link } from "react-router-dom";
import React from "react";
const Emergency = () => {
  return (
    <div className="center">
      <div id="homePage">
        <h2>Emergency</h2>
      </div>
      <div id="back">
        <Link to="/">← Back</Link>
      </div>
    </div>
  );
};

export default Emergency;
