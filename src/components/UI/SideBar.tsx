import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TagFaces, BookmarkBorderSharp } from "@mui/icons-material";
import { List, Divider, Box } from "@mui/material";
import { ResultContext } from "../../store/result-context";
import { BookmarkContext } from "../../store/bookmark-context";
import { InputContex } from "../../store/input-context";
import DrawerCard from "./DrawerCard";
import Loading from "./Loading";
import Error from "./Error";
import SideListItem from "./SideListItem";
import note from "../../assets/note.svg";

const SideBar = () => {
  const { repoResults, userResults, isLoading, error } =
    useContext(ResultContext);
  const { searchText } = useContext(InputContex);
  const { bookmarkList } = useContext(BookmarkContext);

  const foundBookmark =
    bookmarkList.length > 0 &&
    bookmarkList.filter((repo) =>
      repo.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box>
          <DrawerCard>
            <List>
              <SideListItem
                count={repoResults.count.toLocaleString()}
                to="repositories"
                icon={<img src={note} alt="note-icon" />}
                primary={"Repositories"}
              />
              <SideListItem
                count={userResults.count.toLocaleString()}
                to="user"
                icon={<TagFaces />}
                primary={"Users"}
              />
              {foundBookmark && foundBookmark.length > 0 && (
                <SideListItem
                  count={foundBookmark.length.toLocaleString()}
                  to="bookmarked"
                  icon={<BookmarkBorderSharp />}
                  primary={"Bookmarked"}
                />
              )}
              <Divider />
            </List>
          </DrawerCard>
          <Outlet />
        </Box>
      )}
      {error && <Error alertText={error} />}
    </>
  );
};

export default SideBar;
