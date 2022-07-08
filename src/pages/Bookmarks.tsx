import React, { Fragment, useContext } from "react";

import Card from "../components/UI/Card";
import classes from "./Bookmarks.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { BookmarkBorderSharp } from "@mui/icons-material";
import "@fontsource/roboto/400.css";
import { IBookmarkListProps, IRepoDetailsProps } from "../types/types";
import { BookmarkContext } from "../store/bookmark-context";
import SearchRepoList from "../components/RepositoryLayout/SearchRepoList";

const Bookmarks: React.FC<IBookmarkListProps> = ({
  handleRepositoryDetail,
}) => {
  const getRepoDetail = (login: string, name: string) => {
    handleRepositoryDetail(login, name);
  };

  const { bookmarkList } = useContext(BookmarkContext);

  return (
    <Fragment>
      <Box className={classes["main-box"]}>
        <Card>
          <Box className={classes["side-box"]}>
            <BookmarkBorderSharp className={classes["bookmark-icon"]} />
            <Typography
              variant="h5"
              component="div"
              className={classes.bookmark}
            >
              Bookmarks
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes["total-bookmarks"]}
            >
              You have {bookmarkList.length} bookmarks
            </Typography>
          </Box>
        </Card>

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
      </Box>
    </Fragment>
  );
};

export default Bookmarks;
