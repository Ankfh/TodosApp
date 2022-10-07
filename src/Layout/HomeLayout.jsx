import { Box } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import TopBar from "../components/TopBar";
import LeftBar from "../components/LeftBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box 
    bgcolor={'#939599'}
    minHeight={'100vh'}
    >
      <TopBar />

      <Stack
        direction="row"
        justifyContent="space-between"
        //  alignItems="center"
        spacing={1}
      >
        <Box
        flex={1}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        >
          <LeftBar />
        </Box>
        <Box
        flex={3}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeLayout;
