import React from "react";
import {
  Box,
  Typography,
  Divider,
  Container,
  TextField,
  Button,
  Link,
  CircularProgress,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const checkNews = () => {
    const formData = new FormData();
    formData.append("text", text);

    setResult(false);
    setPending(true);
    setError(null);

    fetch("/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setPending(false);
        window.location.href = "#resultado";
      })
      .catch((e) => {
        setError("Desculpe, mas algo deu errado... Já avisamos o suporte.");
        setPending(false);
      });
  };

  useEffect(() => {
    text.length <= 1 && setResult(false);
  }, [text]);
  return (
    <>
      <Toolbar />
      <Box mb={4} sx={{ mb: 2 }}>
        <Typography variant="h4" pt={4} mb={2} align="center" mx={10}>
          Classificador Fake News
        </Typography>
        <Divider mb={2} />
        <Container maxWidth="md" sx={{ fontSize: 14 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mb: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" pt={4}>
              O que é este projeto?
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" align="justify">
                Este projeto é uma prova de conceito sobre o uso da Inteligência
                Artificial para classificação de notícias brasileiras.
                Utilizando técnicas de aprendizado de máquina, treinamos um
                modelo com mais de 5 mil notícias verdadeiras e falsas, e
                obtemos desse treinamento características que possibilitam a
                classificação de um novo texto.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h6" pt={4}>
                Como funciona?
              </Typography>
              <Typography variant="body2" align="justify">
                Nosso sistema irá processar o texto da notícia, extraindo
                características semânticas e de escrita, como palavras
                utilizadas, classes gramaticais mais frequentes e intenção geral
                do texto. Depois, essas características serão passadas para o
                modelo já treinado, e ele irá retornar a probabilidade do texto
                ser uma fake news.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h6" pt={4}>
                Como utilizar?
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight="bolder"
                pb={2}
                align="justify"
              >
                Copie o texto completo da notícia, cole no campo abaixo e clique
                em "Verificar". Para um melhor funcionamento do algoritmo,
                sugerimos a utilização do texto completo da notícia, com no
                mínimo 100 palavras.
              </Typography>
              <TextField
                error={error}
                placeholder="Insira aqui o texto completo da notícia"
                label="Insira o Texto da Notícia"
                helperText={error}
                variant="standard"
                multiline
                rows={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={pending}
              />
              <Box mt={1} mb={2} align="center" width="100%">
                <Button
                  variant="contained"
                  disabled={pending}
                  onClick={checkNews}
                  fullWidth
                >
                  {pending ? <CircularProgress /> : <>Verificar</>}
                </Button>
              </Box>
            </Box>

            {result && (
              <div id="#resultado">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: 2,
                    gap: 1,
                  }}
                >
                  <Typography variant="h6" pt={4}>
                    Resultado:
                  </Typography>
                  <Typography
                    variant="h6"
                    color={result.result === "verdadeira" ? "green" : "red"}
                    align="justify"
                  >
                    Esta notícia parece ser {result.result}!
                  </Typography>
                  <Typography>
                    Confiança: {parseFloat(result.confiance) * 100}%
                  </Typography>
                </Box>
              </div>
            )}

            <Divider />
            <Box
              sx={{ mb: 4, gap: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" pt={4}>
                Saiba mais
              </Typography>
              <Typography variant="subtitle2" mb={1} align="justify">
                Confira o estudo e o estado atual do desenvolvimento deste
                projeto na íntegra:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="https://github.com/eutiagovski/fake-detector/relatorio-executivo/"
                  target="_blank"
                >
                  - Veja aqui o relatório executivo.{" "}
                </Link>
                <Link
                  href="https://github.com/eutiagovski/fake-detector"
                  target="_blank"
                >
                  - Veja aqui o github do projeto.
                </Link>
                <Link href="https://github.com/eutiagovski" target="_blank">
                  - Conheça outros projetos do autor.{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
