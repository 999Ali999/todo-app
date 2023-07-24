import * as React from "react";

import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import AppsIcon from "@mui/icons-material/Apps";

export default function MainHeader() {
  const getFormattedDate = () => {
    const options = {
      weekday: "long", // Full name of the day of the week (e.g., Monday, Tuesday)
      month: "long", // Full name of the month (e.g., January, February)
      day: "numeric", // Numeric day of the month (e.g., 1, 2, 3)
    };

    const today = new Date();
    return today.toLocaleString(undefined, options);
  };

  const formattedDate = getFormattedDate();

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box gap={1.5} sx={{ display: "flex", alignItems: "center" }}>
          <LightModeOutlinedIcon />
          <Typography variant="h6" textTransform={"none"}>
            My Day
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          gap={1.5}
        >
          <Button
            color="inherit"
            size="small"
            variant="text"
            startIcon={<SwapVertOutlinedIcon />}
          >
            <Typography variant="subtitle1" textTransform={"none"}>
              Sort
            </Typography>
          </Button>
          <Button
            color="inherit"
            size="small"
            variant="text"
            startIcon={<AppsIcon />}
          >
            <Typography variant="subtitle1" textTransform={"none"}>
              Group
            </Typography>
          </Button>
          <Button
            color="inherit"
            size="small"
            variant="text"
            startIcon={<DeleteIcon />}
          >
            <Typography variant="subtitle1" textTransform={"none"}>
              Delete
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography textTransform={"none"} variant="caption" color={"GrayText"}>
          {formattedDate}
        </Typography>
      </Box>
    </Container>
  );
}
