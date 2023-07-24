import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SidebarOptions from "./SidebarOptions";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditSidebarOptions from "./EditSidebarOptions";

const drawerWidth = 360;

const EditSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <EditSidebarOptions />
        <SidebarOptions icon={<AddRoundedIcon />} text={"Add step"} />
      </Box>
    </Drawer>
  );
};

export default EditSidebar;
