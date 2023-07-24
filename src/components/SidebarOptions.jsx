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
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle1" textTransform={"none"}>
              {text}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarOptions;
