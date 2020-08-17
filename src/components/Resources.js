import React from "react";
import { Link } from "react-router-dom";
const Resources = () => {
  return (
    <div className="center">
      <div id="homePage">
        <h2>Resources</h2>
      </div>
      <div id="back">
        <Link to="/">← Back</Link>
      </div>
    </div>
  );
};

export default Resources;
