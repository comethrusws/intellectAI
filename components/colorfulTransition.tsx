"use client";
import React from "react";
import { motion } from "framer-motion";

const rowStyles = "w-full h-2 mb-2";
const lineStyles = "h-2 absolute";

const ColorfulTransition: React.FC = () => {
  const rows = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="relative w-full h-12 overflow-hidden">
      {rows.map((rowIndex) => (
        <div key={rowIndex} className="relative w-full h-2 mb-2">
          {Array.from({ length: 10 }, (_, index) => (
            <motion.div
              key={index}
              className={`${lineStyles} ${index % 2 === 0 ? "bg-white" : "bg-green-500"} absolute`}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, ease: "linear" }}
              style={{ left: `${(index * 10)}%` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorfulTransition;
