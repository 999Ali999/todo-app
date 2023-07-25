import { useRef } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Card, Grid, Paper, TextField } from "@mui/material";
import MainHeader from "./MainHeader";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Main = () => {
  const textField = useRef(null);

  const handleClick = () => {
    textField.current.focus();
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <MainHeader />
      <Box sx={{ paddingTop: "24px" }}>
        <Paper elevation={3} sx={{ padding: "10px 8px" }}>
          <Grid container>
            <Grid item xs={1} sx={{ display: "flex" }}>
              <Button onClick={handleClick} size="small" variant="outlined">
                <AddRoundedIcon />
              </Button>
            </Grid>
            <Grid item xs={11} sx={{ paddingLeft: "8px" }}>
              <TextField
                ref={textField}
                id="outlined-basic"
                label="Add a task"
                variant="outlined"
                fullWidth
                size="small"
                autoComplete="off"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Main;
