import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

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
  const [theme, setTheme] = useState(darkTheme); // Initial theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Header onClick={toggleTheme} />
        <Sidebar />
        <Main />
      </Box>
    </ThemeProvider>
  );
};

export default App;
