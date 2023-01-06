import React from "react";
import { Navbar } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import StylistForm from "./StylistForm";

const StylistNew = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Create New Salon</h1>
        <StylistForm />
      </div>
    </div>
  );
};

export default StylistNew;
