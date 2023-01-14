import React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const OwnerDetailsForm = () => {
  let { id } = useParams();
  console.log(id);
  const fetchApi = async (id) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://spaalon.harij.in/api/backend/OwnerDetail",
        data: {
          owner_id: id,
        },
      });
      console.log(response, "owners page");
      // setOrders(response.data.orders);
      // setcustomer(response.data.customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useeffect run");
    fetchApi(id);
  }, []);

  return (
    <div>
      <div className="p-2 mt-1 mx-8 rounded-md bg-white">
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            label="First Name"
            variant="outlined"
            color="warning"
          />
        </div>{" "}
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            label="Last Name"
            variant="outlined"
            color="warning"
          />
        </div>{" "}
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            label="Email"
            variant="outlined"
            color="warning"
          />
        </div>
        <div className="my-4 p-2 opacity-40">
          <TextField
            disabled
            id="outlined-basic"
            className="w-full"
            label="Status"
            variant="filled"
            color="warning"
          />
        </div>{" "}
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            label="Note"
            variant="outlined"
            color="warning"
            multiline
            maxRows={2}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default OwnerDetailsForm;
