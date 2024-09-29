import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import "./ArrayBarRangeSlider.css";

// Custom styled Slider using MUI's styled API
const ArrayBarSlider = styled(Slider)({
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

const ArrayBarRangeSlider = ({ numberOfArrayBars = 5, onChangeArrayBarRangeSlider }) => {
  const [arraySize, setArraySize] = useState(numberOfArrayBars);

  // Sync the internal state when the parent prop `numberOfArrayBars` changes
  useEffect(() => {
    setArraySize(numberOfArrayBars);
  }, [numberOfArrayBars]);

  const handleChange = (event, newValue) => {
    setArraySize(newValue); // Update local state as user drags the slider
  };

  const handleCommit = (event, newValue) => {
    onChangeArrayBarRangeSlider(event, newValue); // Call the parent handler when the user finishes interacting
  };

  return (
    <div className="range-slider-container">
      <p id="text-array-size">Array Size</p>
      <ArrayBarSlider
        id="arrayBarSlider"
        min={2}
        max={14}
        step={1}
        value={arraySize} // Controlled value from state
        valueLabelDisplay="auto"
        marks
        onChange={handleChange}
        onChangeCommitted={handleCommit} // Trigger parent event when dragging ends
      />
    </div>
  );
};

export default ArrayBarRangeSlider;
