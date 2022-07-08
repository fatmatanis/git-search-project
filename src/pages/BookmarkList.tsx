import { Box } from "@mui/material";
import React, { useContext } from "react";

import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";
import { BookmarkContext } from "../store/bookmark-context";
import { IBookmarkListProps, IRepoDetailsProps } from "../types/types";

const BookmarkList: React.FC<IBookmarkListProps> = ({
  handleRepositoryDetail,
}) => {
  const getRepoDetail = (login: string, name: string) => {
    handleRepositoryDetail(login, name);
  };
  const { bookmarkList } = useContext(BookmarkContext);

  return (
    <Box>
      {bookmarkList.map((repo: IRepoDetailsProps) => {
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
    </Box>
  );
};

export default BookmarkList;
