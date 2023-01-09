import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SingleStylistForm from "./SingleStylistForm";
import StylistForm from "./StylistForm";

const SingleStylist = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer bg-[#F1F6F6]">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Update Stylist</h1>
        <SingleStylistForm />
      </div>
    </div>
  );
};

export default SingleStylist;
