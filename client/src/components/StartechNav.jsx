import React, { useState } from "react";
import Startech from "./Startech.js";

const StartechNav = () => {
  const [showSubMenu, setShowSubMenu] = useState({});

  const handleMouseEnter = (id) => {
    setShowSubMenu((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setShowSubMenu((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <header className="z-50 text-white shadow-lg">
        <nav className="mx-auto my-2 w-[1320px] bg-white text-black">
          <ul className="grid grid-flow-col items-center justify-around">
            {/* Logo Section Here */}
            {/* <li className="mr-4">
              <p className="text-md font-bold">Logo</p>
            </li> */}
            {/* main Menu Section  */}
            {Startech.map((item) => (
              <li
                key={item.name}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={() => handleMouseLeave(item.name)}>
                <div className="header-nav-div cursor-pointer py-2 text-[14px] transition-colors duration-200 hover:text-red-600">
                  {item.name}
                </div>
                {item.subMenu && (
                  <ul
                    className={`absolute left-0 top-[34px] w-[200px] bg-white text-gray-800 shadow-lg transition-transform duration-200 ${
                      showSubMenu[item.name] ? "block" : "hidden"
                    }`}>
                    {item.subMenu.map((subItem) => (
                      <li
                        key={subItem.name}
                        style={subItem.style}
                        className="group relative border-b border-gray-200"
                        onMouseEnter={() => handleMouseEnter(subItem.name)}
                        onMouseLeave={() => handleMouseLeave(subItem.name)}>
                        <a
                          href={subItem.link}
                          className="flex items-center px-4 py-2 text-[14px] transition-colors duration-200 hover:bg-red-600">
                          {subItem.name}
                        </a>
                        {subItem.subMenus && (
                          <ul
                            className={`absolute left-full top-0 w-[200px] bg-white text-gray-800 shadow-lg transition-transform duration-200 ${
                              showSubMenu[subItem.name] ? "block" : "hidden"
                            }`}>
                            {subItem.subMenus.map((subSubItem) => (
                              <li
                                key={subSubItem.name}
                                style={subItem.style}
                                className="border-b border-gray-200">
                                <a
                                  href={subSubItem.link}
                                  className="block px-4 py-2 text-[14px] transition-colors duration-200 hover:bg-red-600 active:bg-red-600">
                                  {subSubItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* <div className="mx-auto mt-4 w-[1320px] items-center gap-2 bg-gray-600 text-white">
        {Startech.map((item) => (
          <button
            onClick={item.link}
            key={item.name}
            className="mx-1 my-1 rounded-3xl bg-gray-800 px-4 ring-1 ring-gray-500 hover:bg-blue-700 hover:ring-blue-700">
            {item.name}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-4 w-[1320px] items-center gap-2 bg-gray-600 text-white">
        {Startech.map((item) =>
          item.subMenu.map((subItem) => (
            <button
              onClick={() => (window.location.href = subItem.link)}
              key={subItem.name}
              className="mx-1 my-1 rounded-3xl bg-gray-800 px-4 ring-1 ring-gray-500 hover:bg-blue-700 hover:ring-blue-700">
              {subItem.name}
            </button>
          ))
        )}
      </div> */}
    </>
  );
};

export default StartechNav;
