import "./allservice.scss";
import { DataGrid } from "@mui/x-data-grid";
import { serviceColumns, services } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

const AllServices = () => {
  const [data, setData] = useState(services);

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
            <Link to={`${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
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
      <div className="datatable bg-white rounded-md">
        <div className="datatableTitle">
          <button
            className={`ml-[1rem] text-md font-semibold tracking-wide  text-gray-700 p-2 
             border-b-[3px] border-orange-500 
            `}
          >
            All Services Types
          </button>

          <Link
            to="add"
            className=" bg-[#D1461B] text-lg font-bold p-2  text-white rounded"
          >
            CREATE SERVICE TYPE
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={serviceColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default AllServices;
