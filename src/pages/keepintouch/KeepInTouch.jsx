import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
// import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../../components/navbar/Navbar";
const KeepInTouch = () => {
  const data = [
    "govind@gmail.com",
    "abcd@gmail.com",
    "bruce@gmail.com",
    "jack@gmail.com",
    "arman.kamra15@gmail.com",
    "arman.kamra15@gmail.com",
  ];

  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <Navbar />
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-8">Keep In Touch</h1>
        </div>

        <div className="p-4 m-4  rounded ">
          <div className="p-2 m-2">
            <h4>Email</h4>
            <hr />
            {data.map((d) => (
              <ul className="p-2  ">
                <li className="mt-2 mb-2 ">{d}</li>
                <hr />
              </ul>
            ))}
          </div>
        </div>

        {/* <DataGrid className="datagrid" rows={data} /> */}
        {/* <BookingComponent /> */}
      </div>
    </div>
  );
};

export default KeepInTouch;
