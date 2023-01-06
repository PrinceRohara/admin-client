import React from "react";
import OwnerForm from "./OwnerForm";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const OwnerNew = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Create Owners</h1>
        <OwnerForm />
      </div>
    </div>
  );
};

export default OwnerNew;
