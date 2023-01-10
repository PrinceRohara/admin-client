import React from "react";
import OwnerDetailsForm from "./OwnerDetailsForm";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { BackButton } from "../../components/backbutton/BackButton";
const OwnerDetails = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer bg-[#F1F6F6]">
        <Navbar />
        <BackButton name="OWNERS" />
        <h1 className="text-2xl p-1 m-2 mt-4">Owner Details</h1>
        <OwnerDetailsForm />
      </div>
    </div>
  );
};

export default OwnerDetails;
