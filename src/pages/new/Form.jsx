import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

const form = () => {
  const data = ["Mahesh", "vincezo", "rohan"];
  return (
    <>
      <form className="p-2 m-2 ">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[30%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="Select owners"
            defaultValue="EUR"
            color="warning"
            variant="outlined"
          >
            {data.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            className="w-[70%] p-1 ml-2"
            id="filled-basic"
            label="Salon Name"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[50%] p-1 m-2 "
            id="filled-basic"
            label="Email"
            type="email"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            type="number"
            label="discount"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2 placeholder:text-orange-400"
            id="filled-basic"
            type="number"
            label="discount"
            variant="outlined"
            color="warning"
          />{" "}
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[50%] p-1 m-2 "
            id="filled-basic"
            label="Street Address 1 *"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[50%] p-1 m-2"
            id="filled-basic"
            label="Street Address 2"
            variant="outlined"
            color="warning"
          />{" "}
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[33.3%] p-1 m-2 "
            id="filled-basic"
            label="latitude"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[33.3%] p-1 m-2"
            id="filled-basic"
            label="Longitude"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[33.3%] p-1 m-2"
            id="filled-basic"
            label="Time Zone"
            variant="outlined"
            disabled={true}
            value="IST"
            color="warning"
          />{" "}
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[25%] p-1 m-2 "
            id="filled-basic"
            type="number"
            label="postal Code"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="City *"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="India"
            variant="outlined"
            color="warning"
            select
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Select Region"
            variant="outlined"
            color="warning"
            select
          />{" "}
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[25%] p-1 m-2 "
            id="filled-basic"
            type="text"
            label="Phone 1"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Phone 2"
            variant="outlined"
            color="warning"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Mobile"
            variant="outlined"
            color="warning"
            select
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Capacity"
            value="10"
            variant="outlined"
            color="warning"
          />{" "}
        </div>
        <div className="p-4 m-2 mt-1 mb-1 flex space-x-4">
          {" "}
          <TextField
            className="w-[75%] p-1 m-2  "
            id="filled-basic"
            type="text"
            label="Salon Description"
            variant="outlined"
            color="warning"
            multiline
            maxRows={4}
          />{" "}
          <span>Feautured</span>
          <input type="radio" className="text-xl" />
          {/* <RadioGroup
            className="  p-2 text-red-900"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            color="success"
          >
            <FormControlLabel
              className="text-red-500 label:text-black label:text-red-500"
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              color="success"
              control={<Radio />}
              label="No"
            />
          </RadioGroup> */}
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

export default form;
