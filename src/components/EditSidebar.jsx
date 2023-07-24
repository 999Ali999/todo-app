import React from "react";

import Drawer from "@mui/material/Drawer";
import { Box, Toolbar } from "@mui/material";
import SidebarOptions from "./SidebarOptions";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditSidebarOptions from "./EditSidebarOptions";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FileUpload from "./FileUpload";
import AddNote from "./AddNote";
import DueDate from "./DueDate";

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
        {/* <SidebarOptions
          icon={<CalendarMonthOutlinedIcon />}
          text={"Add due date"}
        /> */}
        <DueDate />
        <SidebarOptions icon={<SellOutlinedIcon />} text={"Pick a category"} />
        <FileUpload />
        <AddNote />
      </Box>
    </Drawer>
  );
};

export default EditSidebar;
