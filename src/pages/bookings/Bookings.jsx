import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "./Booking.component";
const Bookings = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-4">Bookings</h1>
        </div>
       
        <BookingComponent />
      </div>
    </div>
  );
};

export default Bookings;
