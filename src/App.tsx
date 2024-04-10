import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import SignInCard from "./components/SignInCard";
import modernTheme from "./themes/modernTheme";
import elegantTheme from "./themes/elegantTheme";
import playfulTheme from "./themes/playfulTheme";

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const [themeIndex, setthemeIndex] = React.useState(0);
  const themes = [
    createTheme(modernTheme(mode)),
    createTheme(elegantTheme(mode)),
    createTheme(playfulTheme(mode)),
    createTheme({ palette: { mode } }),
  ];

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newThemeIndex: number
  ) => {
    if (newThemeIndex !== null) {
      setthemeIndex(newThemeIndex);
    }
  };

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <Box
        component="main"
        sx={(theme) => ({
          backgroundColor: theme.palette.mode === "light" ? "#FFF" : "#000",
          height: "100dvh",
          pb: { xs: 12, sm: 0 },
        })}
      >
        <SignInCard mode={mode} toggleColorMode={toggleColorMode} />
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          width: "100dvw",
          position: "fixed",
          bottom: 24,
        }}
      >
        <ToggleButtonGroup
          exclusive
          value={themeIndex}
          onChange={handleThemeChange}
          aria-label="Theme selection"
        >
          <ToggleButton value={0}>Modern</ToggleButton>
          <ToggleButton value={1}>Elegant</ToggleButton>
          <ToggleButton value={2}>Playful</ToggleButton>
          <ToggleButton value={3}>Material 2</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </ThemeProvider>
  );
}
