import React from "react";
import TextField from "@mui/material/TextField";
import "../../style/dark.scss";
import { useState } from "react";
import axios from "axios";
const OwnerForm = () => {
  const defaultFields = {
    first_name: "",
    last_name: "",
    contact_no: "",
    email: "",
    password: "",
    note: "",
  };

  const [form, setForm] = useState(defaultFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(e.target);
  };
  console.log(form, "form page ");
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
        "https://spaalon.harij.in/api/backend/AddOwner",
        options
      );
      console.log(res, "res form");
      // console.log(res.status);
      if (res.status === 201) {
        alert("Form created");
      }
    } catch (error) {
      console.log(error);
    }

    
  };

  console.log(form, "myform");
  return (
    <>
      <form onSubmit={handleSubmit} className="p-2 m-2">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="First Name"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="first_name"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Last Name"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="last_name"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="Contact Number"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="contact_no"
          />
        </div>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[100%] p-1 ml-2"
            id="filled-basic"
            label="E-mail Address"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="email"
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
            name="password"
            onChange={handleChange}
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
            onChange={handleChange}
            name="note"
          />
        </div>
        <button
          disabled
          className=" p-2 m-4 rounded text-black font-bold float-right"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-orange-700 p-2 m-4 rounded text-white float-right"
        >
          Save
        </button>{" "}
        {/* <button >send</button> */}
      </form>
      {/* <button className="bg-orange-700 p-2 m-4 rounded text-white float-right">
        Save
      </button>{" "} */}
    </>
  );
};

export default OwnerForm;
