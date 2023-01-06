import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
import { Link } from "react-router-dom";
import StuffPopUp from "./StuffPopUp";
const Stuff = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <Navbar />
        <div className="">
          <h1 className="mt-4 ml-4 text-3xl mb-4">Stuff</h1>

          {/* <Link to="new">
            <button className="bg-orange-600 pt-1 pb-1 pr-2 pl-2 font-bold h-12 rounded text-white ml-[60rem] mb-2">
              INVIATE STAFF MEMBERS
            </button>
          </Link> */}
        </div>{" "}
        <div className="mb-12">
          <StuffPopUp className="w-[100%]" />
        </div>
        <BookingComponent />
      </div>
    </div>
  );
};

export default Stuff;
