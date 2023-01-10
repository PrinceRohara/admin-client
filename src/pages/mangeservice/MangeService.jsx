import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MangeService = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const currencies = [
    {
      value: "USD",
      label: "Jackie",
    },
    {
      value: "EUR",
      label: "Tom",
    },
    {
      value: "BTC",
      label: "kim ",
    },
    {
      value: "JPY",
      label: "Bruce",
    },
  ];
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer bg-[#F1F6F6]">
          <Navbar />
          <div className="p-4 m-4">
            <h1 className="text-2xl p-1 m-2">Manage Services</h1>
            <div className="space-x-12 flex">
              <div className="bg-white">
                <TextField
                  id="outlined-select-currency"
                  className="w-72"
                  select
                  label=""
                  color="warning"
                  size="normal"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="bg-white">
                <TextField
                  id="outlined-select-currency"
                  select
                  className="w-72"
                  label=""
                  color="warning"
                  size="normal"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
          <div className="w-full p-4  ml-12">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 1080 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                rowSpacing={2}
                centered
              >
                <Tab label="Face" />
                <Tab label="Men" />
                <Tab label="Children" />
                <Tab label="Spa" />
                <Tab label="Nails" />
                <Tab label="Hair" />
                <Tab label="Women" />
                <Tab label="Body  " />
                <Tab label="Men" />
                <Tab label="Item Two" />
                <Tab label="Hair" />
                <Tab label="Women" />
              </Tabs>
            </Box>
          </div>
          <div className="float-right p-2 mt-2 mr-24  space-x-4">
            {" "}
            <TextField
              id="filled-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              className="w-48"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="error">
              Expand All
            </Button>
            <Button variant="contained" color="error">
              Edit
            </Button>
          </div>{" "}
          <div className="my-20 p-4 mx-8 ">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Hair Cut</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Hair Cut</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Hair Cut</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Hair Cut</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MangeService;
