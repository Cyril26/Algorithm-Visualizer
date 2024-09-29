import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";

import "./AnimationSpeedRangeSlider.css";

// Custom styled Slider using MUI's styled API
const AnimationSpeedSlider = styled(Slider)({
  color: "rgba(100, 180, 255, 1)",
  inlineSize: "60%",
  padding: 10,
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  "& .MuiSlider-track": {
    height: 4,
    borderRadius: 4,
  },
  "& .MuiSlider-rail": {
    height: 4,
    borderRadius: 4,
  },
});

const AnimationSpeedRangeSlider = ({ animationSpeed = 10, onChangeAnimationSpeedRangeSlider }) => {
  const [speed, setSpeed] = useState(animationSpeed);

  useEffect(() => {
    setSpeed(animationSpeed);
  }, [animationSpeed]);

  const handleChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleChangeCommitted = (event, newValue) => {
    onChangeAnimationSpeedRangeSlider(newValue);
  };

  return (
    <div className="range-slider-container">
      <p id="text-animation-speed">Animation Delay (ms)</p>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={200}
        value={speed}
        valueLabelDisplay="auto"
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
      />
    </div>
  );
};

export default AnimationSpeedRangeSlider;
