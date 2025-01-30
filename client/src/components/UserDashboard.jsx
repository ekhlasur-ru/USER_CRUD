import React, { useState, useEffect } from "react";
import axios from "axios";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({ name: user.name, address: user.address, image: user.image });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (id) => {
    axios
      .put(`/api/users/${id}`, formData)
      .then((response) => {
        setUsers(users.map((user) => (user.id === id ? response.data : user)));
        setEditingUser(null);
      })
      .catch((error) => {
        console.error("There was an error updating the user!", error);
      });
  };

  return (
    <div className="h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold">User Dashboard</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="rounded bg-white p-4 shadow">
            {editingUser === user.id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full rounded border p-2"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full rounded border p-2"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="w-full rounded border p-2"
                />
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="rounded bg-blue-500 px-4 py-2 text-white">
                  Update
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-600">{user.address}</p>
                </div>
                <button
                  onClick={() => handleEditClick(user)}
                  className="rounded bg-yellow-500 px-4 py-2 text-white">
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
