import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, CssBaseline, Paper } from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import EditSidebar from "./components/EditSidebar";

// Create your light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [theme, setTheme] = useState(lightTheme); // Initial theme
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ minHeight: "100vh" }} elevation={1}>
        <Box sx={{ display: "flex" }}>
          {/* <Header onClick={toggleTheme} /> */}
          <Header onClick={() => console.log(dataFromChild)} />
          <Sidebar />
          <Main onDataFromChild={handleDataFromChild} />
          <EditSidebar title={"a"} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
