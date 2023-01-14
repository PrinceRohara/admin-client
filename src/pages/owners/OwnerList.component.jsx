import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import { OwnersFields } from "./OwnersFields";

const OwnerList = () => {
  const [data, setData] = useState(bookingsData);
  const [data1, setData1] = useState(cancelledData);
  const [allBookings, setAllBookings] = useState(true);
  const [cancelledBookings, setCancelledBookings] = useState(false);
  const [ownerList, setOwnerList] = useState([]);

  // give data
  const [bookData, setBookData] = useState(null);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://spaalon.harij.in/api/backend/OwnerList"
    );
    console.log(response.data);
    setOwnerList(response.data);
  };
  const demo = [
    {
      id: 45,
      first_name: "Govind",
      last_name: "Pant",
      contact_no: "9958944744",
      email: "govind@harij.in",
      created_on: new Date("2023-01-07T17:26:17.000Z").toDateString(),
    },
  ];
  const navigate = useNavigate();
  const handleRowClick = (params) => {
    navigate(`${params.id}`);
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
    setCancelledBookings(false);
  };
  const handleCancelledBookings = () => {
    setAllBookings(false);
    setCancelledBookings(true);
  };
  // console.log(ownerList);

  const createId = [{ id: 54545 }];

  const addId = ownerList.concat(createId);
  console.log(addId, "add id");

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
      <div className="bg-white p-2 items-center flex flex-row">
        <button
          className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2   ${
            allBookings ? "border-b-[3px] border-orange-500" : "border-none"
          }`}
          onClick={handleAllBookings}
        >
          All Owners
        </button>
      </div>
      <div className="space-x-4 p-2 ml-4 font-semibold ">
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
      <div className="datatable bg-white ">
        {allBookings && (
          <>
            <DataGrid
              data-aos="fade-right"
              className="datagrid"
              rows={ownerList}
              checkboxSelection
              getRowId={(row) => row.email}
              onRowClick={handleRowClick}
              columns={OwnersFields}
              style={{ cursor: "pointer" }}
              pageSize={9}
              rowsPerPageOptions={[9]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default OwnerList;
