import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
// import { ProSidebarProvider } from "react-pro-sidebar";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
