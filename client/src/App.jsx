import { Box, Container, CssBaseline } from "@mui/material";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <Navbar />
        <Container maxWidth="lg">
          <Header />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
