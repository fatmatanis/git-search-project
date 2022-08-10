import React from "react";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DrawerCard from "../UI/DrawerCard";
import MainCard from "../UI/MainCard";
import SearchRepoList from "../RepositoryLayout/SearchRepoList";
import { IRepository, IUsersDetailProps } from "../../types/types";

const UserInfo = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3, 8),
}));

const UserAvatar = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "50%",
  margin: theme.spacing(3, 0),
}));

const UserRepo = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

const RepoCount = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: "4px",
  padding: theme.spacing(0.5, 4, 1),
  height: "1rem",
  color: theme.palette.secondary.dark,
}));

const UserSearchDetails: React.FC<IUsersDetailProps> = ({
  getRepoDetail,
  avatar,
  name,
  login,
  bio,
  userRepoCount,
  userRepositoryList,
}) => {
  return (
    <>
      <DrawerCard>
        <UserInfo>
          <UserAvatar src={avatar} alt="User Avatar" />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle2" component="div" color="primary.light">
            {login}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {bio}
          </Typography>
        </UserInfo>
      </DrawerCard>
      <MainCard>
        <UserRepo>
          <Typography variant="h5" gutterBottom component="div" sx={{ mr: 1 }}>
            Repositories
          </Typography>
          <RepoCount>
            <Typography variant="subtitle2">{userRepoCount}</Typography>
          </RepoCount>
        </UserRepo>
        {userRepositoryList.map((item: IRepository) => (
          <SearchRepoList
            key={item.id}
            id={item.id}
            fullName={item.full_name}
            description={item.description}
            handleRepositoryDetail={getRepoDetail}
            login={item.owner.login}
            name={item.name}
          />
        ))}
      </MainCard>
    </>
  );
};

export default UserSearchDetails;
