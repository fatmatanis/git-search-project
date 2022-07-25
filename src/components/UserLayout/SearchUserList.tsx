import React from "react";
import { Link } from "react-router-dom";

import classes from "./SearchUserList.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { IUsers } from "../../types/types";
import "@fontsource/roboto/400.css";

const SearchUserList: React.FC<IUsers> = ({
  handleUserDetail,
  login,
  avatar_url,
  id,
}) => {
  const getUser = () => {
    handleUserDetail(login);
  };

  return (
    <>
      <Box className={classes.box}>
        <img src={avatar_url} alt="User Avatar" className={classes.avatar} />
        <Box>
          <Link to={`/user/${id}`} className={classes.link} onClick={getUser}>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              className={classes.login}
            >
              {login}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default SearchUserList;
