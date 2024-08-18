import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";

const MenuOverlay = ({ navOpen, links }) => {
  const [selected, setSelected] = useState(0);

  return (
    <ul className={`text-right mt-2 ${navOpen ? "block" : "hidden"}`}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          title={link.title}
          isSelected={selected === index}
          onClick={() => setSelected(index)}
        />
      ))}
    </ul>
  );
};

export default MenuOverlay;
