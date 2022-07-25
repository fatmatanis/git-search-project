import React from "react";

import SearchRepoList from "./SearchRepoList";
import { IRepository } from "../../types/types";
import classes from "./RepoMainView.module.css";
import { Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import MainCard from "../UI/MainCard";

const RepoMainView: React.FC<{
  searchRepoResults: IRepository[];
  repoCount: string;
  handleRepositoryDetail: (arg0: string, arg1: string) => void;
}> = (props) => {
  const getRepoDetail = (login: string, name: string) => {
    props.handleRepositoryDetail(login, name);
  };

  return (
    <MainCard>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        className={classes["repo-results"]}
      >
        {`${props.repoCount} Repository Results`}
      </Typography>
      {props.searchRepoResults.map((listItem: IRepository) => {
        return (
          <SearchRepoList
            key={listItem.id}
            id={listItem.id}
            fullName={listItem.full_name}
            description={listItem.description}
            handleRepositoryDetail={getRepoDetail}
            login={listItem.owner.login}
            name={listItem.name}
          />
        );
      })}
    </MainCard>
  );
};

export default RepoMainView;
