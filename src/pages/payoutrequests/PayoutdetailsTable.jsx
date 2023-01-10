import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PayoutdetailsTable = () => {
  const demoData = [{ totalPrice: 800, name: "Total Base Price" }, ,];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

  return (
    <>
      <div className="p-4 m-2 bg-white rounded-md">
        <div>
          <h1 className="text-xl my-2 font-semibold">Payout Request </h1>
          <hr />
        </div>{" "}
        <div className="p-4 mt-12">
          {" "}
          <span className="font-semibold ml-4 ">Booking</span>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Checkbox {...label} />
                  </TableCell>
                  <TableCell>Appointment Id</TableCell>
                  <TableCell align="right">Booking Date</TableCell>
                  <TableCell align="right">Base Price</TableCell>
                  <TableCell align="right">Discounted Price</TableCell>
                  <TableCell align="right">Tax Amount</TableCell>
                  <TableCell align="right">Net Payable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default PayoutdetailsTable;
