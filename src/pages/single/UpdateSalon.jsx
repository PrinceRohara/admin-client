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
export const UpdateSalon = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="mt-8 p-4">
      <div className="flex ">
        <h1 className="text-2xl">Update Salon</h1>{" "}
        <div className="p-2 flex ml-[45rem]">
          <FormGroup className="ml-12">
            <FormControlLabel
              label="Label"
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
            label="Salon Name"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Discount"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Discount"
            className="w-[22%]"
            variant="outlined"
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            label="latitude"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="longitude"
            className="w-[22%]"
            variant="outlined"
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
          />
          <TextField
            id="outlined-basic"
            label="phone2"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="mobile1"
            className="w-[22%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="shop_capacity"
            className="w-[22%]"
            variant="outlined"
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            label="description"
            className="w-[95%]"
            variant="outlined"
            multiline
            rows={8}
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
            label="shop Address"
            className="w-[30%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="shop Address 2 "
            className="w-[30%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Country"
            className="w-[30%]"
            variant="outlined"
          />
        </div>
        <div className="p-2 m-2 space-x-4 w-[100%]">
          <TextField
            id="outlined-basic"
            label="State"
            className="w-[30%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="City"
            className="w-[30%]"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Postal Code"
            className="w-[30%]"
            variant="outlined"
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
          <Checkbox {...label} />
          <label htmlFor="">WIFI</label>
          <Checkbox {...label} />
          <label htmlFor="">PARKING</label>
          <Checkbox {...label} />
          <label htmlFor="">TV</label>
          <button className="bg-orange-600 text-white ml-48 p-2 mt-4 rounded">
            Save
          </button>
        </div>
        <div className="p-4 bg-white w-[50%]">
          <h3 className="text-xl font-bold">Salon Type</h3>
          <hr />
          <Checkbox {...label} />
          <label htmlFor="">WIFI</label>
          <Checkbox {...label} />
          <label htmlFor="">PARKING</label>
          <Checkbox {...label} />
          <label htmlFor="">TV</label>
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
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
