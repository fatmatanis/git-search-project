import React, { useContext } from "react";

import SearchRepoList from "../RepositoryLayout/SearchRepoList";
import { IBookmarkedSearchProps, IRepoDetailsProps } from "../../types/types";
import MainCard from "../UI/MainCard";
import { BookmarkContext } from "../../store/bookmark-context";
import { Typography } from "@mui/material";

const BookmarkedSearch: React.FC<IBookmarkedSearchProps> = ({
  handleRepositoryDetail,
  text,
}) => {
  const getRepoDetail = (login: string, name: string) => {
    handleRepositoryDetail(login, name);
  };

  const { bookmarkList } = useContext(BookmarkContext);

  const foundBookmark = bookmarkList.filter((repo) =>
    repo.fullName.toLowerCase().includes(text.toLowerCase())
  );
  console.log("hey", foundBookmark);

  return (
    <MainCard>
      <Typography variant="h5" gutterBottom component="div">
        {`${foundBookmark.length} Bookmarked Repository Results`}
      </Typography>
      {foundBookmark.map((repo: IRepoDetailsProps) => {
        return (
          <SearchRepoList
            key={repo.id}
            id={repo.id}
            fullName={repo.fullName}
            description={repo.description}
            handleRepositoryDetail={getRepoDetail}
            login={repo.owner}
            name={repo.name}
          />
        );
      })}
    </MainCard>
  );
};

export default BookmarkedSearch;
