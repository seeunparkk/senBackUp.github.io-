import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/a">Basic Study</Link>
      <Link to="/b">Training</Link>
      <Link to="/adsf">Review</Link>
    </div>
  );
}

export default Navbar;
