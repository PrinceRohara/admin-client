import "./allservice.scss";
import { DataGrid } from "@mui/x-data-grid";
import { serviceColumns, services } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      <div className="datatableTitle">
        Service Types
        <Link
          to="/users/new"
          className=" bg-[#D1461B] text-lg font-bold p-2  text-white rounded"
        >
          CREATE SERVICE TYPE
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={serviceColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AllServices;
