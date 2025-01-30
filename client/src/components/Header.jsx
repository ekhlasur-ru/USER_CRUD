import React from "react";
import { Menus } from "./utils.js";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex-center sticky inset-0 z-[999] h-16 bg-slate-100 dark text-black text-[15px] shadow-lg">
        <nav className="flex-center-between mx-auto w-full max-w-7xl px-4">
          <div className="flex-center relative z-[999] gap-x-3">
            <img
              src="https://www.startech.com.bd/image/catalog/logo.png"
              alt="Logo"
              className="h-auto w-[116px]"
            />
          </div>

          <ul className="lg:flex-center hidden gap-x-4">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              onClick={() => navigate("/shop")}
              aria-label="shop"
              className="flex-center relative z-[999] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-2 shadow-lg transition hover:opacity-90">
              Shop
            </button>
            <button
              onClick={() => navigate("/product")}
              aria-label="product"
              className="flex-center relative z-[999] rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 px-4 py-2 shadow-lg transition hover:opacity-90">
              Product
            </button>
            <button
              onClick={() => navigate("/mobile")}
              aria-label="mobile"
              className="flex-center relative z-[999] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-4 py-2 shadow-lg transition hover:opacity-90">
              Mobile
            </button>

            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
