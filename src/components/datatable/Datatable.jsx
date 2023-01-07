import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
const Datatable = () => {
  const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const names = [
    {
      value: 545,
      label: "All",
    },
    {
      value: 54325,
      label: "Mahesh",
    },
    {
      value: 5435,
      label: "Vincenzo",
    },
    {
      value: 5245,
      label: "Tom ",
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Salons
        <div className="flex space-x-8 mt-2 mb-4">
          <TextField
            className="p-4  w-52 border-none float-right ml-48 "
            id="standard-select-currency"
            select
            label="Select Owner"
            defaultValue="All"
            defaultChecked
            variant="filled"
            size="small"
            color="warning"
          >
            {names.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Link to="/users/new" className="  text-white rounded ">
            {/* bg-[#D1461B] text-lg font-bold p-1  */}
            <Button color="error" variant="contained" size="large">
              Create Salon
            </Button>
          </Link>
        </div>
      </div>{" "}
      <div className=" p-2 ">
        <button className="text-md p-2 my-1 border-orange-500  tracking-wide border-b-[3px]  text-gray-700  cursor-pointer  ">
          All Salons
        </button>
      </div>
      <hr />
      <div className="my-2">
        <TextField
          id="outlined-basic"
          className="p-2 ml-2 w-[100%]"
          variant="outlined"
          classes=""
          size="small"
          color="warning"
        />
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
