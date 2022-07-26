import React, { useContext } from "react";
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
import { InputContex } from "../../store/input-context";

interface IHeaderProps {
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { onKeyDown } = props;

  const { searchText, handleChange } = useContext(InputContex);

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
          <NavLink to="/">
            <img src={digieggs} alt="Digieggs logo" />
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={onKeyDown}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={handleChange}
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
