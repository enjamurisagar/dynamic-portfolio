import React, { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import "./index.css";
import "./fonts/Salsa-Regular.ttf";

import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const mode = useSelector((state: any) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode) as any), [mode]);

  const linkArray = [0, 0, 0];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* main */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* wrapper */}
        <Box
          display="flex"
          width={{ xs: "100%", lg: "75%" }}
          height={{ xs: "80vh", lg: "90vh" }}
          // bgcolor={"rgba(0,0,0,1)"}
          // sx={{ border: 1 }}
        >
          {/* navbar */}
          <Box
            sx={{
              width: { xs: "10%", lg: "5%" },
              // border: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Navbar />
          </Box>

          {/* middle wires */}
          <Box
            width="5%"
            display="grid"
            alignItems="space-between"
            // bgcolor="pink"
          >
            <Box
              sx={
                {
                  // height: "%",
                  // backgroundColor: "#000",
                }
              }
            ></Box>
            {linkArray.map((item, i) => (
              <Box
                sx={{
                  height: "3%",
                  backgroundColor: mode === "light" ? "#000" : "#fff",
                }}
              ></Box>
            ))}
          </Box>

          {/* all routes */}
          <Box
            sx={{
              width: { xs: "80%", lg: "90%" },

              // bgcolor: "green",
            }}
          >
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
