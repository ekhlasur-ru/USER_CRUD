import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServerJsonDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
        <img
          src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"
          alt={product.name}
          className="mb-4 h-64 w-full rounded-t-lg object-cover"
        />
        {/* <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-t-lg mb-4" /> */}
        <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
        <p className="mb-2 text-gray-600">{product.description}</p>
        <p className="mb-2 text-lg font-bold text-blue-500">${product.price}</p>
        <p className="mb-4 text-gray-600">Category: {product.category}</p>
        <button
          onClick={() => window.history.back()}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Back
        </button>
      </div>
    </div>
  );
};

export default ServerJsonDetails;
