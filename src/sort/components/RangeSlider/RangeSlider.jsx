import React, { useState, useEffect } from "react";
import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider";
import "./RangeSlider.css";

const RangeSlider = ({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) => {
  const [arrayBars, setArrayBars] = useState(numberOfArrayBars);
  const [speed, setSpeed] = useState(animationSpeed);

  // Sync internal state with props if they change
  useEffect(() => {
    setArrayBars(numberOfArrayBars);
  }, [numberOfArrayBars]);

  useEffect(() => {
    setSpeed(animationSpeed);
  }, [animationSpeed]);

  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={arrayBars}
          onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={speed}
          onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
