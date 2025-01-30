import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

const CrudComponent = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`http://localhost:5000/products/${form.id}`, form);
    } else {
      await axios.post("http://localhost:5000/products", form);
    }
    fetchProducts();
    setForm({ id: "", name: "", description: "", price: "", category: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
    );
  });

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">CRUD Component</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="mb-2 rounded border border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="mb-2 rounded border border-gray-300 p-2"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="mb-2 rounded border border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="mb-2 rounded border border-gray-300 p-2"
          required
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Save
        </button>
      </form>

      <div className="relative mx-auto mb-4 flex w-[600px] items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-2 w-full rounded border border-gray-300 p-2 pl-10"
        />
        <IoSearch className="absolute left-2 top-2 h-6 w-6 bg-slate-100 text-gray-400 hover:text-gray-600" />
        <RxCross2
          onClick={() => setSearchTerm("")}
          className="absolute right-2 top-2 h-6 w-6 bg-slate-100 text-gray-400 hover:text-gray-600"
        />
      </div>

      <div className="my-2 flex justify-center">
        <button
          onClick={() => handleCategoryFilter("")}
          className="mr-2 rounded bg-gray-200 px-2 py-1 text-black hover:bg-gray-300">
          All
        </button>
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className="mr-2 rounded text-nowrap bg-gray-200 px-2 py-1 text-black hover:bg-gray-300">
              {category}
            </button>
          )
        )}
      </div>

      <div className="mb-4">
        <h2 className="mb-2 font-semibold">Filter by Price Range</h2>
        <div className="flex space-x-2">
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
            placeholder="Min"
            className="rounded border border-gray-300 p-2"
          />
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
            placeholder="Max"
            className="rounded border border-gray-300 p-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-lg bg-white p-4 shadow-md">
            <img
              src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"
              alt={product.name}
              className="mb-4 h-64 w-full rounded-t-lg object-cover grayscale-[80%] hover:grayscale-0"
            />

            <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
            <p className="mb-2 text-gray-600">{product.description}</p>
            <p className="font-bold text-blue-500">${product.price}</p>
            <p className="mb-4 text-gray-600">{product.category}</p>
            <button
              onClick={() => handleEdit(product)}
              className="mr-2 rounded bg-yellow-500 px-2 py-1 font-bold text-white hover:bg-yellow-700">
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="mr-2 rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700">
              Delete
            </button>
            <Link
              to={`/product/${product.id}`}
              className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudComponent;
