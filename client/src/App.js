import { Grid, Typography, Box, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function App() {
  const [values, setValues] = useState({ news: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", values.news);

    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setPrediction(data);
      });
  };

  return (
    <Grid container direction="column">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Fato ou Fake?</Typography>
        <Typography variant="article">
          Diariamente somos bombardeados por notícias de diversos lugares e sobre diversos conteúdos. 
        </Typography>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Box component={Paper} p={2} sx={{ alignItems: "center" }}>
          <Box mt={2}>
            <Typography variant="article" mb={4}>
              Insira o texto da notícia no campo abaixo para verificar a
              veracidade da informação:
            </Typography>
          </Box>
          <TextField
            size="small"
            fullWidth
            sx={{ mt: 2 }}
            label="Titulo da Notícia"
            shrink
          />
          <TextField
            size="small"
            fullWidth
            sx={{ mt: 2 }}
            label="Link da Notícia"
            shrink
          />

          <TextField
            size="small"
            fullWidth
            sx={{ mt: 2 }}
            rows={10}
            multiline
            label="Conteúdo da Notícia"
            shrink
            mb={2}
            name="news"
            onChange={handleChange}
          />
          <Box mt={2}>
            <Button
              align="center"
              fullWidth
              variant="contained"
              required
              onClick={handleSubmit}
            >
              Verificar
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: "100vh", m: 4 }}>
        <Typography variant="h3" mb={2}>
          MOTIVAÇÃO
        </Typography>
        <Typography>TEXTO MOTIVAÇÃO</Typography>
      </Box>
    </Grid>
  );
}

export default App;
