import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Menus } from "./utils.js";

export default function MobMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const buttonRef = useRef(null);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    if (!isOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setClicked(null);
  };

  const handleClickOutside = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => handleClickOutside(event);

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.classList.add("blur-background", "bg-gray-800");
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("blur-background", "bg-gray-800");
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("blur-background", "bg-gray-800");
    };
  }, [isOpen]);

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div className="w-full">
      <button
        ref={buttonRef}
        className="relative z-50 lg:hidden"
        onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        ref={drawerRef}
        className="fixed left-[] right-0 top-16 z-50 h-full w-[400px] overflow-y-auto bg-gray-900 p-6 pb-20 text-white backdrop-blur-sm"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}>
        <ul className="">
          {Menus.map(({ name, subMenu, link }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <NavLink
                  to={link}
                  className="relative flex items-center justify-between rounded-md p-4 hover:bg-white/5"
                  onClick={() => {
                    setClicked(isClicked ? null : i);
                    if (!hasSubMenu) closeMenu();
                  }}>
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform duration-200 ${isClicked && "rotate-180"}`}
                    />
                  )}
                </NavLink>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5">
                    {subMenu.map(({ name, icon: Icon }) => (
                      <NavLink
                        to={link}
                        key={name}
                        className="flex items-center gap-x-2 rounded-md p-2 hover:bg-white/5"
                        onClick={closeMenu}>
                        <Icon size={17} />
                        {name}
                      </NavLink>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
