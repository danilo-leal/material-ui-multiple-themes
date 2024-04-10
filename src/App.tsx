import * as React from "react";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import SignInCard from "./components/SignInCard";
import brutalTheme from "./themes/brutalTheme";
import modernTheme from "./themes/modernTheme";

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const [themeIndex, setthemeIndex] = React.useState(0);
  const themes = [
    createTheme({ palette: { mode } }),
    createTheme(brutalTheme(mode)),
    createTheme(modernTheme(mode)),
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
      <Stack
        component="main"
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === "light"
              ? `linear-gradient(180deg, ${alpha("#CEE5FD", 0.2)}, #FFF)`
              : `linear-gradient(${alpha("#02294F", 0.2)}, ${alpha(
                  "#021F3B",
                  0.0
                )})`,
          backgroundRepeat: "no-repeat",
          height: { xs: "auto", sm: "100dvh" },
          pb: { xs: 12, sm: 0 },
        })}
      >
        <SignInCard mode={mode} toggleColorMode={toggleColorMode} />
        <ToggleButtonGroup
          exclusive
          value={themeIndex}
          onChange={handleThemeChange}
          aria-label="theme selection"
        >
          <ToggleButton value={0}>Material 2</ToggleButton>
          <ToggleButton value={1}>Brutal theme</ToggleButton>
          <ToggleButton value={2}>Modern theme</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
    </ThemeProvider>
  );
}
