import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  //Props Validation
  DesktopMenu.propTypes = {
    menu: PropTypes.string.isRequired,
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}>
      <NavLink
        to={menu.link}
        className="flex-center cursor-pointer gap-1 rounded-xl px-3 py-1 hover:bg-white/5">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] duration-200 group-hover/link:rotate-180" />
        )}
      </NavLink>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}>
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}>
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="mb-4 text-sm text-gray-500">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <div className="flex-center group/menubox gap-x-4">
                    <div className="w-fit rounded-md bg-white/5 p-2 duration-300 group-hover/menubox:bg-white group-hover/menubox:text-gray-900">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <NavLink to={menu.link} className="font-semibold">
                        {submenu.name}
                      </NavLink>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
