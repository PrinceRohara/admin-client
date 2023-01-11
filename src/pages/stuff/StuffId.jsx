import React from "react";
import { BackButton } from "../../components/backbutton/BackButton";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SingleStuffId from "./SingleStuffId";

const StuffId = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer bg-[#F1F6F6]">
        <Navbar />
        <BackButton name="STUFF MEMBERS" />
        <SingleStuffId />
      </div>
    </div>
  );
};
export default StuffId;
