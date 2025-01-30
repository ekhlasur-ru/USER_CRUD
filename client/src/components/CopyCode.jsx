import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";

const CopyCode = () => {
  const codeSnippet = `<div className="grid h-screen place-items-center bg-gray-500">
        <div className="min-w-[25rem] max-w-2xl rounded-md bg-gray-700">
          <div className="text-md flex justify-between px-4 py-2 text-white">
            <p title="Demo Code">
              Example Code (Without use SyntaxHighlighter)
            </p>
            {isCopied ? (
              <button className="flex items-center gap-2">
                <FaCheck />
                Copied!
              </button>
            ) : (
              <button
                title="Copy Code"
                className="flex items-center gap-2 hover:scale-105"
                onClick={() => {
                  navigator.clipboard.writeText(codeSnippet);
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 500);
                }}>
                <FiClipboard />
                Copy Code
              </button>
            )}
          </div>
          <pre className="rounded-md bg-black p-4">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div> `;

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="grid h-screen place-items-center bg-gray-500">
        <div className="min-w-[25rem] max-w-4xl rounded-md bg-gray-700">
          <div className="text-md flex justify-between px-4 py-2 text-white">
            <p title="Demo Code">
              Example Code (Without use SyntaxHighlighter)
            </p>
            {isCopied ? (
              <button className="flex items-center gap-2">
                <FaCheck />
                Copied!
              </button>
            ) : (
              <button
                title="Copy Code"
                className="flex items-center gap-2 hover:scale-105"
                onClick={() => {
                  navigator.clipboard.writeText(codeSnippet);
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 500);
                }}>
                <FiClipboard />
                Copy Code
              </button>
            )}
          </div>
          <pre className="rounded-md bg-black p-4">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default CopyCode;
