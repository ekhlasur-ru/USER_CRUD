import React, { useState, useEffect } from "react";
import "../CustomeScrollbar/custom-scrollbar.css";

const CustomScrollbarComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="h-64 w-[400px] overflow-y-scroll bg-slate-100 p-4">
      {products.map((product) => (
        <div key={product.id} className="border-b border-gray-300 p-2">
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default CustomScrollbarComponent;
