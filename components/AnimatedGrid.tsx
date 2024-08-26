"use client";
import React from "react";
import { motion } from "framer-motion";

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
    "Write a short story about a time-traveling detective",
    "Develop a workout routine for beginners",
    "Create a meal plan for a vegetarian diet",
    "Explain the concept of blockchain in simple terms",
    "Design a logo for a fictional eco-friendly company",
    "Write a poem about the changing seasons",
    "Suggest team-building activities for a remote work environment",
    "Create a bucket list for adventure seekers",
    "Explain the importance of bees to our ecosystem",
    "Write a script for a 60-second commercial about a new smartphone",
    "Suggest ways to reduce plastic waste in daily life",
    "Create a bedtime story featuring talking animals",
    "Design a mini-golf course with unique obstacles",
    "Write a letter to your future self in 10 years",
    "Explain the process of photosynthesis to a 10-year-old",
    "Create a workout playlist for high-intensity interval training",
    "Design a treehouse with eco-friendly features",
    "Write a haiku about the night sky",
    "Suggest ideas for a themed birthday party",
    "Create a list of conversation starters for networking events",
    "Explain the concept of supply and demand using a lemonade stand example",
    "Write a short biography of a fictional superhero",
    "Design a board game about space exploration",
    "Create a weekly cleaning schedule for a busy professional",
    "Write a persuasive speech about the importance of voting",
    "Suggest ways to improve public transportation in a small city",
    "Create a list of mindfulness exercises for stress relief",
    "Design a sustainable tiny house",
    "Write a recipe for a fusion dish combining two different cuisines",
    "Explain the water cycle using an analogy",
    "Create a list of icebreaker games for a large group",
    "Write a short mystery story set in a small town",
    "Design a futuristic mode of transportation",
    "Suggest ways to make a workplace more inclusive and diverse",
    "Create a 30-day challenge to learn a new skill",
    "Write a guide on how to start a community garden",
    "Explain the concept of artificial intelligence to a senior citizen",
    "Design a zero-waste grocery store layout",
  ];

  const motionVariants = {
    right: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 70,
          ease: "linear",
        },
      },
    },
    left: {
      x: ["-50%", 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-screen overflow-hidden mt-20">
      <div className="md:space-y-4 space-y-0 relative">
        {(["right", "left", "right"] as const).map((direction, rowIndex) => (
          <div
            key={rowIndex}
            className="relative md:h-24 h-16 bg-transparent overflow-hidden"
          >
            <motion.div
              className="flex space-x-4 absolute"
              style={{ width: `${items.length * 272}px` }}
              animate={direction}
              variants={motionVariants}
              initial={direction === "left" ? { x: "-50%" } : { x: 0 }}
            >
              <div className="flex space-x-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-700/50 text-white md:text-sm text-xs p-2 md:p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-200 w-64 flex items-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                {items.map((item, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="bg-neutral-700/50 text-white md:text-sm text-xs p-2 md:p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-200 w-64 flex items-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCardGrid;