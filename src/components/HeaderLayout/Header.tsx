import React from "react";
import { NavLink } from "react-router-dom";

import { Search, SearchIconWrapper, StyledInputBase } from "./SearchStyle";
import digieggs from "../../assets/digieggs.png";
import classes from "./Header.module.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import { BookmarkBorderSharp } from "@mui/icons-material";

interface IHeaderProps {
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { onKeyDown, value, onChange } = props;
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#375f9d",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <img src={digieggs} alt="Digieggs logo" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={onKeyDown}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={value}
              onChange={onChange}
            />
          </Search>
          <NavLink
            className={classes.navLink}
            to="bookmarks"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#557dbb" }
                : { backgroundColor: "transparent" }
            }
          >
            <BookmarkBorderSharp />
            <Typography
              variant="body1"
              component="div"
              className={classes.bookmark}
            >
              Bookmarks
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
