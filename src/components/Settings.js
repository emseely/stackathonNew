import React from "react";
import { Link } from "react-router-dom";
const Settings = () => {
  return (
    <div className="center">
      <div id="homePage">
        <h2>Settings</h2>
      </div>
      <div id="back">
        <Link to="/">← Back</Link>
      </div>
    </div>
  );
};

export default Settings;
