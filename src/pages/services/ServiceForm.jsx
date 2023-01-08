import React from "react";
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

import MenuItem from "@mui/material/MenuItem";

const ServiceForm = () => {
  const initial = JSON.parse(sessionStorage.getItem("draftail:content"));
  const onSave = (content) => {
    console.log("saving", content);
    sessionStorage.setItem("draftail:content", JSON.stringify(content));
  };
  return (
    <div className="mt-8 p-2">
      <h1 className="text-2xl">New Services</h1>
      <div className="my-4 p-2 flex">
        <div className="w-[70%]  p-4 m-2 bg-white  rounded">
          <h2 className="font-semibold text-xl p-2">General Information</h2>
          <hr />
          <div className="my-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>
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
          />
        </div>
        <div className="bg-white rounded  w-[30%] p-4 m-2 h-[70%]">
          <h2 className="font-semibold text-xl p-2">Visibility</h2>
          <hr />{" "}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Visible"
            />
            <FormControlLabel
              value="Hidden"
              control={<Radio />}
              label="Hidden"
            />
          </RadioGroup>
          <a href="" className="underline text-orange-400 my-4">
            Set Publication date
          </a>
        </div>
      </div>
      <div className="my-4 p-4 ml-[1rem]   w-[67%]  bg-white rounded">
        <h1 className="text-xl my-2 text-semibold "> Organize Service</h1>
        <hr />{" "}
        <div className="my-8">
          <TextField
            className="w-full"
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            variant="outlined"
            // size="large"
          >
            {[
              { value: "body scrup", label: "body scrup" },
              { value: "by Bleach", label: "by Bleach" },
              { value: "Bleach", label: "Bleach" },
              { value: "body scrup", label: "body scrup" },
              { value: "body scrup", label: "body scrup" },
            ].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>{" "}
        <hr />
        <div className="my-8">
          <TextField
            className="w-full"
            id="standard-select-currency"
            select
            label="Categories"
            defaultValue="EUR"
            variant="outlined"
            // size="large"
          >
            {[
              { value: "body scrup", label: "body scrup" },
              { value: "by Bleach", label: "by Bleach" },
              { value: "Bleach", label: "Bleach" },
              { value: "body scrup", label: "body scrup" },
              { value: "body scrup", label: "body scrup" },
            ].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>{" "}
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

export default ServiceForm;
