import React from "react";

import "./App.css";
import MainLayout from "./components/Main/MainLayout";
import { BookmarkContextProvider } from "./store/bookmark-context";

function App() {
  return (
    <BookmarkContextProvider>
      <MainLayout />
    </BookmarkContextProvider>
  );
}

export default App;
