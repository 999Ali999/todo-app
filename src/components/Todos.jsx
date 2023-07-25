import { Box, Paper } from "@mui/material";
import React, { useRef, useState } from "react";
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

const Todos = ({ title }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted((prevState) => !prevState);
  };

  return (
    <Box sx={{ paddingTop: "15px", borderRadius: "5px" }}>
      <Paper elevation={3}>
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
                  onClick={handleToggle}
                  edge="start"
                  icon={<RadioButtonUncheckedRoundedIcon />}
                  checkedIcon={<CheckCircleOutlinedIcon />}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  sx={{
                    textDecoration: completed ? "line-through" : "none",
                  }}
                  variant="subtitle2"
                  textTransform={"none"}
                >
                  {title}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Todos;
