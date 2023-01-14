import React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const OwnerDetailsForm = () => {
  const [owner, setOwner] = useState([]);
  const [shop, setShop] = useState([]);
  const [formData, setFormData] = useState(null);

  let { id } = useParams();
  console.log(id);
  const fetchApi = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://spaalon.harij.in/api/backend/OwnerDetail",
        data: {
          owner_id: 1,
        },
      });
      setOwner(response.data.owner);
      setShop(response.data.shop);
      setFormData(response.data.owner[0]);
      console.log(response, "owners page");
      // setOrders(response.data.orders);
      // setcustomer(response.data.customer);
    } catch (error) {
      console.log(error);
    }
  };
  function createData(shop_name, address, city, isActive) {
    return { shop_name, address, city, isActive };
  }

  console.log(formData, "formdata");

  useEffect(() => {
    console.log("useeffect run");
    fetchApi();
  }, []);

  console.log(owner, "my owner");
  console.log(shop, "shops data");

  const shopList = shop?.map((el) => {
    // const address = el.street_address_1.concat(el.street_address_2);
    // console.log(address, "full address");
    return createData(
      el.shop_name,
      el.street_address_1,
      el.street_address_2,
      el.is_active
    );
  });

  const rows = shopList;
  return (
    <div className="">
      <div className="p-2 mt-1 mx-8 rounded-md bg-white">
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            // label="First Name"
            variant="outlined"
            color="warning"
            onChange={(e) => setFormData({ first_name: e.target.value })}
            value={formData && formData?.first_name}
          />
        </div>{" "}
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            // label="Last Name"
            variant="outlined"
            color="warning"
            onChange={(e) => setFormData({ last_name: e.target.value })}
            value={formData && formData?.last_name}
          />
        </div>{" "}
        <div className="my-4 p-2">
          <TextField
            id="outlined-basic"
            className="w-full"
            // label="Email"
            variant="outlined"
            color="warning"
            onChange={(e) => setFormData({ email: e.target.value })}
            value={formData && formData?.email}
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
      <div className=" p-2 mt-12 mb-4 mx-8 rounded-md bg-white">
        <div className="p-2">
          <button className="text-md p-2 my-1 border-orange-500  tracking-wide border-b-[3px]  text-gray-700  cursor-pointer  ">
            All Salons
          </button>{" "}
          <button className="text-md p-2 my-1 float-right font-bold uppercase   tracking-wide  text-orange-600 hover:bg-orange-50 rounded cursor-pointer  ">
            create salon
          </button>
        </div>{" "}
        <div className="my-4 mt-0 p-2 bg-white">
          <TextField
            id="outlined-basic"
            className="w-[90%]"
            variant="outlined"
            color="warning"
            size="small"
          />
        </div>{" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Salon Name </TableCell>
                <TableCell>Salon Address</TableCell>
                <TableCell> Excel Sheet</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.shop_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="" scope="row">
                    {row.shop_name}
                  </TableCell>{" "}
                  <TableCell component="" scope="row">
                    {`${row.address}, ${row.city}`}
                  </TableCell>{" "}
                  <TableCell component="" scope="row">
                    {row.order_status}
                  </TableCell>{" "}
                  <TableCell component="" scope="row">
                    {row.isActive ? "ACTIVE" : "NOT ACTIVE"}
                  </TableCell>
                </TableRow>
              ))}{" "}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>{" "}
      <div className="mt-4">
        <button className="bg-orange-600 font-semibold uppercase p-2 m-4 rounded  text-white float-left">
          Delete
        </button>
        <button
          disabled
          className="bg-orange-700 opacity-10 p-2 m-4 rounded text-white float-right"
        >
          Save
        </button>{" "}
        <button
          disabled
          className=" p-2 m-4 rounded text-black font-bold float-right"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default OwnerDetailsForm;
