import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import MainHeader from "./MainHeader";

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <MainHeader />
    </Box>
  );
};

export default Main;
