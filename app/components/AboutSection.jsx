"use client";

import React from "react";
import Image from "next/image";
import ButtonTab from "./ButtonTab";
import { useState, useTransition } from "react";
import { aboutData } from "../../public/About/AboutData.js";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const tabs = ["Skills", "Experience", "Education"];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-secondary">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-20 py-8 px-4 xl:gap-16 xl:py-16 xl:px-8 sm:py-16">
        <div>
          <Image
            src="/About/About.png"
            alt="About me"
            width={500}
            height={500}
            className="rounded-lg shadow-lg hidden md:block"
          />
        </div>
        <div className="h-full flex flex-col items-center md:items-start gap-1">
          <h2 className="text-secondary text-3xl text-center sm:text-left lg:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-300">
              About Me
            </span>
          </h2>
          <p className="text-[#808080] text-base sm:text-lg lg:text-xl mb-6">
            Passionate Software Engineer skilled in MERN stack development, with
            experience in crafting intuitive, user-focused web applications.
            Driven by creativity and a commitment to excellence, I thrive on
            building innovative solutions that make a meaningful impact.
          </p>
          <div className="w-full flex items-center justify-between">
            {tabs.map((tabVal, index) => (
              <ButtonTab
                key={index}
                active={tab === tabVal}
                selectTab={() => handleTabChange(tabVal)}
                tab={tabVal}
              />
            ))}
          </div>
          <ul className="mt-1 w-full text-sm md:text-md overflow-y-auto">
            {aboutData[tab].map((list, index) => (
              <li
                className="border-2 p-1 my-2 rounded-md text-[#808080] hover:text-primary-400 hover:border-primary-400"
                key={index}
              >
                {list.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
