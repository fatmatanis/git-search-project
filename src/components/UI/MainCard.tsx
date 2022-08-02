import React, { ReactNode } from "react";

import { styled } from "@mui/material/styles";

type MainCardProps = {
  children: ReactNode;
};

const MainBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(13),
  paddingRight: theme.spacing(4),
}));

const Box = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 4, 8, 50),
}));

const MainCard = ({ children }: MainCardProps) => {
  return (
    <MainBox>
      <Box>{children}</Box>
    </MainBox>
  );
};

export default MainCard;
