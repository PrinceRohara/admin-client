import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TaxForm from "./TaxForm";
import { BackButton } from "../../components/backbutton/BackButton";

const TaxId = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]">
        <Navbar />
        <BackButton name="TAX" />
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-4">Update Tax</h1>
        </div>

        <TaxForm />
      </div>
    </div>
  );
};

export default TaxId;
