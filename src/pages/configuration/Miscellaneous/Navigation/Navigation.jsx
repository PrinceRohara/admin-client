import React from "react";
import NavigationSharpIcon from "@mui/icons-material/NavigationSharp";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Link to="/navigation">
      <div className="ml-4 bg-white p-4 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
        {/* <FontAwesomeIcon icon="fa-regular fa-box" /> */}
        <h4 className="text-orange-600 font-bold text-2xl">
          <NavigationSharpIcon />
          Navigation
        </h4>
        <p className="text-black">
          Define how user can navigate throught your store
        </p>
      </div>
    </Link>
  );
};

export default Navigation;
