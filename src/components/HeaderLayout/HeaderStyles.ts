import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#19417f",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: theme.spacing(0, 2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "26ch",
      height: "2ch",
    },
  },
}));

export const Img = styled("img")(({ theme }) => ({
  maxWidth: "120px",
  margin: theme.spacing(0),
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { padding: theme.spacing(0) },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(1),
  },
}));

export const BookmarkLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "rgba(255, 255, 255, 0.87)",
  padding: theme.spacing(0.7, 2),
  borderRadius: theme.shape.borderRadius,
}));

export const BookmarkTypography = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.87)",
}));
