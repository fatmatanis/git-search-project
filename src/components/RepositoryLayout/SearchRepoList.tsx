import React from "react";

import classes from "./SearchRepoList.module.css";
import Box from "@mui/material/Box";
import { ClassOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "@fontsource/roboto/400.css";
import { Link } from "react-router-dom";
import { IBaseRepositoryProps } from "../../types/types";

const SearchRepoList: React.FC<IBaseRepositoryProps> = ({
  handleRepositoryDetail,
  login,
  name,
  id,
  fullName,
  description,
}) => {
  const getRepository = () => {
    handleRepositoryDetail(login, name);
  };
  return (
    <>
      <Box className={classes.box}>
        <ClassOutlined className={classes["class-icon"]} />
        <Box className={classes.detail}>
          <Link
            to={`/repositories/${id}`}
            className={classes.link}
            onClick={getRepository}
          >
            <Typography variant="h6" component="div" className={classes.name}>
              {fullName}
            </Typography>
          </Link>
          <Typography variant="subtitle1" gutterBottom component="div">
            {description}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default SearchRepoList;
