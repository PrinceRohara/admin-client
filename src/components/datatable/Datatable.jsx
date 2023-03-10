import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import { SalonFields } from "./SalonFields";
import { useNavigate } from "react-router-dom";
const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [salonData, setSalonData] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const fetchApi = async () => {
    const response = await axios.get(
      "https://spaalon.harij.in/api/backend/Shops"
    );
    console.log(response.data.shops);
    setSalonData(response.data.shops);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const navigate = useNavigate();
  const handleRowClick = (params) => {
    // const id = params.id.replace("SPA000-", "");
    // console.log("clicking", params.id.replace("SPA000-", ""));
    console.log("click baby data");

    navigate(`${params.id}`);
  };
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
            <Link to=":id" style={{ textDecoration: "none" }}>
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
          <Link to="new" className="  text-white rounded ">
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
        rows={salonData}
        columns={SalonFields}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onRowClick={handleRowClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Datatable;
