import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Products } from "./Product.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="mx-2 min-w-80 transform rounded-lg bg-white shadow-lg transition-transform hover:shadow-2xl">
      <div className="pb-2/3 relative">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-montserrat mb-2 text-xl font-bold text-gray-800">
          {product.title}
        </div>
        <p className="text-base text-gray-600">{product.description}</p>
        <div className="mt-4">
          <span className="font-semibold text-gray-800">Price: </span>
          <span className="text-gray-800">{product.price}</span>
        </div>
        <div>
          <span className="text-gray-500 line-through">
            {product.discounted_price}
          </span>
        </div>
      </div>
      <div className="px-6 pb-2 pt-4">
        {product.variants.map((variant, index) => (
          <span
            key={index}
            className="mb-2 mr-2 inline-block rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-700">
            {variant.color} - {variant.size}
          </span>
        ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discounted_price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
      })
    ).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const ProductList = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mx-8 flex items-center">
      <button
        className="top-50 absolute left-0 z-50 p-2 text-4xl text-gray-700 hover:scale-110"
        onClick={scrollLeft}>
        <FaAngleLeft />
      </button>
      <div
        ref={scrollContainerRef}
        className="scroll-container scrollbar-hide flex w-full overflow-x-auto">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        className="top-50 absolute right-0 z-50 p-2 text-4xl text-gray-700 hover:scale-110"
        onClick={scrollRight}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ProductList;
