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

const CategoriesForm = () => {
  const initial = JSON.parse(sessionStorage.getItem("draftail:content"));
  const onSave = (content) => {
    console.log("saving", content);
    sessionStorage.setItem("draftail:content", JSON.stringify(content));
  };
  return (
    <div className="mt-8 p-2">
      <h1 className="text-2xl">Create New Category</h1>
      <div className="my-4 p-2 flex">
        <div className="w-[100%]  p-4 m-2 bg-white  rounded-md">
          <h2 className="font-semibold text-xl p-2">General Information</h2>
          <hr />
          <div className="my-4 mb-12 flex space-x-2 ">
            <TextField
              className="w-[75%]"
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
            />
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <div className="flex flex-row space-y-2">
                <FormLabel className="ml-2" id="demo-radio-buttons-group-label">
                  Featured
                </FormLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </div>
            </RadioGroup>
          </div>
          <DraftailEditor
            className="mt-4 p-2"
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
      </div>

      <div className="mt-44 ">
        <div className=" fixed ml-[60rem]">
          <button
            disabled
            className=" p-2 m-2  bg-orange-700 opacity-20 uppercase text-white rounded "
          >
            Save
          </button>
          <button className="text-gray-500 p-2 m-2  ">Back</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm;
