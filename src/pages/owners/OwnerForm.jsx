import React from "react";
import TextField from "@mui/material/TextField";

const OwnerForm = () => {
  return (
    <>
      <form className="p-2 m-2">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="First Name"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Last Name"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Contact Number"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="E-mail Address"
            variant="outlined"
            color="warning"
          />
        </div>{" "}
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Password"
            variant="outlined"
            color="warning"
            type="password"
          />
        </div>{" "}
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Note"
            multiline
            rows={2}
            variant="outlined"
            color="warning"
          />
        </div>
      </form>
      <button className="bg-orange-700 p-2 m-4 rounded text-white float-right">
        Save
      </button>{" "}
      <button
        disabled
        className=" p-2 m-4 rounded text-black font-bold float-right"
      >
        Back
      </button>
    </>
  );
};

export default OwnerForm;
