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
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { bookingsFields } from "./BookingsFields";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import SingleBooking from "../bookid/SingleBooking";
import BookingId from "../bookid/BookingId";


const BookingComponent = () => {
  const [data, setData] = useState(bookingsData);
  const [data1, setData1] = useState(cancelledData);
  const [allBookings, setAllBookings] = useState(true);
  const [cancelledBookings, setCancelledBookings] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  // give data
  const [bookData, setBookData] = useState([]);
  // const [, setBookingsData] = useState([]);

  const [passid, setPassId] = useState(null);
  const navigate = useNavigate();

  const fetchApi = async () => {
    const response = await axios.post(
      "https://spaalon.harij.in/api/backend/CustomerOrder",
      {}
    );
    setBookData(response.data);

    console.log(response.data);
  };

  
  // const fetchApi1 = async (id) => {
  //   const response = await axios({
  //     method: "post",
  //     url: "https://spaalon.harij.in/api/backend/CustomerOrderDetail/",
  //     data: {
  //       order_id: id,
  //     },
  //   });

  //   console.log(response);
  // };

  useEffect(() => {
    fetchApi();

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
  const handleRowClick = (params) => {
    const id = params.id.replace("SPA000-", "");
    console.log("clicking", params.id.replace("SPA000-", ""));

    navigate(`${id}`);
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

  return (
    <>
      <div className="bg-white ">
        <div className={` p-2 items-center rounded bg-white`}>
          <button
            className={`ml-[4rem] w-[400px] text-gray-500 p-2  ${
              allBookings ? "border-b-2 border-orange-500" : "border-none"
            }`}
            onClick={handleAllBookings}
          >
            All Bookings
          </button>
          <button
            className={`ml-[10rem] w-[400px] text-gray-500 p-2   ${
              cancelledBookings
                ? "border-b-2 border-orange-500"
                : "no-underline"
            }`}
            onClick={handleCancelledBookings}
          >
            Cancelled Bookings
          </button>
        </div>
        <div className=" p-2 items-center flex flex-row mb-[-10px] bg-white mt-4">
          {allBookings && (
            <button
              className={`ml-[1rem] font-semibold tracking-wide bg-white  text-gray-700 p-2    ${
                allBookings ? "border-b-[3px] border-orange-500" : "border-none"
              }`}
              onClick={handleAllBookings}
            >
              All Bookings
            </button>
          )}
          {cancelledBookings && (
            <button
              className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2    ${
                cancelledBookings
                  ? "border-b-[3px] border-orange-500"
                  : "border-none"
              }`}
              onClick={handleAllBookings}
            >
              All Cancelled Bookings
            </button>
          )}
        </div>
        <div className="datatable ">
          {" "}
          <div className="space-x-4 p-2 ml-1 font-semibold ">
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
          </div>
          {allBookings && (
            <>
              <DataGrid
                data-aos="fade-right"
                className="datagrid"
                rows={bookData}
                getRowId={(row) => row.order_id}
                onRowClick={handleRowClick}
                columns={bookingsFields}
                pageSize={9}
                rowsPerPageOptions={[9]}
                style={{ cursor: "pointer" }}
                checkboxSelection
              />
            </>
          )}
          {cancelledBookings && (
            <DataGrid
              className="datagrid "
              rows={bookData}
              columns={bookingsFields}
              onRowClick={handleRowClick}
              pageSize={9}
              getRowId={(row) => row.order_id}
              rowsPerPageOptions={[9]}
              checkboxSelection
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookingComponent;
