import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
import { Link } from "react-router-dom";
import StylistList from "./StylistList.component";
const Stylist = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 bg-[#F1F6F6]">
        <Navbar />
        <div className="flex my-8">
          <h1 className="mt-8 ml-4 text-3xl ">Stylist</h1>
          <Link to="new">
            <button className="bg-orange-600 p-2 font-bold h-12 rounded text-white ml-[60rem] mb-2">
              ADD STYLIST
            </button>
          </Link>
        </div>

        <StylistList />
      </div>
    </div>
  );
};

export default Stylist;
