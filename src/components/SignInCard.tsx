import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { PaletteMode } from "@mui/material";

interface SignInCardProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function SignInCard({ mode, toggleColorMode }: SignInCardProps) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: { xs: "100%", sm: "100dvh" }, p: 2 }}
    >
      <Card
        variant="outlined"
        sx={(theme) => ({
          p: { xs: 2, sm: 4 },
          width: { xs: "100%", sm: 450 },
          // boxShadow:
          //   theme.palette.mode === "light"
          //     ? "rgba(0, 0, 0, 0.05) 0px 5px 15px 0px, rgba(25, 28, 33, 0.05) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          //     : "rgba(0, 0, 0, 0.5) 0px 5px 15px 0px, rgba(25, 28, 33, 0.08) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        })}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography component="h1" variant="h5">
            Sign in to your account
          </Typography>
          <IconButton
            color="primary"
            aria-label="Theme toggle button"
            onClick={toggleColorMode}
          >
            {mode === "dark" ? (
              <WbSunnyRoundedIcon fontSize="small" />
            ) : (
              <ModeNightRoundedIcon fontSize="small" />
            )}
          </IconButton>
        </Stack>
        <Stack
          component="form"
          direction="column"
          gap={2}
          onSubmit={handleSubmit}
          noValidate
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? "error" : "primary"}
              sx={{ ariaLabel: "email" }}
            />
          </FormControl>
          <FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link href="/" variant="body2" sx={{ alignSelf: "baseline" }}>
                Forgot your password?
              </Link>
            </Box>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? "error" : "primary"}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Sign in
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={validateInputs}
          >
            Don&apos;t have an account? Sign up
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
