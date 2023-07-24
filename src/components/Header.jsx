import React from "react";
import { Button, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import SearchBar from "./SearchBar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = ({ onClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
      }}
    >
      <Toolbar>
        <Grid container>
          <Grid sx={{ display: "flex", alignItems: "center" }} item xs={4}>
            <Typography variant="h6" noWrap component="div">
              To Do
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={4}
          >
            <SearchBar />
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            item
            xs={4}
            spacing={0.5}
          >
            <Grid item>
              <Tooltip title="Change Appearance">
                <Button
                  onClick={onClick}
                  sx={{ borderRadius: "5px", color: "#fff" }}
                  size="large"
                >
                  <Brightness4Icon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Settings">
                <Button
                  sx={{ borderRadius: "5px", color: "#fff" }}
                  size="large"
                >
                  <SettingsIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Account Manager">
                <Button
                  sx={{ borderRadius: "5px", color: "#fff" }}
                  size="large"
                >
                  <AccountCircle />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
