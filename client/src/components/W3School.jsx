import React, { useState } from "react";

const DataDisplay = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const data = {
    "HTML and CSS": {
      "Learn HTML": ["Tutorial", "Reference"],
      "Learn CSS": ["Tutorial", "Reference"],
      "Learn RWD": ["Tutorial"],
      "Learn Bootstrap": ["Overview"],
      "Learn W3.CSS": ["Tutorial", "Reference"],
      "Learn Sass": ["Tutorial"],
      "Learn Colors": ["Tutorial", "Reference"],
      "Learn Icons": ["Tutorial"],
      "Learn SVG": ["Tutorial"],
      "Learn Canvas": ["Tutorial", "Reference"],
      "Learn Graphics": ["Tutorial"],
      "Learn Character Sets": ["Reference"],
      "Learn How To": ["Tutorial"],
    },
    JavaScript: {
      "Learn JavaScript": ["Tutorial", "Reference"],
      "Learn React": ["Tutorial"],
      "Learn jQuery": ["Tutorial", "Reference"],
      "Learn Vue": ["Tutorial"],
      "Learn AngularJS": ["Tutorial", "Reference"],
      "Learn JSON": ["Tutorial"],
      "Learn AJAX": ["Tutorial", "Reference"],
      "Learn AppML": ["Tutorial"],
      "Learn W3.JS": ["Tutorial", "Reference"],
    },
    Backend: {
      "Learn Python": ["Tutorial", "Reference"],
      "Learn SQL": ["Tutorial", "Reference"],
      "Learn MySQL": ["Tutorial", "Reference"],
      "Learn Java": ["Tutorial", "Reference"],
      "Learn C": ["Tutorial", "Reference"],
      "Learn C++": ["Tutorial", "Reference"],
      "Learn R": ["Tutorial"],
      "Learn Kotlin": ["Tutorial"],
      "Learn Go": ["Tutorial"],
      "Learn Django": ["Tutorial", "Reference"],
      "Learn PostgreSQL": ["Tutorial"],
      "Learn TypeScript": ["Tutorial"],
      "Learn ASP": ["Tutorial", "Reference"],
      "Learn Node.js": ["Tutorial", "Reference"],
      "Learn Raspberry Pi": ["Tutorial"],
      "Learn Git": ["Tutorial"],
      "Learn MongoDB": ["Tutorial"],
      "Learn AWS Cloud": ["Tutorial"],
      "Learn XML": ["Tutorial", "Reference"],
    },
    "Data Analytics": {
      "Learn AI": ["Tutorial"],
      "Learn Generative AI": ["Tutorial"],
      "Learn ChatGPT-3.5": ["Tutorial"],
      "Learn ChatGPT-4": ["Tutorial"],
      "Learn Google Bard": ["Tutorial"],
      "Learn Machine Learning": ["Tutorial"],
      "Learn DSA": ["Tutorial"],
      "Learn Data Science": ["Tutorial"],
      "Learn NumPy": ["Tutorial"],
      "Learn Pandas": ["Tutorial"],
      "Learn SciPy": ["Tutorial"],
      "Learn Matplotlib": ["Tutorial"],
      "Learn Statistics": ["Tutorial"],
      "Learn Excel": ["Tutorial"],
      "Learn Google Sheets": ["Tutorial"],
    },
    "Web Building": {
      "Create a Website": ["HOT!"],
      "Create a Server": ["NEW"],
      "Where To Start": [],
      "Web Templates": [],
      "Web Statistics": [],
      "Web Certificates": [],
      "Web Development": [],
      "Code Editor": [],
      "Test Your Typing Speed": [],
      "Play a Code Game": [],
      "Cyber Security": [],
      Accessibility: [],
      "Join our Newsletter": [],
    },
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
  };
  const handleSubCategoryChange = (e) => setSelectedSubCategory(e.target.value);

  const filterData = (data) => {
    const filteredData = {};
    Object.keys(data).forEach((category) => {
      if (selectedCategory && category !== selectedCategory) return;
      const filteredSubCategories = Object.keys(data[category]).reduce(
        (acc, subCategory) => {
          if (selectedSubCategory && subCategory !== selectedSubCategory) return acc;
          const filteredItems = data[category][subCategory].filter(
            (item) => item.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (filteredItems.length > 0) {
            acc[subCategory] = filteredItems;
          }
          return acc;
        },
        {}
      );
      if (Object.keys(filteredSubCategories).length > 0) {
        filteredData[category] = filteredSubCategories;
      }
    });
    return filteredData;
  };

  const filteredData = filterData(data);

  return (
    <div className="grid grid-cols-3 mx-auto justify-center bg-black text-white p-4">
      <div className="col-span-3 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 w-full mb-4"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 w-full mb-4"
        >
          <option value="">All Categories</option>
          {Object.keys(data).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {selectedCategory && (
          <select
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            className="p-2 w-full mb-4"
          >
            <option value="">All Subcategories</option>
            {Object.keys(data[selectedCategory]).map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="col-span-3 mb-4">
        <div>
          <strong>Filters:</strong>
          <div>
            {selectedCategory && <span>Category: {selectedCategory}</span>}
            {selectedSubCategory && (
              <span> , Subcategory: {selectedSubCategory}</span>
            )}
          </div>
        </div>
      </div>
      {Object.keys(filteredData).map((category) => (
        <div key={category} className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-yellow-100">{category}</h2>
          <ul>
            {Object.keys(filteredData[category]).map((subCategory) => (
              <li className="py-2" key={subCategory}>
                <strong>{subCategory}: </strong>
                <span className="mr-2 text-sm font-bold text-yellow-100 underline">
                  {filteredData[category][subCategory].join(" , ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
