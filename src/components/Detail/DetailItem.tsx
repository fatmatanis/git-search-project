import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IDetailItemProps } from "../../types/types";
import classes from "./DetailItem.module.css";

const DetailItem: React.FC<IDetailItemProps> = (props) => {
  return (
    <>
      <Grid container className={classes.container}>
        <div className={classes.icon}>{props.icon}</div>
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.text}
        >
          {props.text}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.number}
        >
          {props.number}
        </Typography>
      </Grid>
    </>
  );
};

export default DetailItem;
