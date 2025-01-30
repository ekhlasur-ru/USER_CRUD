import React, { useState } from "react";
import Slider from "@mui/material/Slider";

function Pricing() {
  const [value, setValue] = useState([10, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <>
      <div className="m-4 mx-auto w-[400px] bg-slate-300 p-4">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
    </>
  );
}

export default Pricing;
