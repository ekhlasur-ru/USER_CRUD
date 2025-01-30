import React from "react";
import "./MarqueeText.css";

function MarqueeText() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto w-[400px] rounded-full bg-white text-center md:min-w-[786px] xl:w-[1280px]">
      <div className="marquee-container mx-auto w-[370px] overflow-hidden py-2 md:min-w-[750px] xl:w-[1220px]">
        <p className="marquee-container marquee-content text-nowrap text-red-500">
          {today}, all outlets are open except the IDB Outlet. Additionally, our
          online activities are open and operational.
        </p>
      </div>
    </div>
  );
}

export default MarqueeText;
