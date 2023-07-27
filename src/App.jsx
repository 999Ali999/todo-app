import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Paper } from "@mui/material";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import EditSidebar from "./components/EditSidebar";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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
  const [dataFromChild, setDataFromChild] = useState("null");
  const [selectedTodo, setSelectedTodo] = useState("choose a todo");

  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      querySnapshot.forEach((doc) => {
        if (doc.id === dataFromChild) {
          setSelectedTodo(doc.data());
        }
      });
    };
    fetchData();
  }, [dataFromChild]);

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
          <Header onClick={toggleTheme} />
          <Sidebar />
          <Main onDataFromChild={handleDataFromChild} />
          <EditSidebar key={selectedTodo.id} title={selectedTodo.title} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
