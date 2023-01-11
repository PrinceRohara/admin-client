import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ServicesList from "./ServicesList";
import Button from "@mui/material/Button";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { BackButton } from "../../components/backbutton/BackButton";
const Services = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="single ">
      <Sidebar />
      <div
        className={`"singleContainer p-4 ml-4 mr-4 w-full " ${
          darkMode ? "bg-[#1D1E1F]" : "bg-[#F1F6F6]"
        }`}
      >
        <Navbar />
       

        <ServicesList />
      </div>
    </div>
  );
};

export default Services;
