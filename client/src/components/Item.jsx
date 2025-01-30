import React, { useState } from "react";

const items = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item",
    price: 10.99,
  },
  {
    id: 2,
    name: "Item 2",
    description: "This aa is the second item",
    price: 12.99,
  },
  {
    id: 3,
    name: "Item 3",
    description: "This is the third item",
    price: 15.99,
  },
  {
    id: 4,
    name: "Item 4",
    description: "This is the fourth item",
    price: 9.99,
  },
  {
    id: 5,
    name: "Item 5",
    description: "This is the fifth item",
    price: 19.99,
  },
  {
    id: 6,
    name: "Item 6",
    description: "This is the sixth item",
    price: 29.99,
  },
  {
    id: 7,
    name: "Item 7",
    description: "This is the seventh item",
    price: 22.99,
  },
  {
    id: 8,
    name: "Item 8",
    description: "This is the eighth item",
    price: 18.99,
  },
  {
    id: 9,
    name: "Item 9",
    description: "This is the ninth item",
    price: 25.99,
  },
  {
    id: 10,
    name: "Item 10",
    description: "This is the tenth item",
    price: 14.99,
  },
  {
    id: 11,
    name: "Item 11",
    description: "This is the eleventh item",
    price: 11.99,
  },
  {
    id: 12,
    name: "Item 12",
    description: "This is the twelfth item",
    price: 13.99,
  },
  {
    id: 13,
    name: "Item 13",
    description: "This is the thirteenth item",
    price: 16.99,
  },
  {
    id: 14,
    name: "Item 14",
    description: "This is the fourteenth item",
    price: 17.99,
  },
  {
    id: 15,
    name: "Item 15",
    description: "This is the fifteenth item",
    price: 20.99,
  },
  {
    id: 16,
    name: "Item 16",
    description: "This is the sixteenth item",
    price: 21.99,
  },
];

const Item = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toString().includes(searchQuery.toString())
  );

  return (
    <div className="overflow-x-auto rounded-lg bg-white p-6 shadow-md">
      <h1 className="bg-indigo-300 text-center text-4xl font-semibold text-gray-800">
        Normal Search Filter Function
      </h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-4 w-full rounded-lg border border-gray-300 p-2"
      />
      <div className="mt-6 flex  space-x-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-lg w-60   bg-gray-100 p-4 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-800">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
