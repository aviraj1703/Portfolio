import React from "react";

const ButtonTab = ({ active, selectTab, tab }) => {
  const buttonClasses = active ? "text-white bg-gradient-to-br from-primary-500 via-primary-300 to-primary-600" : "text-primary-400";
  return (
    <button
      onClick={selectTab}
      className={`border-2 border-primary-400 rounded-md py-1 md:py-2 px-4 ${buttonClasses}`}
    >
      {tab}
    </button>
  );
};

export default ButtonTab;
