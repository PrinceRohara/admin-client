import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/navbar/Navbar";

const Pages = () => {
  return (
    <Link to="/pages">
      <div className="ml-4 bg-white p-4 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
        {/* <FontAwesomeIcon icon="fa-regular fa-box" /> */}
        <h4 className="text-orange-600 font-bold text-2xl">Pages</h4>
        <p className="text-black">
          Define how user can navigate throught your store
        </p>
      </div>
    </Link>
  );
};

export default Pages;
