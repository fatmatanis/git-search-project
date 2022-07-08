import React from "react";

import classes from "./SearchUserList.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { IUsers } from "../../types/types";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";

const SearchUserList: React.FC<IUsers> = (props) => {
  const getUser = () => {
    props.handleUserDetail(props.login);
  };

  return (
    <>
      <Box className={classes.box}>
        <img
          src={props.avatar_url}
          alt="User Avatar"
          className={classes.avatar}
        />
        <Box>
          <Link
            to={`/user/${props.id}`}
            className={classes.link}
            onClick={getUser}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              className={classes.login}
            >
              {props.login}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default SearchUserList;
