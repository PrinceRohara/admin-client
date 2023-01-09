import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
import { Link } from "react-router-dom";
import StuffPopUp from "./StuffPopUp";
import StuffComponent from "./stuff.component";
const Stuff = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]">
        <Navbar />

        <StuffComponent />
      </div>
    </div>
  );
};

export default Stuff;
