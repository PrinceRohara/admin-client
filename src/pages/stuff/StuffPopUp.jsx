import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const StuffPopUp = () => {
  const [open, setOpen] = React.useState(false);
  const data = ["name", "john", "jake"];
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="float-right  ">
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        INVIATE STAFF MEMBERS
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Invite Staff Member</DialogTitle>
        <DialogContent>
          <div className="p-2 m-2 flex space-x-4 hover:border-orange-300">
            <TextField
              className="w-[50%] p-1 ml-2"
              id="filled-basic"
              label="First Name"
              variant="outlined"
              color="warning"
            />
            <TextField
              className="w-[50%] p-1 ml-2"
              id="filled-basic"
              label="Last Name"
              variant="outlined"
              color="warning"
            />
          </div>{" "}
          <div className="p-2 m-2 flex space-x-4 hover:border-orange-300">
            <TextField
              className="w-[100%] p-1 ml-2"
              id="filled-basic"
              label="Email"
              variant="outlined"
              color="warning"
            />
          </div>
          <div>
            <span className="text-black w-[100%] ml-4 font-bold ">
              {" "}
              Staff Type
            </span>
          </div>
          <div className="p-2 m-2 flex space-x-4 hover:border-orange-300">
            <TextField
              className="w-[100%] p-1 m-2  foucs:border-orange-300"
              id="filled-select-currency"
              select
              label="Staff type *"
              defaultValue="EUR"
              color="warning"
              variant="outlined"
            >
              {data.map((option) => (
                <MenuItem value={option}>{option}</MenuItem>
              ))}
            </TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>back</Button>
          <Button onClick={handleClose}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StuffPopUp;
