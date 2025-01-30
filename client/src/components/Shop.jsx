import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import GoToBack from "../components/GoToBack";

function About() {
  const [minPrice, setMinPrice] = useState(0);
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

  const handleCategoryChange = (category) => {
    setCategory(category);
    setItems(
      allItems.filter((item) => item.category === category || category === "")
    );
  };

  if (loading)
    return (
      <h1 className="flex h-screen items-center justify-center">Loading...</h1>
    );
  if (!items) return <h1>Product not found</h1>;
  return (
    <>
      <div className="card min-h-screen">
        <div className="flex w-full">
          <GoToBack />
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

        <div className="bg-blue-400 py-4">
          <button
            onClick={() => handleCategoryChange("")}
            className="mx-2 rounded-full bg-slate-200 px-4 py-1">
            All Category
          </button>
          <button
            onClick={() => handleCategoryChange("electronics")}
            className="mx-2 rounded-full bg-slate-200 px-4 py-1">
            Electronics
          </button>
          <button
            onClick={() => handleCategoryChange("men's clothing")}
            className="mx-2 rounded-full bg-slate-200 px-4 py-1">
            Men's Clothing
          </button>
          <button
            onClick={() => handleCategoryChange("jewelery")}
            className="mx-2 rounded-full bg-slate-200 px-4 py-1">
            Jewelery
          </button>
          <button
            onClick={() => handleCategoryChange("women's clothing")}
            className="mx-2 rounded-full bg-slate-200 px-4 py-1">
            Women's Clothing
          </button>
        </div>

        <div>
          <label>
            Choose the chat room:{" "}
            <select
              className="w-[200px] scroll-m-0 bg-gray-400"
              onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="">All Categories</option>
              {allItems.map((option) => (
                <option key={option.id} value={option.category}>
                  {option.category}
                </option>
              ))}
            </select>
          </label>
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
            type="range"
            id="customRange"
          />
        </div>

        <div className="grid bg-blue-300 sm:mt-12 sm:gap-x-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <main
              className="mx-auto mb-4 w-[400px] border border-gray-500 bg-white px-8 py-8 lg:max-w-6xl"
              key={item.id}>
              <img
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
        </div>
      </div>
    </>
  );
}

export default About;
