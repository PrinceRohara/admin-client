import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
const Stylist = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <Navbar />
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-4">Stylist</h1>
          <button className="bg-orange-600 pt-1 pb-1 pr-2 pl-2  h-12 rounded text-white ml-[70rem] ">
            ADD STYLIST
          </button>
        </div>

        <BookingComponent />
      </div>
    </div>
  );
};

export default Stylist;
