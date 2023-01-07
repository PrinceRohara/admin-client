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
import { useState } from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import CatalogDrawer from "../../pages/Catalog/CatalogDrawer";
import { Drawer, Box, Typography } from "@mui/material";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = (e) => {
    e.preventDefault();
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  // catalog Temporary drawer

  return (
    <ProSidebar collapsed={menuCollapse}>
      <div className=" sidebar ">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
              <img src="https://admin.spaalon.com/SpaalonLogoRed.jpg" alt="" />
            </span>
          </Link>
        </div>
        <hr />
        <SidebarContent>
          <div
            className={`closemenu text-4xl text-orange-500 z-50 mt-2 cursor-pointer ${
              !menuCollapse ? "ml-48" : "ml-4   "
            } `}
            onClick={menuIconClick}
          >
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
          <div className="center">
            <ul>
              <Link to="/">
                <li>
                  <img
                    className=""
                    src="https://cdn-icons-png.flaticon.com/512/5178/5178544.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && (
                    <span className="dark:text-white">DASHBOARD</span>
                  )}
                </li>
              </Link>
              {/* <p className="title">LISTS</p> */}
              <Link to="/bookings" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/649/649931.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>BOOKINGS</span>}
                </li>
              </Link>
              <Link to="/transation" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9292/9292388.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>TRANSATIONS</span>}
                </li>
              </Link>
              <Link to="/customers" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
                    alt=""
                    width="26px"
                  />{" "}
                  {!menuCollapse && <span>CUSTOMERS</span>}
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
                  {!menuCollapse && <span>OWNERS</span>}
                </li>
              </Link>
              <Link to="/payoutrequests" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3110/3110884.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>PAYOUT REQUESTS</span>}
                </li>
              </Link>
              <Link to="/tax" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3110/3110884.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>TAX</span>}
                </li>
              </Link>
              {/* <Link to="/catalog" style={{ textDecoration: "none" }}> */}
              {/* <Link>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/697/697722.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>CATALOG</span>}
                </li>
              </Link>{" "} */}
              <>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/697/697722.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && (
                    <div>
                      {" "}
                      <span onClick={() => setIsDrawerOpen(true)}>Catalog</span>
                      <Drawer
                        className="ml-12"
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                      >
                        <Box
                          p={2}
                          width="250px"
                          textAlign="left"
                          role="presentation"
                        >
                          <Typography variant="h6" component="div">
                            CataLog
                          </Typography>
                          <div className="mt-8 mb-4 ">
                            <Link to="/services">Service</Link>
                          </div>
                          <Link to="/categories">Categories</Link>
                        </Box>
                      </Drawer>
                    </div>
                  )}
                </li>
              </>
              {/* </Link> */}
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3790/3790422.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span className="text-xl">SALONS</span>}
                </li>
              </Link>
              <Link to="/configuration" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3046/3046889.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>MANAGE SERVICES</span>}
                </li>
              </Link>
              <Link to="/stylist" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>STYLIST</span>}
                </li>
              </Link>
              <Link to="/staff" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>STAFF</span>}
                </li>
              </Link>
              <Link to="/keepintouch" style={{ textDecoration: "none" }}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/554/554724.png"
                    alt=""
                    width="26px"
                  />
                  {!menuCollapse && <span>KEEP IN TOUCH</span>}
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
                  {!menuCollapse && <span>CONFIGURATION</span>}
                </li>
              </Link>
            </ul>
          </div>
        </SidebarContent>
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
    </ProSidebar>
  );
};

// const Sidebar = () => {
//   //create initial menuCollapse state using useState hook
//   const [menuCollapse, setMenuCollapse] = useState(false);

//   //create a custom function that will change menucollapse state from false to true and true to false
//   const menuIconClick = () => {
//     //condition checking to change state from true to false and vice versa
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="header flex">
//         {/* collapsed props to change menu size using menucollapse state */}
//         <ProSidebar collapsed={menuCollapse}>
//           <SidebarHeader>
//             <div className="logotext">
//               {/* small and big change using menucollapse state */}
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 <span className="logo">
//                   <img
//                     src="https://admin.spaalon.com/SpaalonLogoRed.jpg"
//                     alt=""
//                   />
//                 </span>
//               </Link>
//               <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
//             </div>
//             <div className="closemenu" onClick={menuIconClick}>
//               {/* changing menu collapse icon on click */}
//               {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape="square">
//               <MenuItem active={true} icon={<FiHome />}>
//                 Home
//               </MenuItem>
//               <MenuItem icon={<FaList />}>
//                 {" "}
//                 <Link to="/customers" style={{ textDecoration: "none" }}>
//                   <li>
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
//                       alt=""
//                       width="26px"
//                     />
//                     <span>CUSTOMERS</span>
//                   </li>
//                 </Link>
//               </MenuItem>
//               <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//               <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//               <MenuItem icon={<BiCog />}>Settings</MenuItem>
//             </Menu>
//           </SidebarContent>
//         </ProSidebar>
//       </div>
//     </>
//   );
// };

export default Sidebar;
