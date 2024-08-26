"use client";
import React, { useState } from "react";

const AnimatedCardGrid: React.FC = () => {
  const items = [
    "Write a message that goes with a kitten gif for a friend on a rough day",
    "Test my knowledge on ancient civilizations",
    "Write a text asking a friend to be my plus-one at a wedding",
    "Improve my essay by providing feedback on my thoughts",
    "Create a morning routine to boost my productivity",
    "Plan a 'mental health day' to help me relax",
    "Give me ideas about how to plan my New Year's resolutions",
    "Help me pick an outfit for my new camera",
    "Explain nostalgia to a kindergartener",
    "Plan a trip to experience Seoul like a local",
    "Create a content calendar for a TikTok account",
    "Suggest fun activities to help me make friends in a new city",
  ];

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Function to generate the animation styles based on direction and hovered state
  const rowAnimation = (direction: "left" | "right", rowIndex: number): React.CSSProperties => {
    const animationName = `move-${direction}-${rowIndex}`;
    return {
      animation: `${animationName} 20s linear infinite`,
      animationPlayState: hoveredRow === rowIndex ? "paused" : "running",
    };
  };

  return (
    <div className="space-y-4 p-4 overflow-hidden relative w-max-screen">
      {(["right", "left", "right"] as const).map((direction, rowIndex) => (
        <div
          key={rowIndex}
          className="overflow-hidden relative h-[100px] bg-gray-800"
          onMouseEnter={() => setHoveredRow(rowIndex)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <div
            className="flex space-x-4 absolute top-0 left-0"
            style={rowAnimation(direction, rowIndex)}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-200 w-64"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCardGrid;