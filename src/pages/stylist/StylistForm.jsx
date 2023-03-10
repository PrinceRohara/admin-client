import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const StylistForm = () => {
  const data = ["test salaon", "new salaon", "test salaon", "new salaon"];

  const defaultFields = {
    vendor_id: 1,
    shop_id: 1,
    name: "",
    email: "",
    specialization: "",
    description: "",
    is_active: false,
  };
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(e.target);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("rrun");

    const options = {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    try {
      const res = await fetch(
        "https://spaalon.harij.in/api/backend/AddStylist",
        options
      );
      console.log(res, "res form");
      // console.log(res.status);
      if (res.status === 201) {
        navigate(`/stylist`);
        // alert("Form created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(form, "myform stylist");

  return (
    <>
      <form onSubmit={handleSubmit} className="p-2 m-2">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="First Name"
            variant="outlined"
            color="warning"
            name="name"
            onChange={handleChange}
          />
          {/* <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="Last Name"
            variant="outlined"
            color="warning"
          /> */}
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="E-mail Address"
            variant="outlined"
            color="warning"
            type="email"
            onChange={handleChange}
            name="email"
          />
        </div>
        {/* <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="salon *"
            // defaultValue="EUR"
            color="warning"
            variant="outlined"
            name=""
          >
            {data.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div> */}
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="specialization"
            variant="outlined"
            color="warning"
            name="specialization"
            onChange={handleChange}
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Description"
            variant="outlined"
            color="warning"
            name="description"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-700 p-2 m-4 rounded text-white float-right"
        >
          Save
        </button>
        <button
          disabled
          className=" p-2 m-4 rounded text-black font-bold float-right"
        >
          Back
        </button>
      </form>{" "}
    </>
  );
};

export default StylistForm;
