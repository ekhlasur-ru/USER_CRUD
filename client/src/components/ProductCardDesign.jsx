import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [imageLoading, setImageLoading] = useState(true); // Add image loading state

  return (
    <div className="mx-2 min-w-80 transform rounded-lg bg-white shadow-lg transition-transform hover:shadow-2xl">
      <div className="pb-2/3 relative">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <FaSpinner className="animate-spin text-gray-500" />
          </div>
        )}
        <img
          className={`h-[350px] w-[300px] rounded-t-lg ${imageLoading ? "hidden" : "block"}`}
          src={product.image}
          alt={product.title}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-montserrat mb-2 text-xl font-bold text-gray-800">
          {product.title.slice(0, 20) + ".."}
        </div>
        <p className="text-base text-gray-600">
          {product.description.slice(0, 80) + "..."}
        </p>
        <div className="mt-4">
          <span className="font-semibold text-gray-800">Price: </span>
          <span className="text-gray-800">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const ProductCardDesign = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const scrollLeftButtonRef = useRef(null);
  const scrollRightButtonRef = useRef(null);

  useEffect(() => {
    // Fetch the product data from FakeStoreAPI using Axios
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

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

  const handleMouseEnter = () => {
    if (scrollLeftButtonRef.current) {
      scrollLeftButtonRef.current.style.display = "block";
    }
    if (scrollRightButtonRef.current) {
      scrollRightButtonRef.current.style.display = "block";
    }
  };

  const handleMouseLeave = () => {
    if (scrollLeftButtonRef.current) {
      scrollLeftButtonRef.current.style.display = "none";
    }
    if (scrollRightButtonRef.current) {
      scrollRightButtonRef.current.style.display = "none";
    }
  };

  return (
    <>
      <div>
        <h1 className="mt-4 bg-black text-center text-4xl font-bold text-white">
          Feature Product-2025
        </h1>
      </div>
      <div
        className="relative mx-4 flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <button
          ref={scrollLeftButtonRef}
          className="top-50 absolute left-0 z-50 rounded-full bg-gray-200 p-1 text-4xl text-gray-700 hover:text-black"
          style={{ display: "none" }}
          onClick={scrollLeft}>
          <FaAngleLeft />
        </button>
        <div
          ref={scrollContainerRef}
          className="scroll-container hover:scrollbar-hide group flex w-full overflow-x-auto">
          {loading ? (
            <div className="flex w-full justify-center py-6 text-2xl text-gray-700">
              Loading...
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        <button
          ref={scrollRightButtonRef}
          className="top-50 absolute right-0 z-50 rounded-full bg-gray-200 p-1 text-4xl text-gray-700 hover:text-black"
          style={{ display: "none" }}
          onClick={scrollRight}>
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default ProductCardDesign;
