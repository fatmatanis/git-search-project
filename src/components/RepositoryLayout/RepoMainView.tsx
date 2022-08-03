import React from "react";

import { Typography } from "@mui/material";
import SearchRepoList from "./SearchRepoList";
import MainCard from "../UI/MainCard";
import { IRepoMainViewProps, IRepository } from "../../types/types";

const RepoMainView: React.FC<IRepoMainViewProps> = ({
  repoCount,
  searchRepoResults,
  getRepoDetail,
}) => {
  return (
    <MainCard>
      <Typography
        variant="h5"
        sx={{ pb: "18px" }}
      >{`${repoCount} Repository Results`}</Typography>
      {searchRepoResults.map((listItem: IRepository) => (
        <SearchRepoList
          key={listItem.id}
          id={listItem.id}
          fullName={listItem.full_name}
          description={listItem.description}
          handleRepositoryDetail={getRepoDetail}
          login={listItem.owner.login}
          name={listItem.name}
        />
      ))}
    </MainCard>
  );
};

export default RepoMainView;
