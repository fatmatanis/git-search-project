import React from "react";

import { Typography } from "@mui/material";
import SearchUserList from "./SearchUserList";
import MainCard from "../UI/MainCard";
import { IUserMainViewProps, IUsers } from "../../types/types";

const UserMainView: React.FC<IUserMainViewProps> = ({
  getUserDetail,
  userCount,
  searchUsersResults,
}) => {
  return (
    <MainCard>
      <Typography variant="h5" gutterBottom component="div">
        {`${userCount} Users Results`}
      </Typography>
      {searchUsersResults.map((item: IUsers) => {
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
    </MainCard>
  );
};

export default UserMainView;
