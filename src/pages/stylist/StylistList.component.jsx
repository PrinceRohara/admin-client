import { DataGrid } from "@mui/x-data-grid";
import {
  bookings,
  bookingsData,
  cancelledData,
  serviceColumns,
  services,
} from "../../datatablesource";
import { redirect } from "react-router-dom";
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
import axios from "axios";
import { stylistFields } from "./stylistFields";
import SingleStylistForm from "./SingleStylistForm";
const StylistList = () => {
  const [data, setData] = useState(bookingsData);
  const [data1, setData1] = useState(cancelledData);
  const [allBookings, setAllBookings] = useState(true);

  const { darkMode } = useContext(DarkModeContext);
  // give data
  const [bookData, setBookData] = useState(null);

  const [stylist, setStylist] = useState([]);

  const [click, setClick] = useState(null);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://spaalon.harij.in/api/backend/Stylist"
    );

    console.log(response.data.shops);
    setStylist(response.data.shops);
  };
  useEffect(() => {
    fetchApi();
    AOS.init();
  }, []);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAllBookings = () => {
    setAllBookings(true);
  };

  const cellClick = (params) => {
    setClick(params);
    // console.log("my params baby ", params.id);
    // return redirect(`${params.id}`);
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
      {click && redirect(`${click.id}`)}
      <div className=" p-2 items-center flex flex-row mb-[-10px] bg-white rounded ">
        {allBookings && (
          <button
            className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2    ${
              allBookings ? "border-b-[3px] border-orange-500" : "border-none"
            }`}
            onClick={handleAllBookings}
          >
            All Stylist
          </button>
        )}
      </div>
      <div className="datatable bg-white rounded ">
        {" "}
        <div className="space-x-4 p-2 ml-1 font-semibold ">
          <TextField
            id="outlined-basic"
            className="p-2 ml-2 w-[100%]"
            variant="outlined"
            size="small"
            color="warning"
          />
        </div>
        {/* <div className="flex p-2 m-2 ">
        <button className="p-2 bg-gray-400 m-2 ">AllBookings</button>
        <button className="p-2 bg-gray-400">Cancelled Bookings</button>
      </div>{" "} */}
        {/* <div className="flex w-full p-4 m-2 space-x-96 text-center align-middle drop-shadow-xl">
        <button className="bg-white text-black hover:text-orange-400 ml-12 p-2 rounded-sm">
          All Bookings
        </button>
        <button className="bg-white text-black hover:text-orange-400 mr-12 p-2 rounded-sm">
          Cancelled Booking
        </button>
      </div> */}
        {/* <div className="flex">
        <button className="m-2 font-bold border-solid border-2 hover:bg-orange-100 border-orange-500 rounded text-orange-500 p-2 ">
          FILTERS
        </button>
        <input
          class="shadow appearance-none h-10 mt-2 mr-1  rounded w-full border-solid border-2 focus:border-orange-500 focus:placeholder-shown   text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:placeholder"
          type="text"
        />
      </div> */}
        {/* {allBookings && (
          
      )} */}
        {allBookings && (
          <>
            {/* {bookings.map((b) => {
              <Link>
                {" "}
                <DataGrid
                  onClick={(e) => {
                    console.log("testing");
                  }}
                  data-aos="fade-right"
                  className="datagrid"
                  rows={data}
                  columns={b}
                  pageSize={9}
                  rowsPerPageOptions={[9]}
                  checkboxSelection
                />
              </Link>;
            })} */}
            <DataGrid
              data-aos="fade-right"
              className="datagrid"
              rows={stylist}
              columns={stylistFields.concat(actionColumn)}
              pageSize={9}
              onCellClick={cellClick}
              rowsPerPageOptions={[9]}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default StylistList;
