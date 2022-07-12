import React from "react";

import { Box, Typography } from "@mui/material";
import classes from "./Loading.module.css";

const Error = () => {
  return (
    <Box className={classes.results}>
      <Typography variant="h5" gutterBottom component="div">
        Something went wrong :(
      </Typography>
    </Box>
  );
};

export default Error;
