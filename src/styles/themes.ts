import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2c98f0",
      dark: "#000",
      light: "#646464",
    },
    secondary: {
      main: "#85b0f2",
      light: "#375f9d",
    },
    common: { white: "#FFFFFFCC" },
  },
  typography: {
    fontFamily: "Roboto",
    h6: {
      fontWeight: "normal",
    },
  },
});
