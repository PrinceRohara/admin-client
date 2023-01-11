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
import { useNavigate } from "react-router-dom";
const ServicesList = () => {
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
  const navigate = useNavigate();
  const handleRowClick = (params) => {
    navigate(`${params.id}`);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "View",
      width: 80,
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

  return (
    <>
      <div>
        <div className="flex space-x-[50rem] mt-4 mb-4">
          <h1 className="text-xl p-2">Services</h1>
          <div className="">
            <Link to="add">
              <Button className="" variant="contained" color="error">
                Create Service
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-white mt-8 p-2 items-center flex flex-row">
          <button
            className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2 hover:bg-orange-200  hover:text-orange-400 ${
              allBookings ? "border-b-[3px] border-orange-500" : "border-none"
            }`}
            onClick={handleAllBookings}
          >
            All Services
          </button>
        </div>
        <div className="space-x-4 p-2  font-semibold bg-white">
          <div className="p-2 ml-2 space-x-2">
            <Button variant="outlined" color="warning">
              Filters
            </Button>
            <TextField
              id="outlined-basic"
              className="p-2 ml-2 w-[90%]"
              variant="outlined"
              size="small"
              color="warning"
            />{" "}
          </div>
        </div>
        <div className="datatable bg-white ">
          {allBookings && (
            <>
              <DataGrid
                checkboxSelection
                data-aos="fade-right"
                className="datagrid"
                rows={data}
                onRowClick={handleRowClick}
                style={{ cursor: "pointer" }}
                columns={bookings}
                pageSize={9}
                rowsPerPageOptions={[9]}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
