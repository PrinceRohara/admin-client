import React from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
const SingleStylistForm = () => {
  const data = ["test salaon", "new salaon", "test salaon", "new salaon"];
  let { id } = useParams();
  const defaultFields = {
    stylist_id: id,
    vendor_id: id,
    shop_id: 1,
    name: "",
    email: "",
    specialization: "",
    description: "",
    is_active: true,
  };
  
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
        "https://spaalon.harij.in/api/backend/EditStylist",
        options
      );
      console.log(res, "res form");
      // console.log(res.status);
      if (res.status === 201) {
        // navigate(`/owners`);
        alert("Form updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-2 m-4 bg-white rounded">
        <h3 className="text-xl  font-bold ml-4 my-4">General Information</h3>
        <hr />
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label=" Name"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="name"
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
            name="email"
            onChange={handleChange}
          />
        </div>
        {/* <div className="p-4 m-2 flex space-x-4 hover:border-orange-300"> */}
        {/* <TextField
            className="w-[100%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="salon *"
            // defaultValue="EUR"
            color="warning"
            variant="outlined"
            name="email"
            onChange={handleChange}
          >
            {data.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField> */}
        {/* </div> */}
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
        <button className="bg-orange-700 p-2 m-4 rounded text-white float-left">
          Delete
        </button>
        <button
          type="submit"
          className="bg-orange-700 p-2 m-4 rounded text-white float-right"
        >
          Save
        </button>{" "}
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

export default SingleStylistForm;
