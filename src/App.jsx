import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./firebaseConfig";

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
  const [theme, setTheme] = useState(darkTheme); // Initial theme
  const dbRef = ref(getDatabase(app));

  const click = () => {
    get(child(dbRef, `todos`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <Button onClick={click}>Ali</Button>
      </Box>
    </ThemeProvider>
  );
};

export default App;
