import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

const SingleCustomer = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <h1 className="text-2xl bg-[#F1F6F6]">Prashant Babu</h1>
      <div className="flex">
        <div className="p-4 m-4 rounded-md bg-white w-[70%]">
          <span className="text-xl font-semibold p-1">
            movaliyaprashant@gmail.com
          </span>
          <br />
          <span className="text-sm p-1 mb-2">Active member since Jan 2023</span>
          <hr />
          <div className="mt-4">
            <Checkbox {...label} />
            <span>User account active</span>
          </div>
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
        <div className="p-4 m-4 flex space-x-4 hover:border-orange-300 w-[70%]">
          <div>
            <h1>Personal Information</h1>
            <TextField
              classes="w-[35%]"
              className=" p-1 ml-2"
              id="filled-basic"
              label="First Name"
              variant="outlined"
              color="warning"
            />
            <TextField
              className=" p-1 ml-2"
              id="filled-basic"
              label="Last Name"
              variant="outlined"
              color="warning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
