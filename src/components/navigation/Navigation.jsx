import React from "react";
import "./navigation.scss";
import Sidebar from "../sidebar/Sidebar";
import Navigationpanel from "./Navigationpanel";

const Navigation = () => {
  return (
    <div className="single bg-[#F1F6F6]">
      <Sidebar />
      <div className="singleContainer m-8">
        <div className="flex ">
          <div className="mr-12">
            {" "}
            <h1 className="text-2xl">Navigation </h1>
          </div>
          {/* <div className="ml-64">
            <button className="bg-orange-500 p-2  text-white rounded font-bold">
              Create Menu
            </button>
          </div> */}
        </div>
        {/* <div className="bg-white p-4 m-4 rounded-md ">
          <input type="checkbox" placeholder="name" name="Menu" />{" "}
          <label className="m-2 text-lg" htmlFor="">
            Menu Title
          </label>
        </div> */}
        <Navigationpanel />
      </div>
    </div>
  );
};

export default Navigation;
