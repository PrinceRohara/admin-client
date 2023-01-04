import { DataGrid } from "@mui/x-data-grid";
import {
  bookings,
  bookingsData,
  serviceColumns,
  services,
} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookingComponent = () => {
  const [data, setData] = useState(bookingsData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable bg-white">
      {/* <div className="flex w-full p-4 m-2 space-x-96 text-center align-middle drop-shadow-xl">
        <button className="bg-white text-black hover:text-orange-400 ml-12 p-2 rounded-sm">
          All Bookings
        </button>
        <button className="bg-white text-black hover:text-orange-400 mr-12 p-2 rounded-sm">
          Cancelled Booking
        </button>
      </div> */}
      <div className="flex">
        <button className="m-2 font-bold border-solid border-2 hover:bg-orange-100 border-orange-500 rounded text-orange-500 p-2 ">
          FILTERS
        </button>
        <input
          class="shadow appearance-none h-10 mt-2 mr-1  rounded w-full border-solid border-2 focus:border-orange-500 focus:placeholder-shown   text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:placeholder"
          type="text"
        />
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={bookings}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default BookingComponent;
