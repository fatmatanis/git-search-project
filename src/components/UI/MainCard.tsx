import React, { ReactNode } from "react";

import { styled } from "@mui/material/styles";

type MainCardProps = {
  children: ReactNode;
};

const MainBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(13),
  paddingRight: theme.spacing(6),
}));

const Box = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 4, 8, 52),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 3, 8, 34),
  },
}));

const MainCard = ({ children }: MainCardProps) => {
  return (
    <MainBox>
      <Box>{children}</Box>
    </MainBox>
  );
};

export default MainCard;
