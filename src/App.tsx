// import * as React from 'react';
import {
  Container,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Box,
  Title,
} from "@mantine/core";
import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
// components
import { HeaderSimple } from "./components/Header";
import ActionsGrid from "./components/Cards";
import FooterSocial from "./components/Footer";

// Pages
import MultilineToPdf from "./routes/MultilineToPdf";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Container size="md">
          {/* Width: {width}, height: {height} */}
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* <Router> */}
              <HeaderSimple links={[{ link: "about", label: "About Me" }]} />
              <div>
                <Title order={1} align="center">
                  Welcome to PDFPal!
                </Title>
                <Title order={5} align="center">
                  A PDF manupulation tool
                </Title>
              </div>
              {/* <NavLink to="/">Home</NavLink> */}

              <Routes>
                {/* <Route path="/" element={<ActionsGrid />} /> */}
                <Route path="/multiline" element={<MultilineToPdf />} />
              </Routes>
              <NavLink to="/multiline"></NavLink>
              <Outlet />
              {/* <MultilineToPdf/> */}
              <ActionsGrid />
              <FooterSocial />
            {/* </Router> */}
          </Box>
        </Container>
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
