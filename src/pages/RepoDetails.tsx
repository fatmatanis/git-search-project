import React, { useContext } from "react";

import millify from "millify";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Button, Link } from "@mui/material";
import { BookmarkBorderSharp, ClassOutlined } from "@mui/icons-material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { BookmarkContext } from "../store/bookmark-context";
import DrawerCard from "../components/UI/DrawerCard";
import MainCard from "../components/UI/MainCard";
import DetailItem from "../components/Detail/DetailItem";
import { IRepoDetailsProps } from "../types/types";
import fork from "../assets/fork.svg";
import branch from "../assets/branch.svg";
import pullRequest from "../assets/request.svg";
import classes from "./RepoDetails.module.css";

const RepoDetails: React.FC<IRepoDetailsProps> = (props) => {
  const { addBookmarks, deleteBookmarks, bookmarkList } =
    useContext(BookmarkContext);

  const isBookmark =
    bookmarkList.length > 0 &&
    bookmarkList.some((repo) => repo.id === props.id);

  const addBookmarksHandler = () => {
    addBookmarks(props);
  };
  const deleteBookmarksHandler = () => {
    deleteBookmarks(props.id);
  };

  return (
    <>
      <DrawerCard>
        <Box className={classes["detail-box"]}>
          <ClassOutlined sx={{ fontSize: "64px" }} />
          <Typography variant="h6" component="div" className={classes.name}>
            {props.fullName}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {props.description}
          </Typography>
          <Grid container className={classes["link-container"]}>
            <InsertLinkIcon color="action" className={classes["link-icon"]} />
            <Link
              href={props.link}
              variant="subtitle1"
              className={classes.link}
            >
              {props.fullName}
            </Link>
          </Grid>
          <Box className={classes["top-items"]}>
            <DetailItem
              icon={<VisibilityOutlinedIcon />}
              text="Watch"
              number={millify(props.watch).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<StarBorderIcon />}
              text="Star"
              number={millify(props.star).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<img src={fork} alt="git-fork" />}
              text="Fork"
              number={millify(props.fork).toLowerCase()}
            />
          </Box>
          <Box>
            <DetailItem
              icon={<img src={branch} alt="git-branch" />}
              text="Branches"
              number={millify(props.branch).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<ErrorOutlineIcon />}
              text="Issues"
              number={millify(props.issues).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<img src={pullRequest} alt="pull-request" />}
              text="Pull Request"
              number={millify(props.pullRequest).toLowerCase()}
            />
          </Box>
          {!isBookmark ? (
            <Button
              variant="outlined"
              className={classes.add}
              onClick={addBookmarksHandler}
            >
              <BookmarkBorderSharp />
              {"Add to Bookmarks"}
            </Button>
          ) : (
            <Button
              variant="outlined"
              className={classes.delete}
              onClick={deleteBookmarksHandler}
            >
              <BookmarkBorderSharp />
              {"Delete Bookmark"}
            </Button>
          )}
        </Box>
      </DrawerCard>
      <MainCard>
        <Typography variant="h6" gutterBottom component="div">
          {props.description}
        </Typography>
      </MainCard>
    </>
  );
};

export default RepoDetails;
