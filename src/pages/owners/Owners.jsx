import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import BookingComponent from "../bookings/Booking.component";
import OwnerList from "./OwnerList.component";
const Owners = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <Navbar />
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-4 ">Owners</h1>
          <Link to="new">
            <button className="bg-orange-600 text-semibold pt-[4px] pb-[4px] pr-4 pl-4  h-8 rounded text-white float-right ">
              Create Owner
            </button>
          </Link>
        </div>

        <OwnerList />
      </div>
    </div>
  );
};

export default Owners;
