"use client";
import React, { useEffect, useState } from "react";

const ShapeAnimation: React.FC = () => {
  const [shape, setShape] = useState("circle");
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const shapes = ["circle", "triangle", "square"];
    let index = 0;

    const interval = setInterval(() => {
      setShape(shapes[index]);
      setAnimate(true);
      index = (index + 1) % shapes.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-transparent">
      {/* Shape Animation */}
      <div className="absolute inset-0 flex justify-center items-center">
        {shape === "circle" && (
          <svg
            width="100"
            height="100"
            className={`${animate ? "animate-shapeTransition" : ""}`}
            onAnimationEnd={() => setAnimate(false)}
          >
            <circle cx="50" cy="50" r="40" fill="#3498db" />
          </svg>
        )}
        {shape === "triangle" && (
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className={`${animate ? "animate-shapeTransition" : ""}`}
            onAnimationEnd={() => setAnimate(false)}
          >
            <polygon points="50,15 90,85 10,85" fill="#e74c3c" />
          </svg>
        )}
        {shape === "square" && (
          <svg
            width="100"
            height="100"
            className={`${animate ? "animate-shapeTransition" : ""}`}
            onAnimationEnd={() => setAnimate(false)}
          >
            <rect x="20" y="20" width="60" height="60" fill="#2ecc71" />
          </svg>
        )}
      </div>

      {/* Horizontal Lines Animation */}
      <div className="absolute top-0 w-full h-full grid grid-rows-6 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden"
          >
            <div className="absolute inset-0 flex space-x-4 animate-slide">
              <div className="w-1/4 h-1 bg-green-500"></div>
              <div className="w-1/4 h-1 bg-white"></div>
              <div className="w-1/4 h-1 bg-green-500"></div>
              <div className="w-1/4 h-1 bg-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeAnimation;
