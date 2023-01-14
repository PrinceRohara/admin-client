import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./single.css";
import TimeLine from "./TimeLine";
import TimeLineBooking from "./TimeLine";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const SingleBooking = (props) => {
  const [data, setData] = useState([]);

  const [customer, setCustomer] = useState([]);
  const [error, setError] = useState(false);
  const [salon, setSalon] = useState([]);
  const [orderDetails, setorderDetails] = useState([]);

  function createData(
    name,
    calories,
    bookingdate,
    bookingslot,
    bookingotp,

    fat,
    carbs,
    protein
  ) {
    const date = new Date(bookingdate);
    return {
      name,
      calories,
      bookingdate,
      bookingslot,
      bookingotp,
      fat,
      carbs,
      protein,
    };
  }

  let { id } = useParams();

  const fetchApi1 = async (id) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://spaalon.harij.in/api/backend/CustomerOrderDetail/",
        data: {
          order_id: id,
        },
      });
      // setCustomer(response.data.customer);

      setorderDetails(response.data.order_detail);
      setCustomer(response.data.customer);
      setSalon(response.data.shop);
      // localStorage.setItem("alldata", JSON.stringify(data));
      // console.log(data.customer, "my data");
      // console.log("in single booking page", response.data);
    } catch (error) {
      // setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi1(id);
    console.log("useEffect run");
  }, []);
  // console.log(data.customer, "my data");
  // localStorage.setItem("alldata", JSON.stringify(data));

  console.log(salon, "sak");
  console.log(orderDetails, "order");

  // const items = JSON.parse(localStorage.getItem("alldata"));
  // console.log(items, "items");
  // const customerData = customer[0];
  // console.log(customer, customerData);
  // console.log(customer[0].last_name, "customer baby");
  const orderlist = orderDetails?.map((el) => {
    return el;
  });

  const rows = [
    createData(
      orderDetails[0]?.service,
      orderDetails[0]?.quantity,
      orderDetails[0]?.booking_date,
      orderDetails[0]?.booking_slot,
      orderDetails[0]?.booking_otp,

      orderDetails[0]?.unit_price_gross_amount,
      orderDetails[0]?.discount_amount,
      orderDetails[0]?.tax_rate,
      orderDetails[0]?.unit_price_net_amount
    ),
  ];
  return (
    <div className="p-2 m-1 mt-[-10px] ">
      {" "}
      <h1 className="text-2xl p-2 ml-2"> Ap24645646</h1>
      <span className="text-gray-400 p-2 ml-2">3 days ago</span>
      <div className="m-1 p-1">
        <div className="flex">
          <hr />
          <div className="w-[100%] p-2 rounded-md m-2 bg-white">
            <h2 className="text-2xl p-2 ">Details</h2>
            <hr />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Service</TableCell>
                    <TableCell align="right"> Quantity</TableCell>{" "}
                    <TableCell align="right"> Booking Date</TableCell>
                    <TableCell align="right"> Booking Slot</TableCell>
                    <TableCell align="right"> Booking OTP</TableCell>
                    <TableCell align="right">Gross Amount(₹)</TableCell>
                    <TableCell align="right">Discount</TableCell>
                    <TableCell align="right"> Tax</TableCell>
                    <TableCell align="right">
                      {" "}
                      Net Amount (incl tax)(₹)
                    </TableCell>{" "}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">
                        {new Date(row.bookingdate).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">{row.bookingslot}</TableCell>
                      <TableCell align="right">{row.bookingotp}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>{" "}
        <div className="flex  ">
          <div className="w-[70%]  p-4 m-2 mr-4 bg-white rounded-md">
            <h1 className="text-2xl p-2 ">salon</h1>
            <hr />
            <span className="text-black font-bold p-2 mb-2">
              {salon && salon[0]?.shop_name}
            </span>
            <address>{salon && salon[0]?.street_address_1}</address>
            <address>
              {salon &&
                `${salon[0]?.street_address_2}, ${salon[0]?.state},  ${salon[0]?.country}`}
            </address>
            {/* <address>{salon && salon[0]?.}</address> */}
          </div>{" "}
          <div className="w-[30%] p-2 m-2 bg-white rounded-xl">
            <h1 className="text-2xl mt-2  p-2 mb-2">Customer</h1>
            <hr />
            <span className="text-black">
              {customer &&
                `${customer[0]?.first_name} ${customer[0]?.last_name}`}
            </span>
            <br />
            <a href="" className="underline text-orange-500">
              {" "}
              <span className="text-orange-500 mt-2 mb-2">view Profile</span>
            </a>{" "}
            <br />
            <br />
            <span className=" mt-8 mb-2 font-bold text-black ">
              Contact Information
            </span>
            <br />
            <a href="" className=" text-orange-500">
              {" "}
              <span className="text-orange-500 underline mt-2 mb-2">
                {" "}
                {customer && customer[0]?.email}
              </span>{" "}
              <br />
              <span className=" mt-2 mb-2">
                {" "}
                {customer && customer[0]?.mobile}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
