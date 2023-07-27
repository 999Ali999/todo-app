import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MainHeader from "./MainHeader";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { app } from "../firebaseConfig";
import Todos from "./Todos";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Main = ({ onDataFromChild }) => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState(null);

  const db = getFirestore(app);

  useEffect(() => {
    async function fetchData() {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await delay(590); // each 1000ms is 1 second

      const todosRef = collection(db, "todos");
      const querySnapshot = await getDocs(todosRef);
      let todos = [];
      querySnapshot.forEach((doc) => {
        return todos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setData(todos);
    }
    fetchData();
  }, []);

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title: input,
        discretion: "",
        category: ["Green", "Yellow", "Orange", "Red"],
        steps: [null],
        favourite: false,
        note: "",
        "due date": "",
      });
      alert("sucess");
    } catch (error) {
      console.log(error);
    }
  };

  const setDataFromChildAndPassToApp = (todo) => {
    onDataFromChild(todo);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <MainHeader />
      <Divider sx={{ paddingTop: "15px" }} />
      <Box sx={{ paddingTop: "15px" }}>
        <Paper elevation={3} sx={{ padding: "10px 11px", borderRadius: "4px" }}>
          <Grid container>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
              }}
            >
              <Button onClick={handleSubmit} size="small" variant="outlined">
                <AddRoundedIcon fontSize="medium" />
              </Button>
            </Grid>
            <Grid item xs={11} sx={{ paddingLeft: "10px" }}>
              <TextField
                onChange={handleInput}
                name="title"
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
      {data ? (
        <>
          {data.map((todo) => (
            <Todos
              key={todo.id}
              title={todo.data.title}
              todoClicked={() => setDataFromChildAndPassToApp(todo.id)}
            />
          ))}
        </>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <LinearProgress
              color="success"
              sx={{
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            />
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              variant="caption"
            >
              Loading todo list
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Main;
