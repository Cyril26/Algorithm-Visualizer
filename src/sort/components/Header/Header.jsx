import React from "react";
import { showPopUp } from "../Guide/Guide";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div
      data-testid="header"
      className="header"
      id="animateText"
      onClick={showPopUp}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
    >
      <Link
        to="/"
        className="btn-con"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px",
        }}
      >
        Home
      </Link>
      Sorting Visualizer
    </div>
  );
};

export default Header;
