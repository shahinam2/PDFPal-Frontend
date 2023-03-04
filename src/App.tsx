// import * as React from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import ActionsGrid from "./components/Cards";
import PdfToText from "./routes/PdfToText";
import MultilineToPdf from "./routes/MultilineToPdf";
import MergePdf from "./routes/MergePdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ActionsGrid />,
  },
  {
    path: "/pdf-to-text",
    element: <PdfToText />,
  },
  {
    path: "/MultilineToPdf",
    element: <MultilineToPdf />,
  },
  {
    path: "/MergePdf",
    element: <MergePdf />,
  }
]);

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
        <RouterProvider router={router} />
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
