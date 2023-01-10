import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PayoutdetailsTable from "./PayoutdetailsTable";

const PayoutRequestDetails = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer p-4 bg-[#F1F6F6]">
        <Navbar />

        <h1 className="text-2xl p-1 m-2">Payout Request Details</h1>
        <PayoutdetailsTable />
      </div>
    </div>
  );
};

export default PayoutRequestDetails;
