import { DataGrid } from "@mui/x-data-grid";
import {
  bookings,
  bookingsData,
  cancelledData,
  serviceColumns,
  services,
} from "../../datatablesource";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./booking.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import overlayFactory from "react-bootstrap-table2-overlay";
// import BootstrapTable from "react-bootstrap-table-next";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";

const StuffComponent = () => {
  const [data, setData] = useState(bookingsData);
  const [data1, setData1] = useState(cancelledData);
  const [allBookings, setAllBookings] = useState(true);
  const [cancelledBookings, setCancelledBookings] = useState(false);

  // give data
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAllBookings = () => {
    setAllBookings(true);
    setCancelledBookings(false);
  };
  const handleCancelledBookings = () => {
    setAllBookings(false);
    setCancelledBookings(true);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "View",
      width: 40,
      renderCell: (params) => {
        // setBookData(params);
        return (
          <div className="cellAction w-full">
            <Link to={`${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton ">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  const currencies = [
    {
      value: "USD",
      label: "Nani Y",
    },
    {
      value: "EUR",
      label: "Tom cruise",
    },
    {
      value: "BTC",
      label: "Mahesh Babu",
    },
    {
      value: "J",
      label: "Jr.NTR",
    },
  ];
  return (
    <>
      <div className="bg-white p-2 items-center">
        <button
          className={`ml-[4rem] w-[400px] text-gray-500 p-2  ${
            allBookings ? "border-b-2 border-orange-500" : "border-none"
          }`}
          onClick={handleAllBookings}
        >
          Admin Stuff
        </button>
        <button
          className={`ml-[10rem] w-[400px] text-gray-500 p-2   ${
            cancelledBookings ? "border-b-2 border-orange-500" : "no-underline"
          }`}
          onClick={handleCancelledBookings}
        >
          Owner Staff
        </button>
      </div>
      <div className="bg-white p-2 items-center flex flex-row mb-[-10px]">
        {allBookings && (
          <button
            className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2    ${
              allBookings ? "border-b-[3px] border-orange-500" : "border-none"
            }`}
            onClick={handleAllBookings}
          >
            Members
          </button>
        )}
        {/* {cancelledBookings && (
          <button
            className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2    ${
              cancelledBookings
                ? "border-b-[3px] border-orange-500"
                : "border-none"
            }`}
            onClick={handleAllBookings}
          >
           
          </button>
        )} */}
      </div>
      <div className="datatable bg-white">
        {" "}
        <div className="space-x-4 p-2 ml-1 font-semibold mb-4">
          {allBookings && (
            <>
              <Button variant="outlined" className="'" color="warning">
                Filters
              </Button>
              <TextField
                id="outlined-basic"
                className="p-2 ml-2 w-[90%]"
                variant="outlined"
                size="small"
                color="warning"
              />
            </>
          )}
        </div>
        {allBookings && (
          <>
            <DataGrid
              data-aos="fade-right"
              className="datagrid"
              rows={data}
              columns={bookings.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </>
        )}
        {cancelledBookings && (
          <div className="space-x-2">
            <TextField
              id="outlined-select-currency"
              select
              label="Venders"
              defaultValue="EUR"
              className="w-72 p-2"
              color="warning"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>{" "}
            <TextField
              id="outlined-select-currency"
              select
              disabled
              variant="filled"
              label="select .."
              defaultValue="EUR"
              className="w-60 p-2 opacity-40"
              color="warning"
            >
              {/* {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
          </div>
        )}
      </div>
    </>
  );
};

export default StuffComponent;
