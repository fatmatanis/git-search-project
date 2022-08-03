import React from "react";

import { Box, Typography } from "@mui/material";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { styled } from "@mui/material/styles";

const ScreenSearch = styled(Box)(({ theme }) => ({
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(15),
  padding: theme.spacing(20),
  [theme.breakpoints.down("md")]: {
    with: "auto",
    margin: theme.spacing(7, 2),
    padding: theme.spacing(15, 2),
  },
}));

const Home = () => {
  return (
    <ScreenSearch>
      <ScreenSearchDesktopIcon sx={{ color: "#85b0f2", fontSize: "90px" }} />
      <Typography variant="h6" color="secondary.main">
        Search results will appear here
      </Typography>
    </ScreenSearch>
  );
};

export default Home;
