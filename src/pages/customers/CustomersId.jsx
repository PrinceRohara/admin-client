import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SingleCustomer from "./SingleCustomer";
const CustomersId = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]">
        <Navbar />
        {/* <div className="">
        <h1 className="mt-8 ml-4 text-3xl mb-4">Bookings</h1>
      </div> */}

        <SingleCustomer />
      </div>
    </div>
  );
};

export default CustomersId;
