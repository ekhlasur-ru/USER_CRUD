import React, { useState } from "react";

function CodeCopy() {
  const [copy, setcopy] = useState("");
  const copyText = () => {
    navigator.clipboard.writeText(copy);
    alert("copied");
  };
  return (
    <>
      <div className="grid h-screen place-items-center bg-gray-500">
        <div className="border">
          <input
            className="w-[300px] px-2 py-2 text-2xl text-black"
            type="text"
            placeholder="Your Text"
            onChange={(e) => setcopy(e.target.value)}
          />
          <button
            title="copy text"
            type="button"
            value="copy"
            className="px-4 text-2xl active:scale-110"
            onClick={copyText}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default CodeCopy;
