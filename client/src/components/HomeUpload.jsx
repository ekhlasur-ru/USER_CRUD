import React, { useState } from "react";
import axios from "axios";
// import {useNavigate} from 'react-router-dom'

function Home() {
  // const navigate = useNavigate();
  const [file, setFile] = useState();
  const upload = () => {
    const formData = new FormData();
    formData.append("profileImage", file);
    axios
      .post("/upload", formData)
      .then((res) => res.redirect('/'))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="h-screen dark:bg-blue-300 dark:text-white">
        <h1 className="pt-36 text-center text-4xl font-bold">
          Hello Home Page
        </h1>
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button type="button" onClick={upload}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
