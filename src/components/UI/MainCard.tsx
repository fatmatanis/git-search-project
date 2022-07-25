import React, { ReactNode } from "react";

import classes from "./MainCard.module.css";

type MainCardProps = {
  children: ReactNode;
};

const MainCard = ({ children }: MainCardProps) => {
  return <div className={classes.box}>{children}</div>;
};

export default MainCard;
