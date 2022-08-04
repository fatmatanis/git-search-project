import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { IUsers } from "../../types/types";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin: theme.spacing(3, 0),
}));

const Avatar = styled("img")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  widht: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: "50%",
}));

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
    <Box>
      <CustomBox>
        <Avatar src={avatar_url} alt="User Avatar" />
        <Box>
          <Link
            to={`/user/${id}`}
            onClick={getUser}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              {login}
            </Typography>
          </Link>
        </Box>
      </CustomBox>
      <Divider />
    </Box>
  );
};

export default SearchUserList;
