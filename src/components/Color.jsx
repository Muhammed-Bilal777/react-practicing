import React, { useState } from "react";

export const Color = () => {
  const [color, setColor] = useState("#000");

  const generateColor = (le) => {
    return Math.floor(Math.random() * le);
  };

  const handleRGB = () => {
    let r = generateColor(256);
    let g = generateColor(256);
    let b = generateColor(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const handleHex = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += arr[generateColor(arr.length)];
    }
    setColor(hex);
    console.log(hex);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          gap: "20px",
          display: "flex",
        }}
      >
        <button onClick={handleRGB}>rgb</button>
        <button onClick={handleHex}>hex</button>
      </div>
      <p
        style={{
          color: "#fff",
        }}
      >
        {color}
      </p>
    </div>
  );
};
