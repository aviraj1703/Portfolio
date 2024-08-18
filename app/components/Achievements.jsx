"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Achievements = () => {
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      metric: "DSA Questions",
      value: "300",
      postfix: "+",
    },
    {
      metric: "Years",
      value: "1",
    },
  ];

  return (
    <section id="achievements" className="mt-20">
      <div className="border-2 border-b-transparent bg-slate-100 hover:bg-slate-200 rounded-md py-8 px-8 flex flex-row items-center justify-around shadow-md">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 mx-4"
          >
            <h2 className="text-secondary text-4xl font-bold flex items-center justify-center">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 200,
                    tensions: 140 * (index + 1),
                  };
                }}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#808080] text-xl">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
