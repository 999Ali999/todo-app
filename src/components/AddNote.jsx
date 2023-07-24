import { ListItem, ListItemButton, TextField } from "@mui/material";
import React from "react";

const AddNote = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <TextField
          fullWidth
          variant="outlined"
          label="Note"
          multiline
          rows={4}
          placeholder="Add note"
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AddNote;
