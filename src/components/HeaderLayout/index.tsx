import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios, { AxiosError } from "axios";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { ResultContext } from "../../store/result-context";
import { InputContex } from "../../store/input-context";
import digieggs from "../../assets/digieggs.png";
import {
  BookmarkLink,
  BookmarkTypography,
  CustomToolbar,
  Img,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";

const Header = () => {
  const { searchText, handleChange } = useContext(InputContex);
  const { setRepoResults, setUserResults, setIsLoading, setError } =
    useContext(ResultContext);

  const navigate = useNavigate();

  const repositoryResults = async () => {
    return await axios.get(
      `https://api.github.com/search/repositories?q=${searchText}`
    );
  };

  const userResults = async () => {
    return await axios.get(
      `https://api.github.com/search/users?q=${searchText}`
    );
  };

  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchText) {
      setIsLoading(true);
      try {
        const [getRepo, getUser] = await Promise.all([
          repositoryResults(),
          userResults(),
        ]);
        setRepoResults({
          repoSearch: getRepo.data.items,
          count: getRepo.data.total_count,
        });
        setUserResults({
          userSearch: getUser.data.items,
          count: getUser.data.total_count,
        });
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      }
      setIsLoading(false);
      navigate("results/repositories");
    }
  };

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
            onKeyDown={handleOnKeyDown}
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
