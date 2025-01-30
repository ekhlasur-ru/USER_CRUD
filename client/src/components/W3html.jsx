import React, { useState } from "react";
// import "./W3html.css"
const HtmlTopics = () => {
  const data = {
    "HTML Tutorial": {
      topics: [
        "HTML HOME",
        "HTML Introduction",
        "HTML Editors",
        "HTML Basic",
        "HTML Elements",
        "HTML Attributes",
        "HTML Headings",
        "HTML Paragraphs",
        "HTML Styles",
        "HTML Formatting",
        "HTML Quotations",
        "HTML Comments",
        "HTML Colors",
        "HTML CSS",
        "HTML Links", // This is the main topic we are focusing on
        "HTML Images",
        "HTML Favicon",
        "HTML Page Title",
        "HTML Tables",
        "HTML Lists",
        "HTML Block & Inline",
        "HTML Div",
        "HTML Classes",
        "HTML Id",
        "HTML Iframes",
        "HTML JavaScript",
        "HTML File Paths",
        "HTML Head",
        "HTML Layout",
        "HTML Responsive",
        "HTML Computercode",
        "HTML Semantics",
        "HTML Style Guide",
        "HTML Entities",
        "HTML Symbols",
        "HTML Emojis",
        "HTML Charsets",
        "HTML URL Encode",
        "HTML vs. XHTML",
      ],
      subtopics: {
        "HTML Links": ["Links", "Link Colors", "Link Bookmarks"], // Subtopics for HTML Links
        "HTML Images": ["Image Attributes", "Image Maps", "Image Elements"], // Subtopics for HTML Images
      },
    },
    "HTML Forms": {
      topics: [
        "HTML Forms",
        "HTML Form Attributes",
        "HTML Form Elements",
        "HTML Input Types",
        "HTML Input Attributes",
        "Input Form Attributes",
      ],
      subtopics: {
        "HTML Forms": ["Form Element", "Input Element", "Textarea Element"], // Subtopics for HTML Forms
      },
    },
    "HTML Graphics": { topics: ["HTML Canvas", "HTML SVG"] },
    "HTML Media": {
      topics: [
        "HTML Media",
        "HTML Video",
        "HTML Audio",
        "HTML Plug-ins",
        "HTML YouTube",
      ],
      subtopics: {
        "HTML Media": ["Links", "Link Colors", "Link Bookmarks"], // Subtopics for HTML Links
        "HTML Video": ["Image Attributes", "Image Maps", "Image Elements"], // Subtopics for HTML Images
      },
    },
    "HTML APIs": {
      topics: [
        "HTML Geolocation",
        "HTML Drag/Drop",
        "HTML Web Storage",
        "HTML Web Workers",
        "HTML SSE",
      ],
    },
    "HTML Examples": {
      topics: [
        "HTML Examples",
        "HTML Editor",
        "HTML Quiz",
        "HTML Exercises",
        "HTML Website",
        "HTML Syllabus",
        "HTML Study Plan",
        "HTML Interview Prep",
        "HTML Bootcamp",
        "HTML Certificate",
        "HTML Summary",
        "HTML Accessibility",
      ],
    },
    "HTML References": {
      topics: [
        "HTML Tag List",
        "HTML Attributes",
        "HTML Global Attributes",
        "HTML Browser Support",
        "HTML Events",
        "HTML Colors",
        "HTML Canvas",
        "HTML Audio/Video",
        "HTML Doctypes",
        "HTML Character Sets",
        "HTML URL Encode",
        "HTML Lang Codes",
        "HTTP Messages",
        "HTTP Methods",
        "PX to EM Converter",
        "Keyboard Shortcuts",
      ],
    },
  };

  const [selectedTopic, setSelectedTopic] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTopicClick = (topic) => {
    if (selectedTopic === topic) {
      setShowDropdown(!showDropdown);
    } else {
      setSelectedTopic(topic);
      setShowDropdown(true);
    }
  };

  return (
    <div className="h-screen max-w-[280px] bg-slate-400 overflow-y-auto custom-scrollbar">
      {Object.entries(data).map(([category, { topics, subtopics }]) => (
        <div key={category}>
          {/* Title Section */}
          <h2 className="mb-2 text-2xl font-bold text-white">{category}</h2>
          <ul>
            {/* Topic Section  */}
            {topics.map((topic) => (
              <li className="py-2" key={topic}>
                <span
                  className="mr-2 cursor-pointer text-sm font-bold text-red-600"
                  onClick={() => handleTopicClick(topic)}>
                  {topic}
                </span>
                {/* Dropdown Section */}
                {subtopics?.[topic] &&
                  topic === selectedTopic &&
                  showDropdown && (
                    <ul className="ml-4 mt-2">
                      {subtopics[topic].map((subtopic) => (
                        <li
                          key={subtopic}
                          className="text-sm font-normal text-white">
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HtmlTopics;
