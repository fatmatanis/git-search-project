import React from "react";
import { Link, LinkProps } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { ListItemButton, Typography } from "@mui/material";
import { theme } from "../../styles/themes";
import { IListItemLinkProps } from "../../types/types";

const CustomListItem = styled(ListItem)(({ theme }) => ({
  flexDirection: "row",
  backgroundColor: theme.palette.info.main,
}));

const SideListItem: React.FC<IListItemLinkProps> = ({
  icon,
  primary,
  count,
  to,
}) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, "to">>(
        function RouterLink(itemProps, ref) {
          return <Link to={to} ref={ref} {...itemProps} />;
        }
      ),
    [to]
  );
  return (
    <CustomListItem disablePadding>
      <ListItemButton
        component={renderLink}
        sx={{
          "&:focus": {
            backgroundColor: theme.palette.info.light,
            color: "#375f9d",
          },
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
        <Typography>{count}</Typography>
      </ListItemButton>
    </CustomListItem>
  );
};
export default SideListItem;
