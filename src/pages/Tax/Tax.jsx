import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
import TaxList from "./TaxList";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Tax = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4 ">
        <Navbar />
        <div className="my-8 ">
          <h1 className="mt-8 ml-4 text-3xl mb-4">Tax</h1>
          <div className="float-right m-1 ">
            <Link to="add">
              <Button variant="contained" color="error">
                Create Tax
              </Button>
            </Link>
          </div>
        </div>

        <TaxList />
      </div>
    </div>
  );
};

export default Tax;
