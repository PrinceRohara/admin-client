import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./config.scss";
import Navigation from "./Miscellaneous/Navigation/Navigation";
import Pages from "./Miscellaneous/Pages/Pages";
import ServiceTypes from "./Service/ServiceTypes";

// bg-[#F1F6F6]

const Configuration = () => {
  return (
    <>
      <div className="single ">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
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
    </>
  );
};

export default Configuration;
