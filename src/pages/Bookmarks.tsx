import React, { useContext } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { BookmarkContext } from "../store/bookmark-context";
import useRepoDetail from "../hook/useRepoDetail";
import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";
import DrawerCard from "../components/UI/DrawerCard";
import MainCard from "../components/UI/MainCard";
import { IRepoDetails } from "../types/types";

const SideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(5, 0, 0, 6),
}));

const Bookmarks = () => {
  const { bookmarkList } = useContext(BookmarkContext);
  const getRepositoryDetail = useRepoDetail(`https://api.github.com/repos/`);

  return (
    <>
      <DrawerCard>
        <SideBox>
          <BookmarkBorderSharp sx={{ mb: 3, fontSize: 64 }} />
          <Typography variant="h5" component="div">
            Bookmarks
          </Typography>
          <Typography variant="subtitle1" color="primary.light">
            You have {bookmarkList.length} bookmarks
          </Typography>
        </SideBox>
      </DrawerCard>

      <MainCard>
        {bookmarkList.length > 0
          ? bookmarkList.map((repo: IRepoDetails) => (
              <SearchRepoList
                key={repo.id}
                id={repo.id}
                fullName={repo.fullName}
                description={repo.description}
                handleRepositoryDetail={getRepositoryDetail}
                login={repo.owner}
                name={repo.name}
              />
            ))
          : "You don't have bookmark."}
      </MainCard>
    </>
  );
};

export default Bookmarks;
