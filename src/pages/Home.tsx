import React from "react";

import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes["screen-search"]}>
      <ScreenSearchDesktopIcon className={classes["search-icon"]} />
      <p>Search results will appear here</p>
    </div>
  );
};

export default Home;
