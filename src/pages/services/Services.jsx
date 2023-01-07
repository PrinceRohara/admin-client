import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ServicesList from "./ServicesList";
import Button from "@mui/material/Button";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Services = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="single ">
      <Sidebar />
      <div
        className={`"singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]" ${
          darkMode ? "bg-[#1D1E1F]" : "bg-[#F1F6F6]"
        }`}
      >
        <Navbar />
        {/* <div className="">
        <h1 className="mt-8 ml-4 text-3xl mb-4">Bookings</h1>
      </div> */}{" "}
        <ServicesList />
      </div>
    </div>
  );
};

export default Services;
