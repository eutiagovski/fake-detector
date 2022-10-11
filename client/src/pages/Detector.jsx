import { useState } from "react";
import { Box, Typography, Link, TextField, Button, Paper } from "@mui/material";

const Detector = () => {
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

    fetch("/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setPrediction(data);
      });
  };
  return (
    <div>
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
                  <Typography variant="span" mb={2}>
                    Contador de palavras: {values.news.split(" ").length - 1}
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
                      color: prediction.result === "falsa" ? "red" : "green",
                    }}
                  >
                    Essa notícia parece ser {prediction.result}
                  </Typography>

                  {prediction.result === "verdadeira" ? (
                    <Typography mb={2}>
                      Legal! Esta notícia parece confiável.
                    </Typography>
                  ) : (
                    <Typography mb={2}>
                      Desconfie da fonte e dos autores desta notícia. Eles
                      parecem estar transmitindo uma informação falsa.
                    </Typography>
                  )}
                  <Typography mb={4}>
                    Confiança do algoritmo: {prediction.confiance}%
                  </Typography>
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
                      align="right"
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
    </div>
  );
};

export default Detector;
