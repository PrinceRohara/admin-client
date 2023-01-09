import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const SingleStylistForm = () => {
  const data = ["test salaon", "new salaon", "test salaon", "new salaon"];

  return (
    <>
      <form className="p-2 m-4 bg-white rounded">
        <h3 className="text-xl  font-bold ml-4 my-4">General Information</h3>
        <hr />
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="First Name"
            variant="outlined"
            color="warning"
          />
          <TextField
            className="w-[50%] p-1 ml-2"
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
            label="E-mail Address"
            variant="outlined"
            color="warning"
            type="email"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="salon *"
            defaultValue="EUR"
            color="warning"
            variant="outlined"
          >
            {data.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="specialization"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Description"
            variant="outlined"
            color="warning"
          />
        </div>
      </form>{" "}
      <button className="bg-orange-700 p-2 m-4 rounded text-white float-left">
        Delete
      </button>
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

export default SingleStylistForm;
