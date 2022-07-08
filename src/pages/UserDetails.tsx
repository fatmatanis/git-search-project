import React from "react";

import Card from "../components/UI/Card";
import classes from "./UserDetail.module.css";
import { Box, Typography } from "@mui/material";
import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";
import { IRepository, IUsersDetailProps } from "../types/types";

const UserDetails: React.FC<IUsersDetailProps> = ({
  handleRepositoryDetail,
  avatar,
  name,
  login,
  bio,
  userRepoCount,
  userRepositoryList,
}) => {
  const getRepoDetail = (login: string, name: string) => {
    handleRepositoryDetail(login, name);
  };

  return (
    <>
      <Card>
        <Box className={classes["user-info"]}>
          <img className={classes.avatar} src={avatar} alt="User Avatar" />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={classes.login}
          >
            {login}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={classes.bio}
          >
            {bio}
          </Typography>
        </Box>
      </Card>
      <Box component="main" className={classes["user-repositories"]}>
        <Box className={classes["repo-result"]}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            className={classes.repo}
          >
            Repositories
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            className={classes["repo-count"]}
          >
            {userRepoCount}
          </Typography>
        </Box>
        {userRepositoryList.map((item: IRepository) => {
          return (
            <SearchRepoList
              key={item.id}
              id={item.id}
              fullName={item.full_name}
              description={item.description}
              handleRepositoryDetail={getRepoDetail}
              login={item.owner.login}
              name={item.name}
            />
          );
        })}
      </Box>
    </>
  );
};

export default UserDetails;
