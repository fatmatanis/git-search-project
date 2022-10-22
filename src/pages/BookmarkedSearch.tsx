import React, { useContext } from "react";

import { Typography } from "@mui/material";
import { BookmarkContext } from "../store/bookmark-context";
import { InputContex } from "../store/input-context";
import useRepoDetail from "../hook/useRepoDetail";
import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";
import MainCard from "../components/UI/MainCard";
import { IRepoDetails } from "../types/types";

const BookmarkedSearch = () => {
  const { searchText } = useContext(InputContex);
  const { bookmarkList } = useContext(BookmarkContext);
  const getRepositoryDetail = useRepoDetail(`https://api.github.com/repos/`);

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
          handleRepositoryDetail={getRepositoryDetail}
          login={repo.owner}
          name={repo.name}
        />
      ))}
    </MainCard>
  );
};

export default BookmarkedSearch;
