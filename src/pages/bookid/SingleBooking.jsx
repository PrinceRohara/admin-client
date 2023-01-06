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
const SingleBooking = (props) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("Men's Haircut(Men)", 159, 6.0, 24, 4.0, 154.44)];
  return (
    <div className="p-2 m-2 ">
      <h1 className="text-2xl p-2 ml-2">{props.id} Ap24645646</h1>
      <span className="text-gray-400 p-2 ml-2">3 days ago</span>
      <div className="m-1 p-1">
        <div className="flex">
          <hr />
          <div className="w-[70%] p-2 rounded-md m-2 bg-white">
            <h2 className="text-2xl p-2 ">Details</h2>
            <hr />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Service</TableCell>
                    <TableCell align="right"> Quantity</TableCell>
                    <TableCell align="right">Base Price(₹)</TableCell>
                    <TableCell align="right">Discount</TableCell>
                    <TableCell align="right"> Tax</TableCell>
                    <TableCell align="right"> Total (incl tax)(₹)</TableCell>
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
          <div className="text-black p-4 m-4 bg-white rounded-md w-[30%]">
            <h2 className="text-2xl p-2 mb-2 ">Details</h2>
            <hr />
            <span className="text-black">
              Appointment Id <b>:5790730938</b>
            </span>
            <br />
            <span className="text-black">
              Booking Date <b>:04-01-2023</b>
            </span>
            <br />
            <span className="text-black">
              Booking Slot<b>:09:00</b>
            </span>
            <br />
            <span className="text-black">
              Booking Created At <b>:5790730938</b>
            </span>
            <br />
            <span className="text-black">
              Transaction Id <b>:5790730938</b>
            </span>
            <br />
            <span className="text-black">
              Booking OTP <b>:589298</b>
            </span>
          </div>
        </div>{" "}
        <div className="flex  ">
          <div className="w-[70%]  p-4 m-2 mr-4 bg-white rounded-md">
            <h1 className="text-2xl p-2 ">salon</h1>
            <hr />
            <span className="text-black font-bold p-2 mb-2">
              Cutting Edge Salon
            </span>
            <address>707, Sector 14 Gurgaon Gurgaon, 122022</address>
          </div>{" "}
          <div className="w-[30%] p-2 m-2 bg-white rounded-xl">
            <h1 className="text-2xl mt-2  p-2 mb-2">Customer</h1>
            <hr />
            <span>Govind Pant</span>
            <br />
            <a href="" className="underline text-orange-500">
              {" "}
              <span className="text-orange-500 mt-2 mb-2">view Profile</span>
            </a>{" "}
            <br />
            <br />
            <span className=" mt-8 mb-2 font-bold ">Contact Information</span>
            <br />
            <a href="" className="underline text-orange-500">
              {" "}
              <span className="text-orange-500 mt-2 mb-2">e@example.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex rounded ">
        <div className="w-[70%]">
          <h2>Booking History</h2>
          <TimeLineBooking />
        </div>
        <div className="bg-white rounded-md w-[30%] p-2">
          <h1 className="text-2xl p-2 mb-2">Notes</h1>
          <hr />
          <span className="text-gray-400">No Notes from customer</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default SingleBooking;
