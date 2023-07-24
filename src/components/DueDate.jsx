import React from "react";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ListItem, ListItemButton } from "@mui/material";

const DueDate = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ width: "100%" }} />
        </LocalizationProvider>
      </ListItemButton>
    </ListItem>
  );
};

export default DueDate;
