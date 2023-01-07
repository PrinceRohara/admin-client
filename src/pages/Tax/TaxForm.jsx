import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const TaxForm = () => {
  const taxtype = ["GST-12", "GST-17", "GST-18", "Service Tax", "Others"];
  return (
    <div>
      <form className="p-2 m-2 bg-white rounded ">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="Tax Name"
            variant="outlined"
            color="warning"
          />
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="Tax Rate"
            variant="outlined"
            color="warning"
          />
        </div>

        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="Tax Type*"
            defaultValue="EUR"
            color="warning"
            variant="outlined"
          >
            {taxtype.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
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
      </form>
      <div className="mt-36 ">
        <button className="bg-orange-600 fixed  z-30 m-2 p-2 rounded text-white uppercase ">
          delete
        </button>
        <div className="fixed ml-[65rem]">
          <button
            disabled
            className=" float-right p-2 m-2  bg-orange-700 opacity-20 uppercase text-white rounded "
          >
            Save
          </button>
          <button className="text-gray-500 float-right p-2 m-2  ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default TaxForm;
