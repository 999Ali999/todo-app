import React, { useRef } from "react";
import { Button, ListItem, ListItemButton, Typography } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const FileUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, e.g., send it to the server, process it, etc.
    console.log("Uploaded file:", file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AttachFileOutlinedIcon />}
            fullWidth
            onClick={handleClick}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              Add file
            </Typography>
          </Button>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default FileUploadButton;
