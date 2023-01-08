import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const MangeService = () => {
  const currencies = [
    {
      value: "USD",
      label: "Jackie",
    },
    {
      value: "EUR",
      label: "Tom",
    },
    {
      value: "BTC",
      label: "kim ",
    },
    {
      value: "JPY",
      label: "Bruce",
    },
  ];
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="p-4 m-4">
            <h1 className="text-xl p-1 m-2">Manage Services</h1>
            <TextField
              id="outlined-select-currency"
              select
              label=""
              defaultValue="EUR" color="warning"
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MangeService;
