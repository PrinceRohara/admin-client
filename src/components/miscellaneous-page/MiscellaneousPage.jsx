import React from "react";
import "./mispage.scss";
import Sidebar from "../sidebar/Sidebar";

const MiscellaneousPage = () => {
  return (
    <div className="single bg-[#F1F6F6]">
      <Sidebar />
      <div className="singleContainer m-8">
        <div className="flex ">
          <div className="mr-12">
            {" "}
            <h1 className="text-2xl">Service Types </h1>
          </div>
          <div className="ml-16">
            <button className="bg-orange-500 p-2  text-white rounded font-bold">
              Create Service type
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousPage;
