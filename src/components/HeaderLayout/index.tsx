import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { InputContex } from "../../store/input-context";
import { IHeaderProps } from "../../types/types";
import {
  BookmarkLink,
  BookmarkTypography,
  CustomToolbar,
  Img,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";
import digieggs from "../../assets/digieggs.png";

const Header: React.FC<IHeaderProps> = ({ onKeyDown }) => {
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
