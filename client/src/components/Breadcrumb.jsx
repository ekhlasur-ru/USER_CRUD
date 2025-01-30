import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaHome } from "react-icons/fa";

import PropTypes from "prop-types";

const Breadcrumb = ({ path }) => {
  const pathArray = path.split("/").filter((p) => p);

  return (
    <nav className="breadcrumb ml-14 flex items-center bg-gray-100 text-red-600">
      <span>
        <Link to="/">
          <FaHome />
        </Link>
      </span>

      {pathArray.map((crumb, index) => {
        const to = `/${pathArray.slice(0, index + 1).join("/")}`;
        return (
          <span key={to} className="breadcrumb-item">
            {index < pathArray.length - 1 ? (
              <div className="ml-4 flex items-center">
                <Link to={to}>{crumb} </Link>
                <span className="mx-1">
                  /{/* <FaAngleRight className="ml-1" /> */}
                </span>
              </div>
            ) : (
              <span>{crumb}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

Breadcrumb.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Breadcrumb;
