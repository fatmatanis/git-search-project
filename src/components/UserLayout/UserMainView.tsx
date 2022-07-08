import React from "react";

import SearchUserList from "./SearchUserList";
import { IUsers } from "../../types/types";
import classes from "./UserMainView.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "@fontsource/roboto/400.css";

const UserMainView: React.FC<{
  searchUsersResults: IUsers[];
  userCount?: number;
  handleUserDetail: (arg0: string) => void;
}> = (props) => {
  const getUserDetail = (login: string) => {
    props.handleUserDetail(login);
  };

  return (
    <Box component="main" className={classes.result}>
      <Typography variant="h5" gutterBottom component="div">
        {`${props.userCount} Users Results`}
      </Typography>
      {props.searchUsersResults.map((item: IUsers) => {
        return (
          <SearchUserList
            key={item.id}
            id={item.id}
            avatar_url={item.avatar_url}
            login={item.login}
            handleUserDetail={getUserDetail}
          />
        );
      })}
    </Box>
  );
};

export default UserMainView;
