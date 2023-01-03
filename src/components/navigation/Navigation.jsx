import React from "react";
import "./navigation.scss";
import Sidebar from "../sidebar/Sidebar";

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
          <div className="ml-16">
            <button className="bg-orange-500 p-2  text-white rounded font-bold">
              Create Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
