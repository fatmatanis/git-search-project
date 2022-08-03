import React, { useContext } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { BookmarkContext } from "../store/bookmark-context";
import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";
import DrawerCard from "../components/UI/DrawerCard";
import MainCard from "../components/UI/MainCard";
import { IBookmarkListProps, IRepoDetailsProps } from "../types/types";
import classes from "./Bookmarks.module.css";

const Bookmarks: React.FC<IBookmarkListProps> = ({ getRepoDetail }) => {
  const { bookmarkList } = useContext(BookmarkContext);

  return (
    <>
      <DrawerCard>
        <Box className={classes["side-box"]}>
          <BookmarkBorderSharp className={classes["bookmark-icon"]} />
          <Typography variant="h5" component="div" className={classes.bookmark}>
            Bookmarks
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes["total-bookmarks"]}
          >
            You have {bookmarkList.length} bookmarks
          </Typography>
        </Box>
      </DrawerCard>

      <MainCard>
        {bookmarkList.length > 0
          ? bookmarkList.map((repo: IRepoDetailsProps) => (
              <SearchRepoList
                key={repo.id}
                id={repo.id}
                fullName={repo.fullName}
                description={repo.description}
                handleRepositoryDetail={getRepoDetail}
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
