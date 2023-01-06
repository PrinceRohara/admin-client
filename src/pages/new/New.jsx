import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Form from "./Form";

import React from "react";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <h1 className="text-xl p-1 m-2">Create New Salon</h1>
        <div className="text-black">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default New;
