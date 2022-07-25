import React from "react";

import SearchUserList from "./SearchUserList";
import { IUsers } from "../../types/types";
import MainCard from "../UI/MainCard";
import { Typography } from "@mui/material";
import "@fontsource/roboto/400.css";

const UserMainView: React.FC<{
  searchUsersResults: IUsers[];
  userCount: string;
  handleUserDetail: (arg0: string) => void;
}> = ({ handleUserDetail, userCount, searchUsersResults }) => {
  const getUserDetail = (login: string) => {
    handleUserDetail(login);
  };

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
