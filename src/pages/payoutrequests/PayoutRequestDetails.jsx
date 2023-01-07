import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PayoutdetailsTable from "./PayoutdetailsTable";

const PayoutRequestDetails = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Create Owners</h1>
        <PayoutdetailsTable />
      </div>
    </div>
  );
};

export default PayoutRequestDetails;
