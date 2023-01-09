import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import ServiceForm from "./ServiceForm";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import TextField from "@mui/material/TextField";
const AddService = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="single ">
      <Sidebar />
      <div
        className={`singleContainer p-4 ml-4 mr-4 ${
          darkMode ? "bg-[#1D1E1F]" : "bg-[#F1F6F6]"
        }`}
      >
        <Navbar />
        {/* <div className="">
      <h1 className="mt-8 ml-4 text-3xl mb-4">Bookings</h1>
    </div> */}{" "}
        <div className="my-4 p-4">
          <h1>Create Service Type</h1>{" "}
          <div className="my-2 p-4 w-[70%] bg-white rounded-md">
            <h2 className="text-xl my-2 font-semibold">General Information</h2>
            <hr />
            <div className="my-2">
              <TextField
                className="w-full"
                id="outlined-basic"
                label="Service type Name"
                variant="outlined"
              />
            </div>
          </div>
          <div className=" p-4 w-[70%] my-8 bg-white rounded-md">
            <h2 className="text-xl my-2 font-semibold">Taxes</h2>
            <hr />
            <div className="my-2">
              <TextField
                className="w-full"
                id="outlined-basic"
                label="Taxes"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
