"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Updated data for the Area Chart with more models
const data = [
  { aspect: "Creativity", GEM1o: 9, GPT4: 8, BERT: 7, T5: 6, XLNet: 7, RoBERTa: 6, ALBERT: 6 },
  { aspect: "Context", GEM1o: 8, GPT4: 9, BERT: 7, T5: 7, XLNet: 7, RoBERTa: 8, ALBERT: 7 },
  { aspect: "Generation", GEM1o: 8, GPT4: 9, BERT: 6, T5: 7, XLNet: 6, RoBERTa: 6, ALBERT: 6 },
  { aspect: "Resource", GEM1o: 8, GPT4: 10, BERT: 6, T5: 5, XLNet: 6, RoBERTa: 5, ALBERT: 5 },
  { aspect: "Accuracy", GEM1o: 9, GPT4: 9, BERT: 7, T5: 6, XLNet: 7, RoBERTa: 7, ALBERT: 6 },
  { aspect: "Speed", GEM1o: 8, GPT4: 8, BERT: 7, T5: 6, XLNet: 6, RoBERTa: 6, ALBERT: 6 },
];

// Constants for styling with green and blue shades
const COLOR_GEM1o = "rgba(0, 126, 0, 0.9)"; // Dark green
const COLOR_GPT4 = "rgba(0, 0, 255, 0.1)"; // Blue
const COLOR_BERT = "rgba(0, 191, 255, 0.6)"; // Deep sky blue
const COLOR_T5 = "rgba(70, 130, 180, 0.6)"; // Steel blue
const COLOR_XLNet = "rgba(100, 149, 237, 0.6)"; // Cornflower blue
const COLOR_RoBERTa = "rgba(135, 206, 250, 0.6)"; // Light sky blue
const COLOR_ALBERT = "rgba(173, 216, 230, 0.6)"; // Light blue

const ComparisonChart: React.FC = () => {
  return (
    <div className="w-full min-h-screen px-4 flex flex-col md:flex-row bg-transparent">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 dark:text-white text-black">
        <h2 className="text-2xl md:text-4xl font-normal mb-4 sm:text-center md:text-left">Model Comparison</h2>
        <p className="text-sm md:text-lg mb-4">
          GEM-1o stands out as a leading model in terms of creativity, resource management, and accuracy,
          outperforming other models like BERT, T5, XLNet, RoBERTa, and ALBERT in most aspects. While GPT-4
          remains a strong competitor, GEM-1o excels in specific areas that are critical for advanced AI
          applications. This chart provides a visual comparison of how GEM-1o fares against these prominent
          models in various performance metrics.
        </p>
      </div>
      {/* Chart Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid 
              stroke="currentColor" 
              strokeOpacity={0.9} 
              className="dark:stroke-white stroke-black"
            />
            <XAxis dataKey="aspect" stroke="#ffffff" className="text-black md:text-sm text-[6px]" />
            <YAxis stroke="#ffffff" tick={false} /> {/* Remove labels */}
            <Tooltip 
              wrapperClassName="dark:bg-white bg-black" 
              labelStyle={{ color: 'black' }}  // Aspect name color
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="GEM1o"
              stroke="rgba(0, 128, 0, 1)"
              fill={COLOR_GEM1o}
              name="GEM-1o"
            />
            <Area
              type="monotone"
              dataKey="GPT4"
              stroke="rgba(0, 0, 255, 1)"
              fill={COLOR_GPT4}
              name="GPT-4"
            />
            <Area
              type="monotone"
              dataKey="BERT"
              stroke="rgba(0, 191, 255, 1)"
              fill={COLOR_BERT}
              name="BERT"
            />
            <Area
              type="monotone"
              dataKey="T5"
              stroke="rgba(70, 130, 180, 1)"
              fill={COLOR_T5}
              name="T5"
            />
            <Area
              type="monotone"
              dataKey="XLNet"
              stroke="rgba(100, 149, 237, 1)"
              fill={COLOR_XLNet}
              name="XLNet"
            />
            <Area
              type="monotone"
              dataKey="RoBERTa"
              stroke="rgba(135, 206, 250, 1)"
              fill={COLOR_RoBERTa}
              name="RoBERTa"
            />
            <Area
              type="monotone"
              dataKey="ALBERT"
              stroke="rgba(173, 216, 230, 1)"
              fill={COLOR_ALBERT}
              name="ALBERT"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonChart;
