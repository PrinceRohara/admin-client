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
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="ml-[55rem] ">
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Create Menu
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create Menu</DialogTitle>
        <DialogContent>
          <div className="p-2 m-2 flex space-x-4 hover:border-orange-300">
            <TextField
              className="w-[100%] p-1 ml-2"
              id="filled-basic"
              label="Menu Title"
              variant="outlined"
              color="warning"
            />
          </div>{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>back</Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StuffPopUp;
