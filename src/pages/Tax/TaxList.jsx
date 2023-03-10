import { DataGrid } from "@mui/x-data-grid";
import {
  bookings,
  bookingsData,
  cancelledData,
  serviceColumns,
  services,
} from "../../datatablesource";
import { taxType } from "./TaxFieldType";
import Carousel from "react-bootstrap/Carousel";
import { json, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./booking.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import overlayFactory from "react-bootstrap-table2-overlay";
// import { TaxData } from "./fetchApi";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaxList = () => {
  const [data, setData] = useState(bookingsData);
  const [data1, setData1] = useState(cancelledData);
  const [allBookings, setAllBookings] = useState(true);
  const [cancelledBookings, setCancelledBookings] = useState(false);


  // give data
  const [bookData, setBookData] = useState(null);
  const [taxData, setTaxData] = useState([]);
  // const [tax, setTax] = useState(TaxData);

  // const one = taxData[0];
  const fetchApi = () => {
    return axios
      .get("https://spaalon.harij.in/api/backend/TaxList")

      .then((response) => {
        console.log(response.data);
        setTaxData(response.data);
      })
      .catch((error) => console.log(error));
  };
  // .then((response) => setTaxData(response.data))
  // console.log(one);

  useEffect(() => {
    AOS.init();
    fetchApi();
  }, []);
  // console.log(taxData);

  // const one = taxData.map((el) => el);
  // console.log(one);

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
      width: 80,
      renderCell: (params) => {
        // setBookData(params);
        return (
          <div className="cellAction w-full">
            <Link to={`${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton ">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  const id = [5454, 456, 161, 6, 616];
  const navigate = useNavigate();
  const handleRowClick = (params) => {
    navigate(`${params.id}`);
  };

  return (
    <>
      <div className="bg-white p-2 items-center flex flex-row">
        <button
          className={`ml-[1rem] font-semibold tracking-wide  text-gray-700 p-2 hover:bg-orange-200  hover:text-orange-400 ${
            allBookings ? "border-b-[3px] border-orange-500" : "border-none"
          }`}
          onClick={handleAllBookings}
        >
          All Tax
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
              rows={taxData}
              onRowClick={handleRowClick}
              //  getRowId={(row) => row.order_id}
              columns={taxType}
              pageSize={9}
              rowsPerPageOptions={[9]}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TaxList;
