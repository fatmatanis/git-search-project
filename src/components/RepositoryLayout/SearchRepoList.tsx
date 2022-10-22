import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import { ClassOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
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
      <Box sx={{ display: "flex", m: "24px 0" }}>
        <ClassOutlined sx={{ p: "4px 8px" }} />
        <Box>
          <Link
            to={`/repositories/${id}`}
            style={{ textDecoration: "none" }}
            onClick={getRepository}
          >
            <Typography variant="h6" color="secondary.light">
              {fullName}
            </Typography>
          </Link>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default SearchRepoList;
