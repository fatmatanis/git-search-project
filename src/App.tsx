import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { BookmarkContextProvider } from "./store/bookmark-context";
import { InputContexProvider } from "./store/input-context";
import MainLayout from "./components/Main";
import ResultContextProvider from "./store/result-context";
import { theme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InputContexProvider>
        <ResultContextProvider>
          <BookmarkContextProvider>
            <MainLayout />
          </BookmarkContextProvider>
        </ResultContextProvider>
      </InputContexProvider>
    </ThemeProvider>
  );
}

export default App;
