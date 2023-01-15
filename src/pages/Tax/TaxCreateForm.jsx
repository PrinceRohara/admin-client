import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
const TaxCreateForm = () => {
  const taxtype = ["GST-12", "GST-17", "GST-18", "Service Tax", "Others"];

  const defaultFields = {
    tax_name: "",
    tax_rate: "",
    tax_type: "",
    tax_description: "",
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
    try {
      // const res = await axios({
      //   method: "POST",
      //   url: "https://spaalon.harij.in/api/backend/AddTax",

      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      const res = await axios.post(
        "https://spaalon.harij.in/api/backend/AddTax",
        JSON.stringify(form)
      );
      console.log(res);
      let resJson = await res.json();
      if (res.status === 200) {
        setForm(defaultFields);
        alert("success");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(form, "main form");
  };

  console.log(form, "myform");
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-2 m-2 bg-white rounded ">
        <h3 className="text-xl  font-bold ml-4 mt-4">General Information</h3>
        <div className="p-4 m-2 flex space-x-4 hover:border-orange-300">
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="Tax Name"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="tax_name"
          />
          <TextField
            className="w-[50%] p-1 ml-2"
            id="filled-basic"
            label="Tax Rate"
            variant="outlined"
            color="warning"
            onChange={handleChange}
            name="tax_rate"
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
            onChange={handleChange}
            name="tax_type"
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
            onChange={handleChange}
            name="tax_description"
          />
        </div>
        <button
          type="submit"
          className=" float-right p-2 m-2  bg-orange-700 opacity-20 uppercase text-white rounded "
        >
          Save
        </button>
      </form>
      <div className="mt-36 ">
        <div className=" ml-[65rem]">
          {/* <button
            type="submit"
            className=" float-right p-2 m-2  bg-orange-700 opacity-20 uppercase text-white rounded "
          >
            Save
          </button> */}
          <button className="text-gray-500 float-right p-2 m-2  ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default TaxCreateForm;
