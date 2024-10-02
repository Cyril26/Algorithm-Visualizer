import React from "react";
import "./Node.css";

const Node = ({
  row,
  col,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  isWeight,
}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
      ? "node-start"
      : isWall
        ? "node-wall"
        : isWeight
          ? "node-weight"
          : "";

  return (
    <td
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></td>
  );
};

export default Node;
