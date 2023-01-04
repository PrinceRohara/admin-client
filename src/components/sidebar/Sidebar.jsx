import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className=" sidebar ">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src="https://admin.spaalon.com/SpaalonLogoRed.jpg" alt="" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5178/5178544.png"
              alt=""
              width="26px"
            />
            <span>Dashboard</span>
          </li>
          {/* <p className="title">LISTS</p> */}
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/649/649931.png"
                alt=""
                width="26px"
              />
              <span>BOOKINGS</span>
            </li>
          </Link>
          <Link to="/transation" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9292/9292388.png"
                alt=""
                width="26px"
              />
              <span>TRANSATIONS</span>
            </li>
          </Link>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
                alt=""
                width="26px"
              />
              <span>CUSTOMERS</span>
            </li>
          </Link>
          <Link to="/owners" style={{ textDecoration: "none" }}>
            <li>
              {/* <i class="fa-solid fa-users"></i> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/694/694642.png"
                alt=""
                width="26px"
              />

              <span>OWNERS</span>
            </li>
          </Link>
          <Link to="/payoutrequests" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3110/3110884.png"
                alt=""
                width="26px"
              />
              <span>PAYOUT REQUESTS</span>
            </li>
          </Link>
          <Link to="/tax" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3110/3110884.png"
                alt=""
                width="26px"
              />
              <span>TAX</span>
            </li>
          </Link>
          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/697/697722.png"
                alt=""
                width="26px"
              />
              <span>CATALOG</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3790/3790422.png"
                alt=""
                width="26px"
              />
              <span className="text-xl">SALONS</span>
            </li>
          </Link>
          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3046/3046889.png"
                alt=""
                width="26px"
              />
              <span>MANAGE SERVICES</span>
            </li>
          </Link>
          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                alt=""
                width="26px"
              />
              <span>STYLIST</span>
            </li>
          </Link>
          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                alt=""
                width="26px"
              />
              <span>STAFF</span>
            </li>
          </Link>
          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                alt=""
                width="26px"
              />
              <span>KEEP IN TOUCH</span>
            </li>
          </Link>

          <Link to="/configuration" style={{ textDecoration: "none" }}>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                alt=""
                width="26px"
              />
              {/* <SettingsApplicationsIcon className="icon" /> */}
              <span>CONFIGURATION</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
