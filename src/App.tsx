// import { Stack, Text, Button } from "@mantine/core";
// import { ThemeProvider } from "./ThemeProvider";
import { HeaderSimple } from "./components/Header";
import { FooterSocial } from "./components/Footer";
import { NavbarSimple } from "./components/Navbar";
// import { Container } from "@mantine/core";
// dark mode
import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

export default function App() {
  // dark mode
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          {/* <Container size="xl"> */}
            <HeaderSimple
              links={[
                { link: "about", label: "About Me" },
                // { link: "#", label: "Singin/SignUp" },
              ]}
            />
            <NavbarSimple />

            <FooterSocial />
          {/* </Container> */}
        </ColorSchemeProvider>
    </MantineProvider>
  );
}
