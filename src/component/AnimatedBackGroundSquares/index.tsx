import React from "react";
import "./AnimatedBackGroundSquares.css";
export const AnimatedBackGroundSquares = () => {
  return (
    <>
      <div className="area" style={{ position: "fixed", zIndex: "-2" }}>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
