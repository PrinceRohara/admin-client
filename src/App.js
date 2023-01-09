import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Configuration from "./pages/configuration/Configuration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { ProductionQuantityLimits } from "@mui/icons-material";
import ProductTypes from "./components/product-types/ProductTypes";
import Navigation from "./components/navigation/Navigation";
import MiscellaneousPage from "./components/miscellaneous-page/MiscellaneousPage";
import Bookings from "./pages/bookings/Bookings";
import Transation from "./pages/transations/Transation";
import Customers from "./pages/customers/Customers";
import Owners from "./pages/owners/Owners";
import PayoutRequests from "./pages/payoutrequests/PayoutRequests";
import Tax from "./pages/Tax/Tax";
import Stylist from "./pages/stylist/Stylist";
import Stuff from "./pages/stuff/Stuff";
import KeepInTouch from "./pages/keepintouch/KeepInTouch";
import StylistForm from "./pages/stylist/StylistForm";
import StylistNew from "./pages/stylist/StylistNew";
import CreateNewStuff from "./pages/stuff/CreateNewStuff";
import OwnerForm from "./pages/owners/OwnerForm";
import OwnerNew from "./pages/owners/OwnerNew";
import SingleBooking from "./pages/bookid/SingleBooking";
import BookingId from "./pages/bookid/BookingId";
import CustomersId from "./pages/customers/CustomersId";
import TaxId from "./pages/Tax/TaxId";
import PayoutRequestDetails from "./pages/payoutrequests/PayoutRequestDetails";
import OwnerDetails from "./pages/owners/OwnerDetails";
import Catalog from "./pages/Catalog/Catalog";
import MuiDrawer from "./components/sidebar/MuiDrawer";
import Services from "./pages/services/Services";
import Categories from "./pages/categories/Categories";
import NewService from "./pages/services/NewService";
import CategoriesAdd from "./pages/categories/CategoriesAdd";
import SingleServices from "./pages/services/SingleServices";
import SignInSide from "./pages/signin/SignIn";
import SingleCategory from "./pages/categories/SingleCategory";
import MangeService from "./pages/mangeservice/MangeService";
import TaxCreate from "./pages/Tax/TaxCreate";
import AddService from "./pages/services/AddService";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="salon">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Salon" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="configuration" element={<Configuration />} />
            <Route path="signin" element={<SignInSide />} />
            <Route path="product-types" element={<ProductTypes />} />
            <Route path="product-types/add" element={<AddService />} />
            <Route path="navigation" element={<Navigation />} />
            <Route path="pages" element={<MiscellaneousPage />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="transation" element={<Transation />} />
            <Route path="customers" element={<Customers />} />
            <Route path="owners" element={<Owners />} />
            <Route path="owners/:id" element={<OwnerDetails />} />
            <Route path="owners/new" element={<OwnerNew />} />
            <Route path="payoutrequests" element={<PayoutRequests />} />
            <Route path="tax" element={<Tax />} />
            <Route path="stylist" element={<Stylist />} />
            <Route path="stylist/new" element={<StylistNew />} />
            <Route path="staff" element={<Stuff />} />
            <Route path="staff/new" element={<CreateNewStuff />} />
            <Route path="keepintouch" element={<KeepInTouch />} />
            <Route path="bookings/:id" element={<BookingId />} />
            <Route path="transation/:id" element={<BookingId />} />
            <Route path="customers/:id" element={<CustomersId />} />
            <Route path="tax/:id" element={<TaxId />} />
            <Route path="tax/add" element={<TaxCreate />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="check" element={<MuiDrawer />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<SingleServices />} />
            <Route path="services/add" element={<NewService />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<SingleCategory />} />
            <Route path="categories/add" element={<CategoriesAdd />} />
            <Route path="shop-services" element={<MangeService />} />
            <Route
              path="payoutrequests/:id"
              element={<PayoutRequestDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
