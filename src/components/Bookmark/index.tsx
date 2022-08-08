import React, { useContext } from "react";

import { Typography } from "@mui/material";
import { BookmarkContext } from "../../store/bookmark-context";
import { InputContex } from "../../store/input-context";
import SearchRepoList from "../RepositoryLayout/SearchRepoList";
import MainCard from "../UI/MainCard";
import { IBookmarkListProps, IRepoDetails } from "../../types/types";

const BookmarkedSearch: React.FC<IBookmarkListProps> = ({ getRepoDetail }) => {
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
      {foundBookmark.map((repo: IRepoDetails) => (
        <SearchRepoList
          key={repo.id}
          id={repo.id}
          fullName={repo.fullName}
          description={repo.description}
          handleRepositoryDetail={getRepoDetail}
          login={repo.owner}
          name={repo.name}
        />
      ))}
    </MainCard>
  );
};

export default BookmarkedSearch;
