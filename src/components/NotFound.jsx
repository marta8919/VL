import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="header">
        <span className="title">404 Not Found .</span>
      </h1>
      <div className="main">
        <div className="content">
          <h3>
            This page does not exist.<br></br>
            Do you want to go back home?
          </h3>

          <Link to="/" className="link">
            Go to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
