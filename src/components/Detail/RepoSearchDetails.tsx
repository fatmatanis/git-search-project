import React, { useContext } from "react";

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
import { styled } from "@mui/material/styles";
import millify from "millify";
import { BookmarkContext } from "../../store/bookmark-context";
import DrawerCard from "../UI/DrawerCard";
import MainCard from "../UI/MainCard";
import DetailItem from "./DetailItem";
import fork from "../../assets/fork.svg";
import branch from "../../assets/branch.svg";
import pullRequest from "../../assets/request.svg";
import { IRepoDetails } from "../../types/types";

const DetailBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4, 5),
}));

const CustomClassOutlined = styled(ClassOutlined)(({ theme }) => ({
  fontSize: "64px",
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    marginBottom: "12px",
  },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textTransform: "none",
  marginTop: theme.spacing(2),
  ":hover": {
    backgroundColor: theme.palette.info.dark,
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const RepoSearchDetails: React.FC<IRepoDetails> = (props) => {
  const { addBookmarks, deleteBookmarks, bookmarkList } =
    useContext(BookmarkContext);
  const {
    id,
    fullName,
    description,
    link,
    watch,
    star,
    forks,
    branches,
    issues,
    pullRequests,
  } = props;

  const isBookmark =
    bookmarkList.length > 0 && bookmarkList.some((repo) => repo.id === id);

  const addBookmarksHandler = () => {
    addBookmarks(props);
  };
  const deleteBookmarksHandler = () => {
    deleteBookmarks(id);
  };

  return (
    <>
      <DrawerCard>
        <DetailBox>
          <CustomClassOutlined />
          <Typography variant="h6" component="div" color="secondary.light">
            {fullName}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {description}
          </Typography>
          <Grid container sx={{ mt: 1, mb: 2 }}>
            <InsertLinkIcon color="action" sx={{ mt: 0.3 }} />
            <Link
              href={link}
              variant="subtitle1"
              color="primary.main"
              sx={{ textDecoration: "none", pl: 1 }}
            >
              {props.fullName}
            </Link>
          </Grid>
          <Box sx={{ mb: 4 }}>
            <DetailItem
              icon={<VisibilityOutlinedIcon />}
              text="Watch"
              number={millify(watch).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<StarBorderIcon />}
              text="Star"
              number={millify(star).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<img src={fork} alt="git-fork" />}
              text="Fork"
              number={millify(forks).toLowerCase()}
            />
          </Box>
          <Box>
            <DetailItem
              icon={<img src={branch} alt="git-branch" />}
              text="Branches"
              number={millify(branches).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<ErrorOutlineIcon />}
              text="Issues"
              number={millify(issues).toLowerCase()}
            />
            <Divider />
            <DetailItem
              icon={<img src={pullRequest} alt="pull-request" />}
              text="Pull Request"
              number={millify(pullRequests).toLowerCase()}
            />
          </Box>
          {!isBookmark ? (
            <AddButton variant="outlined" onClick={addBookmarksHandler}>
              <BookmarkBorderSharp />
              {"Add to Bookmarks"}
            </AddButton>
          ) : (
            <DeleteButton variant="outlined" onClick={deleteBookmarksHandler}>
              <BookmarkBorderSharp />
              {"Delete Bookmark"}
            </DeleteButton>
          )}
        </DetailBox>
      </DrawerCard>
      <MainCard>
        <Typography variant="h6" component="div">
          {description}
        </Typography>
      </MainCard>
    </>
  );
};

export default RepoSearchDetails;
