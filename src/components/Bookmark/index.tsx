import React, { useContext } from "react";

import SearchRepoList from "../RepositoryLayout/SearchRepoList";
import { IBookmarkListProps, IRepoDetailsProps } from "../../types/types";
import MainCard from "../UI/MainCard";
import { BookmarkContext } from "../../store/bookmark-context";
import { Typography } from "@mui/material";
import { InputContex } from "../../store/input-context";

const BookmarkedSearch: React.FC<IBookmarkListProps> = ({
  handleRepositoryDetail,
}) => {
  const getRepoDetail = (login: string, name: string) => {
    handleRepositoryDetail(login, name);
  };

  const { searchText } = useContext(InputContex);
  const { bookmarkList } = useContext(BookmarkContext);

  const foundBookmark = bookmarkList.filter((repo) =>
    repo.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

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
