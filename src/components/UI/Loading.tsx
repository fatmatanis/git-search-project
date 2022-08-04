import React from "react";

import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(25),
  color: theme.palette.primary.main,
}));

const Loading = () => {
  return (
    <CustomBox>
      <CircularProgress />
    </CustomBox>
  );
};

export default Loading;
