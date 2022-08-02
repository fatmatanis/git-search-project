import React from "react";
import { Link, LinkProps } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import classes from "./SideListItem.module.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IListItemLinkProps } from "../../types/types";

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
          return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
        }
      ),
    [to]
  );
  return (
    <List>
      <ListItem
        button
        component={renderLink}
        className={classes.button}
        disablePadding
      >
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <div className={classes.primary}>
          <ListItemText primary={primary} />
        </div>
        <div className={classes.count}>
          <ListItemText primary={count} />
        </div>
      </ListItem>
    </List>
  );
};
export default SideListItem;
