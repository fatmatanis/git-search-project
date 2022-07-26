import React from "react";

import "./App.css";
import MainLayout from "./components/Main/MainLayout";
import { BookmarkContextProvider } from "./store/bookmark-context";
import { InputContexProvider } from "./store/input-context";

function App() {
  return (
    <InputContexProvider>
      <BookmarkContextProvider>
        <MainLayout />
      </BookmarkContextProvider>
    </InputContexProvider>
  );
}

export default App;
