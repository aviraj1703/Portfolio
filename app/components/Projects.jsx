"use client";

import React, { useState, useTransition, useRef } from "react";
import { projectsData } from "@/public/Projects/Projects";
import ProjectCards from "./ProjectCards";
import ProjectTabs from "./ProjectTabs";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [category, setCategory] = useState("All");
  const [isPending, startTransition] = useTransition();
  const categories = ["All", "Web", "Mobile"];
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setCategory(id);
    });
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="text-secondary">
      <div className="flex flex-col items-center mt-10 pt-4 px-4 gap-8 md:gap-10 xl:pt-10 xl:px-8 sm:pt-10">
        <h2 className="text-secondary text-3xl text-center lg:text-5xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-300">
            My Projects
          </span>
        </h2>
        <div className="w-full flex items-center justify-center gap-8 md:mt-0">
          {categories.map((categoryVal, index) => (
            <ProjectTabs
              key={index}
              active={category === categoryVal}
              selectTab={() => handleTabChange(categoryVal)}
              category={categoryVal}
            />
          ))}
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => {
            if (category === "All" || project.category === category) {
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCards key={index} project={project} />
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
