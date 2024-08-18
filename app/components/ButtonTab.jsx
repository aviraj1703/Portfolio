import React from "react";
import { motion } from "framer-motion";
import { transparent } from "tailwindcss/colors";

const variants = {
  default: { background: transparent },
  active: {
    background: `linear-gradient(to bottom right, #F97316, #FDBA74, #EA580C)`,
  },
};

const ButtonTab = ({ active, selectTab, tab }) => {
  const buttonClasses = active ? "text-white" : "text-primary-400 border-orange-400";
  return (
    <motion.button
      animate={active ? "active" : "default"}
      variants={variants}
      transition={{ duration: 5 }}
      onClick={selectTab}
      className={`border-2 rounded-md py-1 md:py-2 px-4 ${buttonClasses}`}
    >
      {tab}
    </motion.button>
  );
};

export default ButtonTab;
