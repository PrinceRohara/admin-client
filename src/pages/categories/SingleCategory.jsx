import React from "react";
import SingleCategoryForm from "./SingleCategoryForm";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const SingleCategory = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]">
        <Navbar />
        {/* <div className="">
      <h1 className="mt-8 ml-4 text-3xl mb-4">Bookings</h1>
    </div> */}
        <SingleCategoryForm />
      </div>
    </div>
  );
};

export default SingleCategory;
