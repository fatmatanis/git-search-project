import React from "react";

import { Typography } from "@mui/material";
import SearchUserList from "./SearchUserList";
import MainCard from "../UI/MainCard";
import { IUsers } from "../../types/types";

const UserMainView: React.FC<{
  searchUsersResults: IUsers[];
  userCount: string;
  getUserDetail: (arg0: string) => void;
}> = ({ getUserDetail, userCount, searchUsersResults }) => {
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
