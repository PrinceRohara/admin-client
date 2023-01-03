import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./config.scss";
import Navigation from "./Miscellaneous/Navigation/Navigation";
import Pages from "./Miscellaneous/Pages/Pages";
import ServiceTypes from "./Service/ServiceTypes";

const Configuration = () => {
  return (
    <div className="single bg-[#F1F6F6]">
      <Sidebar />
      <div className="singleContainer">
        <div className="">
          <h1 className="mt-12 ml-4 text-3xl mb-4">Configuration</h1>
          <hr />
          <div className="flex m-4">
            <p className="text-lg ml-2 mr-16">Attributes and Service Types</p>
            <ServiceTypes />
          </div>
          <hr />
          <div className="flex m-4">
            <p className="text-lg ml-2 mr-16">Miscellaneous</p>
            <Navigation />
            <Pages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
