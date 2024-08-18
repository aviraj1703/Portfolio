import React from "react";

const ProjectTabs = ({ active, selectTab, category }) => {
  const buttonClasses = active
    ? "border-primary-400 text-primary-400"
    : "border-[#808080] text-[#808080]";
  return (
    <button
      onClick={selectTab}
      className={`border-2 rounded-md py-1 md:py-2 px-4 ${buttonClasses}`}
    >
      {category}
    </button>
  );
};

export default ProjectTabs;
