import React from "react";
import { NavLink } from "react-router-dom";

function HorizontalScroll() {
  const data = [
    { id: 1, name: "HTML", title: "HTML Tutorial", link: "/html" },
    { id: 2, name: "CSS", title: "CSS Tutorial", link: "/css" },
    {
      id: 3,
      name: "JAVASCRIPT",
      title: "JavaScript Tutorial",
      link: "/javascript",
    },
    { id: 4, name: "SQL", title: "SQL Tutorial", link: "/sql" },
    { id: 5, name: "PYTHON", title: "Python Tutorial", link: "/python" },
    { id: 6, name: "JAVA", title: "Java Tutorial", link: "/java" },
    { id: 7, name: "PHP", title: "PHP Tutorial", link: "/php" },
    { id: 8, name: "HOW_TO", title: "How-To Guides", link: "/how-to" },
    { id: 9, name: "W3.CSS", title: "W3.CSS Framework", link: "/w3-css" },
    { id: 10, name: "C", title: "C Programming", link: "/c" },
    { id: 11, name: "C++", title: "C++ Programming", link: "/cplusplus" },
    { id: 12, name: "C#", title: "C# Programming", link: "/csharp" },
    {
      id: 13,
      name: "BOOTSTRAP",
      title: "Bootstrap Framework",
      link: "/bootstrap",
    },
    { id: 14, name: "REACT", title: "React Library", link: "/react" },
    { id: 15, name: "MYSQL", title: "MySQL Database", link: "/mysql" },
    { id: 16, name: "JQUERY", title: "jQuery Library", link: "/jquery" },
    { id: 17, name: "EXCEL", title: "Excel Tutorial", link: "/excel" },
    { id: 18, name: "XML", title: "XML Tutorial", link: "/xml" },
    { id: 19, name: "DJANGO", title: "Django Framework", link: "/django" },
    { id: 20, name: "NUMPY", title: "NumPy Library", link: "/numpy" },
    { id: 21, name: "PANDAS", title: "Pandas Library", link: "/pandas" },
    { id: 22, name: "NODEJS", title: "Node.js Framework", link: "/nodejs" },
    { id: 23, name: "R", title: "R Programming", link: "/r" },
    {
      id: 24,
      name: "TYPESCRIPT",
      title: "TypeScript Language",
      link: "/typescript",
    },
    { id: 25, name: "ANGULAR", title: "Angular Framework", link: "/angular" },
    { id: 26, name: "GIT", title: "Git Version Control", link: "/git" },
    {
      id: 27,
      name: "POSTGRESQL",
      title: "PostgreSQL Database",
      link: "/postgresql",
    },
    { id: 28, name: "MONGODB", title: "MongoDB Database", link: "/mongodb" },
    { id: 29, name: "ASP", title: "ASP.NET Framework", link: "/asp" },
    { id: 30, name: "AI", title: "Artificial Intelligence", link: "/ai" },
    { id: 31, name: "GO", title: "Go Language", link: "/go" },
    { id: 32, name: "KOTLIN", title: "Kotlin Language", link: "/kotlin" },
    { id: 33, name: "SASS", title: "Sass Preprocessor", link: "/sass" },
    { id: 34, name: "VUE", title: "Vue.js Framework", link: "/vue" },
    {
      id: 35,
      name: "DSA",
      title: "Data Structures and Algorithms",
      link: "/dsa",
    },
    { id: 36, name: "GEN_AI", title: "Generative AI", link: "/gen-ai" },
    { id: 37, name: "SCIPY", title: "SciPy Library", link: "/scipy" },
    { id: 38, name: "AWS", title: "Amazon Web Services", link: "/aws" },
    {
      id: 39,
      name: "CYBERSECURITY",
      title: "Cybersecurity",
      link: "/cybersecurity",
    },
    {
      id: 40,
      name: "DATA_SCIENCE",
      title: "Data Science",
      link: "/data-science",
    },
  ];

  return (
    <div className="">
      <ul className="scroll-container scrollbar grid grid-flow-col overflow-x-auto">
        {data.map((item) => (
          <NavLink
            title={item.title}
            to={item.link}
            key={item.id}
            className="w-auto text-nowrap border-r-[1px] border-gray-500 bg-gray-800 px-6 py-1 text-center text-[16px] text-white hover:bg-black active:bg-green-400">
            {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default HorizontalScroll;
