import React from "react";
import { Navbar } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import StuffPopUp from "./StuffPopUp";

const CreateNewStuff = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Add Stylist</h1>
        <StuffPopUp/>
      </div>
    </div>
  );
};

export default CreateNewStuff;
