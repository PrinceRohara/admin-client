import React from "react";
import FetchDataComponent from "../../components/fetchdata/FetchDataComponent";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import PayOutList from "./PayOutList";
const PayoutRequests = () => {
  return (
    <div className="single ">
      <Sidebar />
      <div className="singleContainer p-4 ml-4 mr-4">
        <Navbar />
        <div className="">
          <h1 className="mt-8 ml-4 text-3xl mb-4">Payout Requests</h1>
        </div>

        <PayOutList />
      </div>
    </div>
  );
};

export default PayoutRequests;
