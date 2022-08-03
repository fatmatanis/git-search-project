import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { BookmarkContextProvider } from "./store/bookmark-context";
import { InputContexProvider } from "./store/input-context";
import MainLayout from "./components/Main/MainLayout";
import { theme } from "./types/themes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InputContexProvider>
        <BookmarkContextProvider>
          <MainLayout />
        </BookmarkContextProvider>
      </InputContexProvider>
    </ThemeProvider>
  );
}

export default App;
