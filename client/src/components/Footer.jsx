import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer  dark:bg-gray-900 relative bg-blue-500 p-2">
        <div className="text-md container mx-auto flex  flex-row  text-center text-white md:flex-row md:justify-between xl:flex-row xl:justify-between">
          <div className="footer_items">
            <h3 className="mb-3 mt-10 text-2xl font-bold">Protfolio</h3>
            <ul>
              <li className="p-2">
                <a href="">Download CV</a>
              </li>
              <li className="p-2">
                <a href="">Work Video</a>
              </li>
              <li className="p-2">
                <a href="">Companoes</a>
              </li>
              <li className="p-2">
                <a href="">Successfull Project</a>
              </li>
            </ul>
          </div>
          <div className="footer_items">
            <h3 className="mb-3 mt-10 text-2xl font-bold">Pages</h3>
            <ul>
              <li className="p-2">
                <a href="">Home</a>
              </li>
              <li className="p-2">
                <a href="">About</a>
              </li>
              <li className="p-2">
                <a href="">Protfolio</a>
              </li>
              <li className="p-2">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_items">
            <h3 className="mb-3 mt-10 text-2xl font-bold">Folow Me</h3>
            <ul>
              <li className="p-2">
                <a href="">facebook</a>
              </li>
              <li className="p-2">
                <a href="">twitter</a>
              </li>
              <li className="p-2">
                <a href="">Instragram</a>
              </li>
              <li className="p-2">
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="border-t p-2 text-center text-lg text-white">
            © All Rights Reserved 2019 - 2024 | CRUD.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
