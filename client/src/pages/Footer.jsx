import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Typography variant="h8" component="div" sx={{ flexGrow: 1 }} fontWeight='500'>
                Criado por Tiago Machado
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h8" component="div" sx={{ flexGrow: 1 }} fontWeight='500'>
                  2022
                </Typography>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
