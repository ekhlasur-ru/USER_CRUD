import React, { useEffect, useState } from "react";

function Resources() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setLoading(true);
      setTimeout(() => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
        setLoading(false);
      }, 1000); // Simulate loading time
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, visibleProducts).map((item) => (
          <div
            className="transform overflow-hidden rounded-lg border shadow-lg transition duration-500 hover:scale-105"
            key={item.id}>
            <img
              className="h-64 w-full bg-white object-contain py-4"
              src={item.image}
              alt={item.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-sm text-gray-500">
                {item.description.slice(0, 60) + "..."}
              </p>
              <button className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="mt-4 flex justify-center">
          <button
            className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white"
            disabled>
            <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
}

export default Resources;
