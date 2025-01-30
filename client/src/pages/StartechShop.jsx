import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StartechNav from "../components/StartechNav";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';


function StartechShop({setProgress}) {
  StartechShop.propTypes = {
    setProgress: PropTypes.func.isRequired,
  };
  const navigate = useNavigate();
  const [mobile, setMobile] = useState([]);
  const [allImobile, setAllImobile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true); // Renamed for consistency

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setOpen(!open); // Update the correct state
  };

  const handleBrandFilter = (brand) => {
    const filteredMobiles = allImobile.filter(
      (item) => item.brand === brand || brand === ""
    );
    setMobile(filteredMobiles);
  };

  useEffect(() => {
    setProgress(30)
    axios
    .get("http://localhost:8001/mobile")
    .then((res) => {
      setMobile(res.data);
      setProgress(100);
      setAllImobile(res.data);
      setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setProgress(100);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex h-screen items-center justify-center space-x-2 bg-white dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 animate-bounce rounded-full bg-black"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="bg-gray-100 px-2 text-center">
          <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-8xl font-extrabold text-red-500">ERROR</h1>
            <p className="text-4xl font-medium text-gray-800">
              Internal <span className="text-red-500">Startech</span> Server
              Error
            </p>
            <p className="mt-4 text-xl text-gray-800">
              Please{" "}
              <span className="text-green-400">
                <button onClick={() => window.location.reload()}>
                  try again
                </button>
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Mobile Phone Price in Bangladesh 2025 | Startech</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <StartechNav />
      </div>
      <div className="mx-auto my-10 max-w-[1350px] bg-gray-100 p-4">
        <div className="bg-white">
          <h1 className="text-[20px] font-bold">
            Mobile Phone Price in Bangladesh
          </h1>
          <p className="my-2 text-[13px]">
            Mobile Phone Price starts from BDT 1,044 in Bangladesh and depending
            on the brand and features up to BDT 300,000 can be the price of a
            mobile phone. You can get the latest feature phones, budget
            smartphones, and high-configuration gaming mobile phones at Star
            Tech. Check below and Order yours now!
          </p>
          <div>
            <button
              onClick={() => handleBrandFilter("")}
              className="mx-1 my-1 rounded-3xl bg-white px-4 text-black ring-1 ring-gray-500 hover:bg-blue-700 hover:text-white hover:ring-blue-700">
              ALL
            </button>
            {[...new Set(allImobile.map((item) => item.brand))].map((brand) => (
              <button
                onClick={() => handleBrandFilter(brand)}
                key={brand}
                className="mx-1 my-1 rounded-3xl bg-white px-4 text-black ring-1 ring-gray-500 hover:bg-blue-700 hover:text-white hover:ring-blue-700">
                {brand}
              </button>
            ))}
          </div>
        </div>
        <section className="flex">
          <div className="w-[280px] bg-white">
            <div>
              <h1>Filter Section</h1>
            </div>

            <div className=" ">
              <div className="mb-2">
                <h2
                  onClick={toggleDropdown}
                  className="gap-4 bg-gray-200 text-2xl font-bold">
                  Brand {isOpen ? "▲" : "▼"}
                </h2>
                {isOpen && (
                  <div>
                    {[...new Set(allImobile.map((item) => item.brand))].map(
                      (brand) => (
                        <ul
                          onClick={() => handleBrandFilter(brand)}
                          key={brand}>
                          <li>
                            <input
                              type="checkbox"
                              name={brand}
                              id={brand}
                              value={brand}
                            />
                            <label htmlFor={brand}>{brand}</label>
                          </li>
                        </ul>
                      )
                    )}
                  </div>
                )}
              </div>
              <div>
                <h2
                  onClick={toggleDrop}
                  className="gap-4 bg-gray-200 text-2xl font-bold">
                  Model {open ? "▲" : "▼"}
                </h2>
                {open && (
                  <div>
                    {allImobile.map((item) => (
                      <ul key={item.id}>
                        <li>
                          <input
                            type="checkbox"
                            name={item.brand}
                            id={item.brand}
                            value={item.brand}
                          />
                          <label htmlFor={item.brand}>{item.model}</label>
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h2 className="text-[20px] font-bold">Mobile Phone</h2>
              <div className="text-cneter flex gap-2">
                <label htmlFor="number">Show:</label>
                <select
                  className="w-[64px] rounded-md bg-slate-100"
                  id="number">
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <label htmlFor="number">Sort By:</label>
                <select
                  className="w-[100px] rounded-md bg-slate-100"
                  id="number">
                  <option value="">Default</option>
                  <option value="100">Price (Low to High)</option>
                  <option value="40000">Price (High to Low)</option>
                </select>
              </div>
            </div>
            {/* main Section  */}
            <div className="grid gap-2 px-2 md:grid-cols-3 xl:w-[1040px] xl:grid-cols-4">
              {mobile.map((item) => (
                <div key={item.id} className="mb-2 w-[250px] bg-white">
                  <div className="flex h-[245px] w-[245px] items-center justify-center">
                    <img
                      onClick={() => navigate(`/mobile/${item.id}`)}
                      className="h-[200px] w-[200px] cursor-pointer bg-gray-400"
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                  <h2
                    onClick={() => navigate(`/mobile/${item.id}`)}
                    className="cursor-pointer px-2 py-3 text-[14px] font-bold hover:text-red-600 hover:underline">
                    {item.title}
                  </h2>
                  <div className="h-[210px] w-full pl-4 text-[13px]">
                    <ul className="list-disc pl-5">
                      <li className="mb-[10px]">
                        <span>Display:</span> {item.display}
                      </li>
                      <li className="mb-[10px]">
                        <span>Processor:</span> {item.processor}
                      </li>
                      <li className="mb-[10px]">
                        <span>Camera:</span> {item.camera}
                      </li>
                      <li className="mb-[10px]">
                        <span>Features:</span> {item.feature}
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="py-2 text-center text-[17px] font-bold text-red-600">
                    <span className=""> {item.price} $</span>
                  </div>
                  <div className="mb-2">
                    <button className="mb-2 w-full rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
                      Add to Cart
                    </button>
                    <button className="mb-2 w-full rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
                      Add to Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default StartechShop;
