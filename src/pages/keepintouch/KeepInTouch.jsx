import React, { useEffect, useState } from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingComponent from "../bookings/Booking.component";
// import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../../components/navbar/Navbar";

import axios from "axios";
const KeepInTouch = () => {
  const [keepinTouchData, setKeepinTouchData] = useState([]);

  const fetchApi = () => {
    return axios
      .get("http://3.111.54.115:3000/api/backend/KeepInTouch")
      .then((response) => setKeepinTouchData(response.data.shops))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const data = [
    "govind@gmail.com",
    "abcd@gmail.com",
    "bruce@gmail.com",
    "jack@gmail.com",
    "arman.kamra15@gmail.com",
    "arman.kamra15@gmail.com",
  ];

  console.log(keepinTouchData);
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
            {keepinTouchData.map((el) => (
              <ul className="my-4 ">
                <li className="my-2" key={el.id}>
                  {el.email}
                </li>
                <hr />
              </ul>
            ))}
            {/* {keepinTouchData.map((el) => (
              <>
                {console.log(el)}
                <ul className="p-2  ">
                  <li className="mt-2 mb-2 " key={el.id}>
                    {el.email}
                  </li>
                  <hr />
                </ul>
              </>
            ))} */}
          </div>
        </div>

        {/* <DataGrid className="datagrid" rows={data} /> */}
        {/* <BookingComponent /> */}
      </div>
    </div>
  );
};

export default KeepInTouch;
