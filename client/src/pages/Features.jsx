import React, { useState } from "react";
import axios from "axios";
import ProfilePage from "../components/ProfilePage";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3005/api/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile created successfully");
    } catch (error) {
      console.error("There was an error creating the profile!", error);
    }
  };

  return (
    <>
      <div>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
          <form
            className="mb-4 w-full max-w-lg rounded bg-white px-8 pb-8 pt-6 shadow-md dark:bg-gray-900"
            onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">
                Name:
                <input
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:text-gray-300"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">
                Address:
                <input
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:text-gray-300"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">
                Profile Image:
                <input
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:text-gray-300"
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </label>
              {imagePreview && (
                <div className="mt-4">
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Image Preview:
                  </p>
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="h-auto max-w-full rounded border border-gray-300 dark:border-gray-700"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="submit">
                Create Profile
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="h-screen">
            <ProfilePage />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
