import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { InputContex } from "../../store/input-context";
import {
  BookmarkLink,
  BookmarkTypography,
  CustomToolbar,
  Img,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HeaderStyles";
import digieggs from "../../assets/digieggs.png";

interface IHeaderProps {
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { onKeyDown } = props;

  const { searchText, handleChange } = useContext(InputContex);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "#375f9d",
      }}
    >
      <CustomToolbar>
        <NavLink to="/">
          <Img src={digieggs} alt="Digieggs logo" />
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
        <BookmarkLink
          to="bookmarks"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#557dbb" }
              : { backgroundColor: "transparent" }
          }
        >
          <BookmarkBorderSharp />
          <BookmarkTypography variant="body1">Bookmarks</BookmarkTypography>
        </BookmarkLink>
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;
