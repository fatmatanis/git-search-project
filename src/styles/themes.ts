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
      dark: "#2196f3",
      light: "#375f9d",
    },
    common: {
      white: "#FFFFFFCC",
    },
    info: {
      main: "#FFFFFF",
      dark: "#2c81f0",
      light: "#d9e8ff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h6: {
      fontWeight: "normal",
    },
  },
});
