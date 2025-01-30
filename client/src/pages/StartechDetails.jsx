import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StartechNav from "../components/StartechNav";
import Clock from "../components/OfferTime";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const StartechDetails = ({ setProgress }) => {
  StartechDetails.propTypes = {
    setProgress: PropTypes.func.isRequired,
  };
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const closingTime = "2025-02-20T00:00:00";

  useEffect(() => {
    setProgress(30);
    const fetchItem = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`http://localhost:8001/mobile/${id}`);
        setItem(response.data);
        setProgress(100);
      } catch (err) {
        setError(`Failed to fetch Mobile: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    //recent view item
    const getRecentlyViewedProducts = () => {
      const recentlyViewed = JSON.parse(
        localStorage.getItem("recentlyViewed")
      ) || [id];
      setItem((prevItem) => ({
        ...prevItem,
        recentlyViewed,
      }));
    };
    getRecentlyViewedProducts();
    fetchItem();
  }, [id]);

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

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{item.title.toString()} | Startech.com.bd</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <StartechNav />
      <div className="container mx-auto p-4">
        <div className="mx-auto flex h-[80vh] w-[1200px] gap-4 rounded-lg bg-white p-6 shadow-md">
          <div>
            <img
              className="h-[400px] w-[400px] bg-blue-100"
              alt={item.title}
              src={item.image}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="py-4 text-2xl font-bold">{item.title}</h1>
            <ul className="my-2 flex flex-wrap gap-2">
              <li className="rounded-2xl bg-gray-100 px-4 py-1 text-gray-500">
                Price:
                <span className="font-semibold text-black">{item.price}$</span>
              </li>
              <li className="rounded-2xl bg-gray-100 px-4 py-1 text-gray-500">
                Regular Price:
                <span className="font-semibold text-black">
                  {item.regularPrice}$
                </span>
              </li>
              <li className="rounded-2xl bg-gray-100 px-4 py-1 text-gray-500">
                Status:
                <span className="font-semibold text-black">{item.status}</span>
              </li>
              <li className="rounded-2xl bg-gray-100 px-4 py-1 text-gray-500">
                Product Code:
                <span className="font-semibold text-black">
                  {item.productCode}
                </span>
              </li>
              <li className="rounded-2xl bg-gray-100 px-4 py-1 text-gray-500">
                Brand:
                <span className="font-semibold text-black">
                  {item.brand.toUpperCase()}
                </span>
              </li>
            </ul>
            <div>
              <h3 className="py-2 text-2xl font-semibold">Key Features</h3>
              <ul className="space-y-2">
                <li className="text-lg font-medium text-gray-950">
                  <span>Model:</span> {item.model}
                </li>
                <li className="text-lg font-medium text-gray-950">
                  <span>Display:</span> {item.display}
                </li>
                <li className="text-lg font-medium text-gray-950">
                  <span>Processor:</span> {item.processor}
                </li>
                <li className="text-lg font-medium text-gray-950">
                  <span>Camera:</span> {item.camera}
                </li>
                <li className="text-lg font-medium text-gray-950">
                  <span>Feature:</span> {item.feature}
                </li>
                <li>
                  <a
                    className="scroll-smooth py-2 text-xl text-red-600 underline"
                    href="#feature">
                    View More Info
                  </a>
                </li>
              </ul>
              {/* Clock Section  */}
              <Clock closingTime={closingTime} />
              <div className="mt-4">
                <span className="text-lg font-medium text-gray-950">
                  Color:
                </span>
                <div className="mt-2 flex gap-2">
                  {item.color.map((color, index) => (
                    <button
                      className="border border-emerald-500 px-4 py-1"
                      key={index}>
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Details Section  */}
      <div className="mx-auto mt-8 flex max-w-[1280px]">
        <section className="mx-auto max-w-[990px]">
          {/* Button Section  */}
          <div className="my-4 flex items-center justify-start gap-4">
            <button className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-red-600 hover:text-white">
              Specification
            </button>
            <button className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-red-600 hover:text-white">
              Description
            </button>
            <button className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-red-600 hover:text-white">
              Question (0)
            </button>
            <button className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-red-600 hover:text-white">
              Review (0)
            </button>
          </div>
          {/* Specification Section  */}
          <div id="feature" className="w-[990px] bg-gray-100 p-[20px]">
            <p className="text-xl font-bold">Specification</p>
            <table className="table-layout-fixed mt-4 w-full table-auto">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="bg-blue-400 px-4 text-left text-[16px] font-bold text-black">
                    Display
                  </th>
                </tr>
              </thead>
              {item.Display.map((display, index) => (
                <tbody key={index}>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Size</td>
                    <td className="border px-4 py-2">{display.size}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Type</td>
                    <td className="border px-4 py-2">{display.type}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Refresh Rate
                    </td>
                    <td className="border px-4 py-2">{display.refreshRate}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Brightness
                    </td>
                    <td className="border px-4 py-2">{display.brightness}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Protection
                    </td>
                    <td className="border px-4 py-2">{display.protection}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Features</td>
                    <td className="border px-4 py-2">
                      <ul className=" ">
                        {display.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <table className="table-layout-fixed mt-4 w-full table-auto">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="bg-blue-400 px-4 text-left text-[16px] font-bold text-black">
                    Processor
                  </th>
                </tr>
              </thead>
              {item.Processor.map((processor, index) => (
                <tbody key={index}>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Processor
                    </td>
                    <td className="border px-4 py-2">{processor.processor}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Fabrication
                    </td>
                    <td className="border px-4 py-2">
                      {processor.fabrication}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">CPU</td>
                    <td className="border px-4 py-2">{processor.CPU}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">GPU</td>
                    <td className="border px-4 py-2">{processor.GPU}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Modem</td>
                    <td className="border px-4 py-2">{processor.AI}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </section>
        <section className="w-full">
          <div className="bg-gray-300 px-4 py-2">
            <button className="w-full text-2xl font-bold">
              Related Product
            </button>
          </div>
          <div className="mt-4">
            {item.relatedProducts &&
              item.relatedProducts.map((relatedProduct, index) => (
                <div
                  key={index}
                  className="mb-4 flex items-center gap-4 rounded-lg bg-white p-4 shadow-md">
                  <img
                    className="h-24 w-24 object-cover"
                    alt={relatedProduct.title}
                    src={relatedProduct.image}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-500">
                      Price: {relatedProduct.price}$
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {item.warranty.map((warranty, index) => (
            <div key={index} className="mt-2">
              <p>
                <strong>Warranty:</strong> {warranty.warranty}
              </p>
            </div>
          ))}
        </section>
      </div>
      <div className="mx-auto my-2 max-w-[1280px] text-center">
        <button
          onClick={() => window.history.back()}
          className="rounded bg-blue-500 px-32 py-2 text-center font-bold text-white hover:bg-blue-700">
          Go To Back Page
        </button>
      </div>
      <div className="mx-auto my-2 max-w-[1280px] text-center">
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-blue-500 px-32 py-2 text-center font-bold text-white hover:bg-blue-700">
          Refresh Page
        </button>
      </div>
      <div className="mx-auto my-2 max-w-[1280px] text-center">
        <div>Recent Browser History Length: {window.history.length - 1}</div>
      </div>
      <div>
        {/* Recent View Section */}
        <div className="mx-auto mt-8 max-w-[1280px]">
          <h2 className="text-2xl font-bold">Recently Viewed</h2>
          <div className="mt-4 flex gap-4 overflow-x-auto">
            {Array.isArray(item.recentlyViewed) &&
              item.recentlyViewed.map((recentItem, index) => (
                <div
                  key={index}
                  className="w-64 flex-shrink-0 rounded-lg bg-white p-4 shadow-md">
                  <img
                    className="h-32 w-full object-cover"
                    alt={recentItem.title}
                    src={recentItem.image}
                  />
                  <h3 className="mt-2 text-lg font-semibold">
                    Title: {recentItem.title}
                  </h3>
                  <p className="text-gray-500">Price: {recentItem.price}$</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartechDetails;
