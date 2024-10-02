import React, { useEffect } from "react";
import "./Guide.css";

const Guide = () => {
  useEffect(() => {
    const checkCookie = () => {
      if (getCookie("visited") === null) {
        showPopUp();
        setCookie("visited", true);
      } else {
        skipPopUp();
      }
    };

    document.addEventListener("DOMContentLoaded", checkCookie);

    return () => {
      document.removeEventListener("DOMContentLoaded", checkCookie);
    };
  }, []);

  return (
    <div className="PopUpTextBox">
      <header>
        <p>Welcome to Sorting Visualizer</p>
      </header>

      <div className="PopUpIntroductionText">
        <h3>Quick Walkthrough to Visualizer</h3>
        <div className="player">
          <LabelledColorBox label="Start" color="rgb(233, 30, 30)" />
          <LabelledColorBox label="End" color="rgb(0, 140, 255)" />
          <LabelledColorBox label="Wall" color="#34495e" />
          <LabelledColorBox
            label="Visited Node"
            color="rgba(0, 190, 218, 0.75)"
          />
        </div>
      </div>

      <div className="skipBox">
        <small>
          *You can view this anytime by clicking on{" "}
          <span>[Dijkstra's Algorithm]</span>
        </small>
        <button onClick={skipPopUp}>Done!</button>
      </div>
    </div>
  );
};

const LabelledColorBox = ({ label, color }) => (
  <div>
    <label className="label">{label}:</label>
    <div style={{ backgroundColor: color }} className="color-box"></div>
  </div>
);

const skipPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(".main-container");
  elem.style.display = "none";
  pathfindingVisualizer.style.filter = "none";
};

export const showPopUp = () => {
  const elem = document.querySelector(".PopUp");
  const pathfindingVisualizer = document.querySelector(".main-container");
  elem.style.display = "block";
  pathfindingVisualizer.style.filter = "blur(4px)";
};

const setCookie = (name, value) => {
  document.cookie = `${name}=${encodeURIComponent(value)};`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const [key, val] = cookies[i].trim().split("=");
    if (key === name) {
      return decodeURIComponent(val);
    }
  }
  return null;
};

export default Guide;
