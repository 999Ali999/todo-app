import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Box, Toolbar } from "@mui/material";
import SidebarOptions from "./SidebarOptions";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const drawerWidth = 290;

const list = ["My Day", "Important", "Planned", "Assigned to me", "Tasks"];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
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
        <SidebarOptions icon={<LightModeOutlinedIcon />} text={"My Day"} />
        <SidebarOptions icon={<StarOutlineRoundedIcon />} text={"Important"} />
        <SidebarOptions icon={<CalendarMonthOutlinedIcon />} text={"Planned"} />
        <SidebarOptions
          icon={<PermIdentityOutlinedIcon />}
          text={"Assigned to me"}
        />
        <SidebarOptions icon={<HomeRoundedIcon />} text={"Tasks"} />
        <Divider />
        <SidebarOptions icon={<AddRoundedIcon />} text={"New list"} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
