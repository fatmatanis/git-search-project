import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "rgba(44, 152, 240, 0.87)",
      light: "#646464",
    },
    secondary: {
      main: "#85b0f2",
      light: "#375f9d",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h6: {
      fontWeight: "normal",
    },
  },
});
