import React from "react";

import { Box, CircularProgress } from "@mui/material";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <Box className={classes.results}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
