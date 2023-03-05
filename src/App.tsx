// components/routes
import ActionsGrid from "./components/Cards";
import MultilineToPdf from "./routes/MultilineToPdf";
import TextFileToPdf from "./routes/TextFileToPdf";
import MergePdfs from "./routes/MergePdfs";
import SplitPdf from "./routes/SplitPdf";
import RemovePdfPages from "./routes/RemovePdfPages";
import PdfToJpg from "./routes/PdfToJpg";
import Error from "./components/Error";

// Mantine imports
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Localstorage imports
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <ActionsGrid />,
  },
  {
    path: "/MultilineToPdf",
    element: <MultilineToPdf />,
  },
  {
    path: "TextFileToPdf",
    element: <TextFileToPdf />,
  },
  {
    path: "/MergePdfs",
    element: <MergePdfs />,
  },
  {
    path: "/SplitPdf",
    element: <SplitPdf />,
  },
  {
    path: "/RemovePdfPages",
    element: <RemovePdfPages />,
  },
  {
    path: "/PdfToJpg",
    element: <PdfToJpg />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  // hotkeys
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

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
