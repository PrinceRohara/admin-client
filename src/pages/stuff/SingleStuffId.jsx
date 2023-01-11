import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
const SingleStuffId = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <h1 className="text-xl p-1 m-2">Abigail Ladd</h1>
      <div className="flex  p-2 m-2">
        <div className="p-4 m-2 w-[70%] rounded-md bg-white">
          <h2 className="font-semibold text-xl my-2">
            Staff Member Information
          </h2>
          <hr />
          <div className="flex p-2 space-x-4 my-2">
            <div>
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 120, height: 120 }}
              >
                N
              </Avatar>
            </div>
            <div className="p-2  flex flex-wrap space-y-2 space-x-4">
              <TextField
                className="w-64 "
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className="w-64 "
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />

              <TextField
                className="w-64 ml-2 "
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                className="w-64 "
                id="outlined-basic"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className="p-4 m-2 w-[30%]  rounded-md bg-white">
          <h2 className=" p-2 text-xl font-semibold">Account Status</h2>
          <hr />
          <p className="my-1 p-2">
            If you want to disable this account uncheck the box below
          </p>
          <Checkbox {...label} defaultChecked />
          <span>User is active</span>
        </div>
      </div>
    </div>
  );
};

export default SingleStuffId;
