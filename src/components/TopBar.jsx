import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Person3Icon from "@mui/icons-material/Person3";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TopBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabcolor = {
    color: "white",
    display: {
      xs: "none",
      sm: "block",
    },

    // backgroundColor: "white",
  };
  const tabestyle = {
    // width: "100%",
  };
  const appbar = {
    backgroundColor: "#039e7b",
  };
  return (
    <div>
      <Box width={"100%"} sx={{ flexGrow: 1 }}>
        <AppBar
          sx={appbar}
          position={"fixed"}
          // position={'sticky'}
        >
          <Toolbar sx={{ display: "flex" }}>
            {/* <Box mr={5}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
            </Box> */}
            <Box
              display={"flex"}
              justifyContent="space-between"
              justifyItems={"center"}
              alignItems="center"
              width={"100%"}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                <HomeIcon />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "Block",
                    sm: "none",
                  },
                }}
              >
                <MenuIcon />
              </Box>

              <Box>
                <Person3Icon />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TopBar;
