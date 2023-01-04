import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
const ServiceTypes = () => {
  return (
    <Link to="/product-types">
      <div
        
        className="ml-4 bg-white p-4 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
      >
        <h4 className="text-orange-600 font-bold text-2xl ">
          {" "}
          <LocalShippingSharpIcon className="text-2xl " />
          Service types
        </h4>
        <p className="text-black">Define types of services of sell types</p>
      </div>
    </Link>
  );
};

export default ServiceTypes;
