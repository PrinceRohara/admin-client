import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import { ENTITY_TYPE } from "draftail";
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail";
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
        <div className="bg-white rounded w-[30%] p-4 m-2 ">
          <h2 className="font-semibold text-xl p-2">Visibility</h2>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
