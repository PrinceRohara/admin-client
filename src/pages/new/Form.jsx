import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

const Form = () => {
  const defaultFields = {
    owner_id: "1",
    shop_name: "",
    email: "",
    discount: "",
    shop_discount: "",
    street_add_1: "",
    street_add_2: "",
    latitude: "",
    longitude: "",
    postal_code: "",
    city: "",
    state: "",
    country: "",
    phone_1: "",
    phone_2: "",
    mobile_1: "",
    shop_capacity: "",
    shop_desc: "",
    is_featured: "",
  };
  const [shopForm, setShopForm] = useState(defaultFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopForm((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(e.target);
  };

  // console.log(shopForm);
  // https://spaalon.harij.in/api/backend/AddShop

  const coutnry = ["india", "usa", "japan"];

  const data = ["Mahesh", "vincezo", "rohan"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("rrun");

    const options = {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shopForm),
    };

    try {
      const res = await fetch(
        "https://spaalon.harij.in/api/backend/AddShop",
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

  return (
    <>
      <form onSubmit={handleSubmit} className="p-2 m-2 ">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[30%] p-1 m-2  foucs:border-orange-300"
            id="filled-select-currency"
            select
            label="Select owners"
            // defaultValue="EUR"
            color="warning"
            variant="outlined"
            onChange={handleChange}
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
            onChange={handleChange}
            name="shop_name"
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
            onChange={handleChange}
            name="email"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            type="number"
            label="discount"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="discount"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2 placeholder:text-orange-400"
            id="filled-basic"
            type="number"
            label="shop discount"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="shop_discount"
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
            onChange={handleChange}
            name="street_add_1"
          />{" "}
          <TextField
            className="w-[50%] p-1 m-2"
            id="filled-basic"
            label="Street Address 2"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="street_add_2"
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
            onChange={handleChange}
            name="latitude"
          />{" "}
          <TextField
            className="w-[33.3%] p-1 m-2"
            id="filled-basic"
            label="Longitude"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="longitude"
          />{" "}
          <TextField
            className="w-[33.3%] p-1 m-2"
            id="filled-basic"
            label="Time Zone"
            variant="outlined"
            disabled={true}
            value="IST"
            color="warning"
            // onChange={handleChange}
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
            name="postal_code"
            onChange={handleChange}
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="City *"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="city"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Country"
            variant="outlined"
            color="warning"
            // select
            onChange={handleChange}
            name="country"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label=" State"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            // select
            name="state"
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
            onChange={handleChange}
            name="phone_1"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Phone 2"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="phone_2"
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Mobile"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="mobile_1"
            // select
          />{" "}
          <TextField
            className="w-[25%] p-1 m-2"
            id="filled-basic"
            label="Capacity"
            // value="10"
            variant="outlined"
            name="shop_capacity"
            onChange={handleChange}
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
            onChange={handleChange}
            color="warning"
            name="shop_desc"
            multiline
            maxRows={4}
          />{" "}
          {/* <span>Feautured</span>
          <input value={false} type="radio" className="text-xl" /> */}
          <RadioGroup
            className="  p-2 text-red-900"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            color="success"
            onChange={handleChange}
          >
            <FormControlLabel
              className="text-red-500 label:text-black label:text-red-500"
              value="true"
              control={<Radio />}
              label="Yes"
              name="is_featured"
            />
            <FormControlLabel
              value="false"
              color="false"
              control={<Radio />}
              label="No"
              name="is_featured"
            />
          </RadioGroup>
        </div>
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
      </form>
    </>
  );
};

export default Form;
