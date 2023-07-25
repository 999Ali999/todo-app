import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export default function EditSidebarOptions() {
  return (
    <List disablePadding>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <StarOutlineRoundedIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemIcon>
            <Checkbox
              edge="start"
              icon={<RadioButtonUncheckedRoundedIcon />}
              checkedIcon={<CheckCircleOutlinedIcon />}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle2" textTransform={"none"}>
              "title of todo"
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
