import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IDetailItemProps } from "../../types/types";

const DetailItem: React.FC<IDetailItemProps> = (props) => {
  const Icon = styled("div")(({ theme }) => ({
    margin: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingRight: theme.spacing(0.5),
  }));

  const DetailText = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    alignSelf: "flex-start",
    lineHeight: "24px",
    margin: theme.spacing(0.5, 1, 0.5, 0),
  }));

  const DetailNumber = styled(Typography)(({ theme }) => ({
    color: "#2c98f0",
    fontWeight: "bold",
    margin: theme.spacing(0.5, 0),
  }));

  return (
    <>
      <Grid container>
        <Icon>{props.icon}</Icon>
        <DetailText variant="subtitle1">{props.text}</DetailText>
        <DetailNumber variant="subtitle1">{props.number}</DetailNumber>
      </Grid>
    </>
  );
};

export default DetailItem;
