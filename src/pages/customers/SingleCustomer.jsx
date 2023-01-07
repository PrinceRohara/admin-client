import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SingleCustomer = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <div className="">
      <h1 className="text-2xl mt-4 ml-4 bg-[#F1F6F6]">Prashant Babu</h1>
      <div className="flex ">
        <div className="p-4 m-4 rounded-md bg-white w-[70%]">
          <span className="text-xl font-semibold p-1">
            movaliyaprashant@gmail.com
          </span>
          <br />
          <span className="text-sm p-1 mb-2">Active member since Jan 2023</span>
          <hr />
          <div className="mt-4 mb-2">
            <Checkbox {...label} />
            <span>User account active</span>{" "}
          </div>{" "}
          <TextField
            className="w-full"
            id="outlined-textarea"
            label="Note"
            placeholder="Note"
            size="large"
            multiline
            rows={2}
          />
        </div>
        <div className="bg-white w-[30%] p-4 m-4 rounded-md">
          <span className="text-xl font-semibold p-1">Customer History</span>
          <hr />
          <div className="mt-4">
            <span className="text-sm mt-4">last login</span>
            <br />
            <br />
            <span className="text-xl  font-semibold">4 Days ago</span>
            <hr />

            <span className="text-sm mt-4">last order</span>
            <br />
            <span className="text-xl font-semibold">-</span>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="p-4 m-4  space-x-4 bg-white rounded-md hover:border-orange-300 w-[70%]">
          <h1 className="text-xl p-2 ml-2 my-2">Personal Information</h1>
          <hr />
          <span className="text-md p-2">General Information</span>
          <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
            {" "}
            <TextField
              className="w-[50%] p-1 m-2 "
              id="filled-basic"
              label="First Name "
              variant="outlined"
              color="warning"
            />{" "}
            <TextField
              className="w-[50%] p-1 m-2"
              id="filled-basic"
              label="Last Name"
              variant="outlined"
              color="warning"
            />{" "}
          </div>
          <hr />
          <span className="text-md p-2">Contact Informations</span>
          <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
            {" "}
            <TextField
              className="w-[50%] p-1 m-2 "
              id="filled-basic"
              label="Email Address"
              variant="outlined"
              color="warning"
            />{" "}
            <TextField
              className="w-[50%] p-1 m-2"
              id="filled-basic"
              label="Contact Number"
              variant="outlined"
              color="warning"
            />{" "}
          </div>
        </div>
        <div className="bg-white rounded-md w-[70%] m-4 p-4">
          <div className="flex mb-4">
            <h1>Recent Bookings</h1>
            <button className="ml-[500px] font-bold uppercase text-orange-600 ">
              View All Bookings
            </button>
            <hr />
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Appointment Id </TableCell>
                  <TableCell align="right"> Date</TableCell>
                  <TableCell align="right"> Status</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* dynamic data */}
                {/* {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  ></TableRow>
                ))} */}
                {/* <TableRow
                  key={455}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  no data
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className=" ">
          <button className="bg-orange-600 z-30 m-2 p-2 rounded text-white uppercase ">
            delete
          </button>
          <button
            disabled
            className=" float-right p-2 m-2 bg-orange-700 opacity-20 uppercase text-white rounded "
          >
            Save
          </button>
          <button className="text-gray-500 float-right p-2 m-2  ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
