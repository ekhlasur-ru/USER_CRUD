import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Clock = ({ closingTime }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const getTimeRemaining = () => {
    const now = new Date();
    const closing = new Date(closingTime);
    const timeDifference = closing - now;
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      return `${days} `;
    }
    return "Closed";
  };

  const getTimeRemainingh = () => {
    const now = new Date();
    const closing = new Date(closingTime);
    const timeDifference = closing - now;
    if (timeDifference > 0) {
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      return `${hours} `;
    }
    return "Closed";
  };
  const getTimeRemainingm = () => {
    const now = new Date();
    const closing = new Date(closingTime);
    const timeDifference = closing - now;
    if (timeDifference > 0) {
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      return `${minutes} `;
    }
    return "Closed";
  };
  const getTimeRemainings = () => {
    const now = new Date();
    const closing = new Date(closingTime);
    const timeDifference = closing - now;
    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      return `${seconds} `;
    }
    return "Closed";
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex gap-2 rounded-full border p-6 text-center shadow-lg">
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-orange-600 px-3 py-2 text-white">
              {getTimeRemaining()}
            </li>
            <li>Days</li>
          </ul>

          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-orange-600 px-3 py-2 text-white">
              {getTimeRemainingh()}
            </li>
            <li>Hours</li>
          </ul>
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-orange-600 px-3 py-2 text-white">
              {getTimeRemainingm()}
            </li>
            <li>Minutes</li>
          </ul>
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-orange-600 px-3 py-2 text-white">
              {getTimeRemainings()}
            </li>
            <li>Secounds</li>
          </ul>
        </div>
        {/* Cureent Date  */}
        <div className="flex gap-2 rounded-full border p-6 text-center shadow-lg">
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-blue-600 px-3 py-2 text-white">
              {time.getHours()}
            </li>
            <li>Hours</li>
          </ul>
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-blue-600 px-3 py-2 text-white">
              {time.getMinutes()}
            </li>
            <li>Minutes</li>
          </ul>
          <ul className="justify-center gap-4">
            <li className="rounded-lg bg-blue-600 px-3 py-2 text-white">
              {time.getSeconds()}
            </li>
            <li>Seconds</li>
          </ul>
        </div>
      </div>
    </>
  );
};

Clock.propTypes = {
  closingTime: PropTypes.string.isRequired,
};

export default Clock;
