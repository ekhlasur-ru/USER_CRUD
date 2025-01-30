import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaPhp,
  FaTools,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaGitAlt,
  FaCuttlefish,
  FaCode,
  FaShieldAlt,
  FaChartLine,
  FaAws,
  FaLaptopCode,
  FaBook,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

function HoraizentalScrollButton() {
  const data = [
    {
      id: 1,
      name: "HTML",
      title: "HTML Tutorial",
      link: "/",
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      name: "CSS",
      title: "CSS Tutorial",
      link: "/A",
      icon: <FaCss3Alt />,
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      title: "JavaScript Tutorial",
      link: "/javascript",
      icon: <FaJs />,
    },
    {
      id: 4,
      name: "SQL",
      title: "SQL Tutorial",
      link: "/sql",
      icon: <FaDatabase />,
    },
    {
      id: 5,
      name: "PYTHON",
      title: "Python Tutorial",
      link: "/python",
      icon: <FaPython />,
    },
    {
      id: 6,
      name: "JAVA",
      title: "Java Tutorial",
      link: "/java",
      icon: <FaJava />,
    },
    {
      id: 7,
      name: "PHP",
      title: "PHP Tutorial",
      link: "/php",
      icon: <FaPhp />,
    },
    {
      id: 8,
      name: "HOW_TO",
      title: "How-To Guides",
      link: "/how-to",
      icon: <FaTools />,
    },
    {
      id: 9,
      name: "W3.CSS",
      title: "W3.CSS Framework",
      link: "/w3-css",
      icon: <FaCss3 />,
    },
    {
      id: 10,
      name: "C",
      title: "C Programming",
      link: "/c",
      icon: <FaCuttlefish />,
    },
    {
      id: 11,
      name: "C++",
      title: "C++ Programming",
      link: "/cplusplus",
      icon: <FaCuttlefish />,
    },
    {
      id: 12,
      name: "C#",
      title: "C# Programming",
      link: "/csharp",
      icon: <FaCuttlefish />,
    },
    {
      id: 13,
      name: "BOOTSTRAP",
      title: "Bootstrap Framework",
      link: "/bootstrap",
      icon: <FaCss3 />,
    },
    {
      id: 14,
      name: "REACT",
      title: "React Library",
      link: "/react",
      icon: <FaReact />,
    },
    {
      id: 15,
      name: "MYSQL",
      title: "MySQL Database",
      link: "/mysql",
      icon: <FaDatabase />,
    },
    {
      id: 16,
      name: "JQUERY",
      title: "jQuery Library",
      link: "/jquery",
      icon: <FaJs />,
    },
    {
      id: 17,
      name: "EXCEL",
      title: "Excel Tutorial",
      link: "/excel",
      icon: <FaBook />,
    },
    {
      id: 18,
      name: "XML",
      title: "XML Tutorial",
      link: "/xml",
      icon: <FaCode />,
    },
    {
      id: 19,
      name: "DJANGO",
      title: "Django Framework",
      link: "/django",
      icon: <FaPython />,
    },
    {
      id: 20,
      name: "NUMPY",
      title: "NumPy Library",
      link: "/numpy",
      icon: <FaPython />,
    },
    {
      id: 21,
      name: "PANDAS",
      title: "Pandas Library",
      link: "/pandas",
      icon: <FaPython />,
    },
    {
      id: 22,
      name: "NODEJS",
      title: "Node.js Framework",
      link: "/nodejs",
      icon: <FaNodeJs />,
    },
    { id: 23, name: "R", title: "R Programming", link: "/r", icon: <FaBook /> },
    {
      id: 24,
      name: "TYPESCRIPT",
      title: "TypeScript Language",
      link: "/typescript",
      icon: <FaJs />,
    },
    {
      id: 25,
      name: "ANGULAR",
      title: "Angular Framework",
      link: "/angular",
      icon: <FaAngular />,
    },
    {
      id: 26,
      name: "GIT",
      title: "Git Version Control",
      link: "/git",
      icon: <FaGitAlt />,
    },
    {
      id: 27,
      name: "POSTGRESQL",
      title: "PostgreSQL Database",
      link: "/postgresql",
      icon: <FaDatabase />,
    },
    {
      id: 28,
      name: "MONGODB",
      title: "MongoDB Database",
      link: "/mongodb",
      icon: <FaDatabase />,
    },
    {
      id: 29,
      name: "ASP",
      title: "ASP.NET Framework",
      link: "/asp",
      icon: <FaCode />,
    },
    {
      id: 30,
      name: "AI",
      title: "Artificial Intelligence",
      link: "/ai",
      icon: <FaShieldAlt />,
    },
    {
      id: 31,
      name: "GO",
      title: "Go Language",
      link: "/go",
      icon: <FaLaptopCode />,
    },
    {
      id: 32,
      name: "KOTLIN",
      title: "Kotlin Language",
      link: "/kotlin",
      icon: <FaBook />,
    },
    {
      id: 33,
      name: "SASS",
      title: "Sass Preprocessor",
      link: "/sass",
      icon: <FaCss3 />,
    },
    {
      id: 34,
      name: "VUE",
      title: "Vue.js Framework",
      link: "/vue",
      icon: <FaReact />,
    },
    {
      id: 35,
      name: "DSA",
      title: "Data Structures and Algorithms",
      link: "/dsa",
      icon: <FaChartLine />,
    },
    {
      id: 36,
      name: "GEN_AI",
      title: "Generative AI",
      link: "/gen-ai",
      icon: <FaShieldAlt />,
    },
    {
      id: 37,
      name: "SCIPY",
      title: "SciPy Library",
      link: "/scipy",
      icon: <FaPython />,
    },
    {
      id: 38,
      name: "AWS",
      title: "Amazon Web Services",
      link: "/aws",
      icon: <FaAws />,
    },
    {
      id: 39,
      name: "CYBERSECURITY",
      title: "Cybersecurity",
      link: "/cybersecurity",
      icon: <FaShieldAlt />,
    },
    {
      id: 40,
      name: "DATA_SCIENCE",
      title: "Data Science",
      link: "/data-science",
      icon: <FaChartLine />,
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 mt-4 flex items-center bg-gray-800">
      <button
        className="z-10 bg-gray-700 text-4xl text-white hover:bg-black"
        onClick={scrollLeft}>
        <FaAngleLeft />
      </button>
      <ul
        ref={scrollContainerRef}
        className="scroll-container scrollbar grid grid-flow-col overflow-x-auto transition-transform duration-500 ease-in-out">
        {data.map((item) => (
          <NavLink
            title={item.title}
            to={item.link}
            key={item.id}
            className="flex w-auto flex-col items-center justify-center border-r-[1px] border-gray-500 bg-gray-800 px-4 py-1 text-center text-lg text-white hover:bg-gray-700 hover:text-yellow-500 active:bg-green-400 transition-transform duration-500 ease-in-out">
            <div className="flex items-center justify-center gap-2">
              <span className="text-red-400">{item.icon}</span>
              <span className="text-nowrap ">{item.name}</span>
            </div>
          </NavLink>
        ))}
      </ul>

      <button
        className="z-20 bg-gray-700 text-4xl text-white hover:bg-black"
        onClick={scrollRight}>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default HoraizentalScrollButton;
