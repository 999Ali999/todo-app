import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const SidebarOptions = ({ icon, text }) => {
  return (
    <List sx={{ padding: "5px" }}>
      <ListItem disablePadding>
        <ListItemButton sx={{ borderRadius: "5px" }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="button" textTransform={"none"}>
              {text}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarOptions;
