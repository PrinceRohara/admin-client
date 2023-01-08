import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import { ENTITY_TYPE } from "draftail";
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

const SingleCategoryForm = () => {
  const columns = [
    { field: "firstName", headerName: "Category Name", width: 770 },
    { field: "id", headerName: "ID", width: 170 },
    { field: "lastName", headerName: "No. of Services", width: 130 },
    ,
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const initial = JSON.parse(sessionStorage.getItem("draftail:content"));
  const onSave = (content) => {
    console.log("saving", content);
    sessionStorage.setItem("draftail:content", JSON.stringify(content));
  };
  return (
    <div className="mt-8 p-2">
      <h1 className="text-2xl">Balayage</h1>
      <div className="my-4 p-2 flex">
        <div className="w-[100%]  p-4  bg-white  rounded">
          <h2 className="font-semibold text-xl p-2">General Information</h2>
          <hr />
          <div className="my-4 flex space-x-4 p-1">
            <TextField
              className="w-[70%] p-2"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <div className=" ">
              <span>Featured</span>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="Hidden"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="">
            <DraftailEditor
              className="mt-4"
              rawContentState={initial || null}
              onSave={onSave}
              blockTypes={[
                { type: BLOCK_TYPE.HEADER_ONE },
                { type: BLOCK_TYPE.HEADER_TWO },
                { type: BLOCK_TYPE.HEADER_THREE },
                { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
              ]}
              entityTypes={[
                {
                  type: ENTITY_TYPE.LINK,
                  // [...]
                },
              ]}
              inlineStyles={[
                { type: INLINE_STYLE.BOLD },
                { type: INLINE_STYLE.ITALIC },
              ]}
            />{" "}
          </div>
        </div>
      </div>
      <div className="my-4 p-4    w-[100%]  bg-white rounded">
        <div className="flex space-x-[55rem] ">
          <h1 className="text-xl my-2 font-bold"> Images</h1>
          <div className="text-orange-600 p-1  hover:bg-orange-100 rounded">
            <Button color="error" variant="outline" component="label">
              Upload Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
        </div>
        <hr />
        <div className="my-8 text-center items-center">
          <Button color="error" variant="outline" component="label">
            <img
              width={88}
              src="https://cdn-icons-png.flaticon.com/512/1589/1589574.png"
              alt=""
            />
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
      </div>{" "}
      <div className="bg-white p-4 rounded-md">
        <button>Subcategories</button>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      <div className="mt-36 ">
        <button className="bg-orange-600 fixed  z-30 m-2 p-2 rounded text-white uppercase ">
          delete
        </button>
        <div className=" ">
          <button
            disabled
            className=" float-right p-2 m-2  bg-orange-700 opacity-20 uppercase text-white rounded "
          >
            Save
          </button>
          <button className="text-gray-500 float-right p-2 m-2  ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryForm;
