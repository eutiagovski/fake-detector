import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Link } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="lg">
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Classificador FakeNews
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                  Classificador
                </Typography> */}
                <Typography variant="h8" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                  <Link href='https://github.com/eutiagovski/fake-detector' target='_blank' sx={{color: 'white'}}>Sobre</Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
