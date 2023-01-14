import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { orange } from "@mui/material/colors";

export const UpdateSalon = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [salonType, setSalonType] = useState([]);
  const [shopDetails, setShopDetails] = useState([]);
  const [formData, setFormData] = useState(null);
  const [shopAddressData, setShopAddressData] = useState(null);
  const [amenities, setAmenities] = useState(null);
  const [shopTiming, setShopTiming] = useState([]);
  const [timing, setTiming] = useState();

  function createData(day, calories, fat, time, closingTime) {
    return { day, calories, fat, time, closingTime };
  }

  const fetchApi = async () => {
    const response = await axios.get(
      "https://spaalon.harij.in/api/backend/ShopType"
    );
    console.log(response.data.shoptype);
    setSalonType(response.data.shoptype);
  };
  const fetchApi1 = async () => {
    const response = await axios({
      method: "post",
      url: "https://spaalon.harij.in/api/backend/ShopDetail",
      data: {
        shop_id: 1,
      },
    });
    console.log(response, "shops");
    setShopDetails(response.data);
    setFormData(response.data.shopinfo);
    setAmenities(response.data.amenity);
    setShopAddressData(response.data.shopaddress);
    setShopTiming(response.data.shoptiming);
  };
  useEffect(() => {
    fetchApi();
    fetchApi1();
  }, []);
  const handleChange = (newValue) => {
    setTiming(newValue);
  };
  const rows = [
    createData(
      shopTiming[0]?.day,
      159,
      6.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[1]?.day,
      237,
      9.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[2]?.day,
      262,
      16.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[3]?.day,
      305,
      3.7,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[4]?.day,
      356,
      16.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[5]?.day,
      356,
      16.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
    createData(
      shopTiming[6]?.day,
      356,
      16.0,
      shopTiming[0]?.opening_time,
      shopTiming[0]?.closing_time
    ),
  ];

  console.log(shopDetails, "de");
  console.log(formData, "form");
  console.log(shopTiming, "timing");
  return (
    <div className="mt-8 p-4">
      <div className="flex ">
        <h1 className="text-2xl">Update Salon</h1>{" "}
        <div className="p-2 flex ml-[45rem]">
          <FormGroup className="ml-12">
            <FormControlLabel
              label="Active"
              control={<Switch defaultChecked {...label} color="warning" />}
            />
          </FormGroup>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </div>
      </div>

      <div className="p-4 my-2 mx-1 bg-white rounded">
        <h1>General Information</h1>
        <hr />
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            // label="Salon Name"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ shop_name: e.target.value })}
            value={formData && formData?.shop_name}
          />
          <TextField
            id="outlined-basic"
            // label="Email"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ shop_email: e.target.value })}
            value={formData && formData?.shop_email}
          />
          <TextField
            id="outlined-basic"
            // label="Discount"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ service_discount: e.target.value })}
            value={formData && formData?.service_discount}
          />
          <TextField
            id="outlined-basic"
            // label="Discount"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ shop_discount: e.target.value })}
            value={formData && formData?.shop_discount}
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            // label="latitude"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ latitude: e.target.value })}
            value={formData && formData?.latitude}
          />
          <TextField
            id="outlined-basic"
            // label="longitude"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ longitude: e.target.value })}
            value={formData && formData?.longitude}
          />
          <TextField
            id="outlined-basic"
            label="taxId"
            className="w-[22%]"
            variant="outlined"
          />{" "}
          <span className="ml-8 p-2">Featured</span>
          <Switch {...label} defaultChecked />
        </div>{" "}
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            label="phone1"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ phone1: e.target.value })}
            value={formData && formData?.phone1}
          />
          <TextField
            id="outlined-basic"
            label="phone2"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ phone2: e.target.value })}
            value={formData && formData?.phone2}
          />
          <TextField
            id="outlined-basic"
            // label="mobile1"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ mobile1: e.target.value })}
            value={formData && formData?.mobile1}
          />
          <TextField
            id="outlined-basic"
            // label="shop_capacity"
            className="w-[22%]"
            variant="outlined"
            onChange={(e) => setFormData({ shop_capacity: e.target.value })}
            value={formData && formData?.shop_capacity}
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            // label="description"
            className="w-[95%]"
            variant="outlined"
            multiline
            rows={8}
            onChange={(e) => setFormData({ description: e.target.value })}
            value={formData && formData?.description}
          />
        </div>
        <div className="ml-4">
          <Button variant="contained" color="error">
            Save
          </Button>
        </div>
      </div>

      {/* second form  */}
      <div className="p-4 my-8 mx-1  bg-white rounded">
        <h1>General Information</h1>
        <hr />
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            // label="shop Address"
            className="w-[30%]"
            variant="outlined"
            onChange={(e) =>
              setShopAddressData({ street_address_1: e.target.value })
            }
            value={shopAddressData && shopAddressData?.street_address_1}
          />
          <TextField
            id="outlined-basic"
            // label="shop Address 2 "
            className="w-[30%]"
            variant="outlined"
            onChange={(e) =>
              setShopAddressData({ street_address_2: e.target.value })
            }
            value={shopAddressData && shopAddressData?.street_address_2}
          />
          <TextField
            id="outlined-basic"
            // label="Country"
            className="w-[30%]"
            variant="outlined"
            onChange={(e) => setShopAddressData({ country: e.target.value })}
            value={shopAddressData && shopAddressData?.country}
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            // label="State"
            className="w-[30%]"
            variant="outlined"
            onChange={(e) => setShopAddressData({ state: e.target.value })}
            value={shopAddressData && shopAddressData?.state}
          />
          <TextField
            id="outlined-basic"
            // label="City"
            className="w-[30%]"
            variant="outlined"
            onChange={(e) => setShopAddressData({ city: e.target.value })}
            value={shopAddressData && shopAddressData?.city}
          />
          <TextField
            id="outlined-basic"
            // label="Postal Code"
            className="w-[30%]"
            variant="outlined"
            onChange={(e) =>
              setShopAddressData({ postal_code: e.target.value })
            }
            value={shopAddressData && shopAddressData?.postal_code}
          />
        </div>
        <div className="ml-4">
          <Button variant="contained" color="error">
            Save
          </Button>
        </div>
      </div>
      <div className="flex p-4 m-2 my-8 mx-1  bg-white rounded space-x-[50rem]">
        <h1>Cover Image (optional)</h1>
        <button className="text-orange-500 font-bold hover:bg-orange-100 p-1 ">
          UPLOAD IMAGE
        </button>
      </div>
      <div className="flex p-4 m-2 my-8 mx-1  bg-white rounded space-x-[48.5rem]">
        <h1>Portfolio Images (optional)</h1>
        <button className="text-orange-500 font-bold hover:bg-orange-100 p-1 ">
          UPLOAD IMAGE
        </button>
      </div>
      <div className="flex space-x-3 rounded ">
        <div className="p-4 bg-white w-[50%]">
          <h3 className="text-xl font-bold">Amenities</h3>
          <hr />
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">WIFI</label>
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">PARKING</label>
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">TV</label>
          <button className="bg-orange-600 text-white ml-48 p-2 mt-4 rounded">
            Save
          </button>
        </div>
        <div className="p-4 bg-white w-[50%]">
          <h3 className="text-xl font-bold">Salon Type</h3>
          <hr />
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">{salonType && salonType[0]?.shop_type}</label>
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">{salonType && salonType[1]?.shop_type}</label>
          <Checkbox
            {...label}
            sx={{
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <label htmlFor="">{salonType && salonType[2]?.shop_type}</label>
          <button className="bg-orange-600 text-white my-4  ml-48 p-2  mt-4 rounded">
            Save
          </button>
        </div>
      </div>
      <div className="bg-white rounded mt-8 p-4">
        <h1 className="text-xl font-bold p-2 mb-4">Add Timings</h1>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Days</TableCell>
                <TableCell align="">Open/Close</TableCell>
                <TableCell align="">Peak Day</TableCell>
                <TableCell align="">Opening Time</TableCell>
                <TableCell align="">Closing Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="">
                    {" "}
                    <Checkbox
                      {...label}
                      sx={{
                        "&.Mui-checked": {
                          color: orange[800],
                        },
                      }}
                      defaultChecked
                    />
                  </TableCell>
                  <TableCell align="">
                    {" "}
                    <Checkbox
                      {...label}
                      sx={{
                        "&.Mui-checked": {
                          color: orange[800],
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="">
                    <input type="time" name="" value={row.time} />
                  </TableCell>
                  <TableCell align="">{row.closingTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <button className="p-2 bg-orange-600 text-white my-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};
