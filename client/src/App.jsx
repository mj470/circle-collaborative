import { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Vite + React
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <TextField>
            Edit <code>src/App.jsx</code> and save to test HMR
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </TextField>
        </div>
      </Typography>
    </Container>
  );
}

export default App;
