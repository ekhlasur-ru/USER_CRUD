import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

function CopyJSCode() {
  const [copy, setcopy] = useState(false);
  const codeString = `<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
`;
  return (
    <>
      <div className="grid h-screen place-items-center bg-gray-500">
        <div className="min-w-[25rem] max-w-2xl rounded-md bg-gray-700">
          <div className="text-md flex justify-between px-4 py-2 text-white">
            <p title="Demo Code">Example Code</p>
            {copy ? (
              <button className="flex items-center gap-2">
                <FaCheck />
                Copied!
              </button>
            ) : (
              <button
                title="Copy Code"
                className="flex items-center gap-2 hover:scale-105"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setcopy(true);
                  setTimeout(() => {
                    setcopy(false);
                  }, 500);
                }}>
                <FiClipboard />
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="javascript/jsx"
            style={dracula}
            wrapLongLines={true}
            showLineNumbers={true}
            customStyle={{ padding: "20px" }}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
export default CopyJSCode;
