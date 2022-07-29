import React from "react";

import { Typography } from "@mui/material";
import SearchRepoList from "./SearchRepoList";
import MainCard from "../UI/MainCard";
import { IRepository } from "../../types/types";
import classes from "./RepoMainView.module.css";

const RepoMainView: React.FC<{
  searchRepoResults: IRepository[];
  repoCount: string;
  getRepoDetail: (arg0: string, arg1: string) => void;
}> = ({ repoCount, searchRepoResults, getRepoDetail }) => {
  return (
    <MainCard>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        className={classes["repo-results"]}
      >
        {`${repoCount} Repository Results`}
      </Typography>
      {searchRepoResults.map((listItem: IRepository) => {
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
