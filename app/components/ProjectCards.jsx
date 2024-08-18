import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCards = ({ project }) => {
  return (
    <div className="rounded-md md:rounded-lg h-[300px] w-[400px] flex flex-col items-start justify-between overflow-hidden shadow-md">
      <div
        className="h-52 md:h-72 w-full relative group"
        style={{
          background: `url(${project.iURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-40 transition-all duration-500">
          <Link
            href={project.gURL}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <CodeBracketIcon className="h-10 w-10 p-1 bg-slate-100 bg-opacity-30 rounded-full text-slate-800 cursor-pointer hover:text-secondary hover:bg-opacity-50" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-secondary text-md text-left lg:text-lg font-bold">
          {project.title}
        </h3>
        <h4 className="text-[#808080] text-sm lg:text-md italic">
          {project.skills}
        </h4>
      </div>
    </div>
  );
};

export default ProjectCards;
