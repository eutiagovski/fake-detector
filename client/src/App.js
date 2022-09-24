import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Link,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({ news: "" });
  const [prediction, setPrediction] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setValues({ news: "" });
    setPrediction(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", values.news);

    fetch("https://classificador-fakenews.herokuapp.com/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrediction(data);
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
          width: "100%",
        }}
      >
        <Typography variant="h1" mb={4} align="center">
          Fato ou Fake?
        </Typography>
        <Typography variant="article" align="center">
          Este projeto é um classificador que utiliza rede neural para
          reconhecer a probabilidade de uma notícia ser verdadeira ou falsa.
        </Typography>

        <Box my={4}>
          <Link href="#detector" sx={{ cursor: "pointer" }}>
            Verificar uma notícia
          </Link>
        </Box>
      </Box>

      <div id="detector">
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
          <Box
            component={Paper}
            p={2}
            sx={{ alignItems: "center", width: "80%" }}
          >
            {!prediction ? (
              <>
                <Box mt={2} sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="article" mb={4}>
                    Insira o texto da notícia no campo abaixo para verificar a
                    veracidade da informação:
                  </Typography>
                  <Typography variant="span" mb={2}>
                    *Atenção, insira o texto completo da notícia, com pelo menos
                    100 palavras.
                  </Typography>
                  <Typography variant="span" mb={2}>
                    **Textos pequenos ou incompletos tendem a resultar um falso
                    negativo.
                  </Typography>
                </Box>
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
                    disabled={values.news.split(" ").length < 100}
                  >
                    Verificar
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Typography
                    variant="h4"
                    my={4}
                    style={{
                      color: prediction.result === "Falsa" ? "red" : "green",
                    }}
                  >
                    Essa notícia parece ser {prediction.result}
                  </Typography>
                  <Typography>
                    Probabilidade de ser Verdadeira: {prediction.probTrue}%
                  </Typography>
                  <Typography mb={4}>
                    Probabilidade de ser Falsa: {prediction.probFalse}%
                  </Typography>
                  {prediction.result === "Verdadeira" ? (
                    <Typography mb={4}>Legal! Esta notícia parece confiável.</Typography>
                  ) : (
                    <Typography mb={4}>
                      Desconfie da fonte e dos autores desta notícia. Eles
                      parecem estar transmitindo uma informação falsa.
                    </Typography>
                  )}
                  <Button
                    align="center"
                    fullWidth
                    variant="contained"
                    required
                    onClick={handleReset}
                    mb={4}
                  >
                    Verificar Outra
                  </Button>
                  <Box
                    mt={4}
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link href="#como-funciona">Saiba como funciona</Link>
                    <Link
                      href="https://github.com/eutiagovski/fake-detector"
                      target="blank"
                      align='right'
                    >
                      Ver o github do projeto
                    </Link>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </div>

      <div id="como-funciona">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            p: 4,
          }}
        >
          <Typography variant="h5" my={4}>
            COMO FUNCIONA?
          </Typography>
          <Typography variant="article" m={4} mb={1} align="center">
            Nosso modelo utiliza um algoritimo de aprendizado profundo, treinado
            com mais de 19 mil notícias brasileiras divididas em diversas
            categorias.
          </Typography>
          <Typography variant="article" m={4} align="center">
            O modelo final obteve uma acurácia de 94%.
          </Typography>
        </Box>
      </div>

      <div id="footer">
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
          }}
        >
          <Typography variant="h7" mb={4} align='center'>
            MIT @{" "}
            <Link href="https://github.com/eutiagovski" sx={{color:'black'}}>
              Tiago de Oliveira Machado
            </Link>{" "}
            |{" "}
            <Link href="mailto:tiagomachadodev@gmail.com" sx={{color:'black'}}>
              tiagomachadodev@gmail.com
            </Link>
          </Typography>
        </Box>
      </div>

      {/* MOTIVAÇÃO  */}
      {/* <Box sx={{ height: "100vh", m: 4 }}>
        <Typography variant="h3" mb={2}>
          MOTIVAÇÃO
        </Typography>
        <Typography>TEXTO MOTIVAÇÃO</Typography>
      </Box> */}

      {/* SOBRE OS DADOS  */}
      {/* <Box sx={{ height: "100vh", m: 4 }}>
        <Typography variant="h3" mb={2}>
          MOTIVAÇÃO
        </Typography>
        <Typography>TEXTO MOTIVAÇÃO</Typography>
      </Box> */}
    </Grid>
  );
}

export default App;
