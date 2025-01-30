import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react";

function About() {
  const [minPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [loading, setLoading] = useState(true);
  const handlePriceChange = (e) => {
    const { value } = e.target;
    setMaxPrice(value);
  };

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const clearInput = useRef("");
  const handleClearInput = () => {
    clearInput.current.value = "";
    setSearch("");
  };

  // Api call With Axios
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setAllItems(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  // Filter items based on search, category, and price range
  const filteredItems = items.filter((item) => {
    const withinPriceRange = item.price >= minPrice && item.price <= maxPrice;
    const matchesCategory = category ? item.category === category : true;
    const matchesSearch = item.category
      .toLowerCase()
      .includes(search.toLowerCase());

    return withinPriceRange && matchesCategory && matchesSearch;
  });
  // Filter by Category with Dynamic Value
  const handleCategoryChange = (category) => {
    setCategory(category);
    setItems(
      allItems.filter((item) => item.category === category || category === "")
    );
  };
  const Catbutton = [
    {
      category: "All Category",
      value: "",
    },
    {
      category: "Electronics",
      value: "electronics",
    },
    {
      category: "Men's Clothing",
      value: "men's clothing",
    },
    {
      category: "Jewelery",
      value: "jewelery",
    },
    {
      category: "Women's Clothing",
      value: "women's clothing",
    },
    {
      category: "All Components",
      value: "components",
    },
    {
      category: "Precessor",
      value: "processor",
    },
    {
      category: "Motherboard",
      value: "motherboard",
    },
    {
      category: "Graphics Card",
      value: "graphics card",
    },
    {
      category: "RAM",
      value: "ram",
    },
    {
      category: "Storage",
      value: "storage",
    },
    {
      category: "Power Supply",
      value: "power supply",
    },
    {
      category: "Cooling",
      value: "cooling",
    },
    {
      category: "Case",
      value: "case",
    },
    {
      category: "Monitor",
      value: "monitor",
    },
  ];

  if (loading)
    return (
      <h1 className="flex h-screen items-center justify-center">Loading...</h1>
    );
  if (!items) return <h1>Product not found</h1>;
  return (
    <>
      <div className="card min-h-screen">
        <div className="flex w-full">
          <div className="relative mx-4">
            <input
              ref={clearInput}
              onChange={(e) => setSearch(e.target.value)}
              className="focus:shadow-outline mx-4 w-full appearance-none rounded-md border-2 border-gray-300 px-24 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
              type="text"
              value={search}
              placeholder="Search Your Product"
            />
            <div className="absolute inset-y-0 right-5 flex items-center">
              <button onClick={handleClearInput}>
                <RxCross2 />
              </button>
            </div>
            <div className="absolute inset-y-0 left-5 flex items-center">
              <IoSearchOutline />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 w-[1320px] items-center gap-2">
          {Catbutton.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(item.value)}
              className="mx-1 my-1 rounded-3xl px-4 text-black ring-1 ring-gray-500 hover:bg-blue-700 hover:text-white hover:ring-blue-700">
              {item.category}
            </button>
          ))}
        </div>

        <div className="price range my-4 bg-yellow-100">
          <label htmlFor="customRange">
            Filter by Price: ${minPrice} - ${maxPrice}
          </label>
          <input
            min="0"
            max="500"
            value={maxPrice}
            onChange={handlePriceChange}
            type="rang"
            id="customRange"
          />
        </div>

        <motion.div
          animate={{ x: [0, 200, 0] }}
          className="grid bg-blue-300 sm:mt-12 sm:gap-x-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <main
              className="mx-auto mb-4 w-[400px] border border-gray-500 bg-white px-8 py-8 lg:max-w-6xl"
              key={item.id}>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="mx-auto h-[300px] w-[250px] px-8 py-8 transition-[.4s] ease-in-out hover:scale-110"
                src={item.image}
                alt={item.title}
              />
              <hr />
              <h1 className="py-4 text-2xl font-bold text-gray-700">
                {item.title.slice(0, 10)}
              </h1>
              <h1 className="text-4xl font-bold">
                ${item.price}{" "}
                <span className="right-0 bg-gray-200 px-4 py-1 text-xl font-bold text-gray-600">
                  {item.category}
                </span>
              </h1>
              <p className="text-xl text-blue-500">
                {item.description.slice(0, 20) + "..."}
              </p>
              <div className="flex">
                <button className="mx-auto mt-4 bg-black px-8 py-2 text-xl font-bold text-white active:text-red-400">
                  Add to Cart
                </button>
              </div>
            </main>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default About;
