import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import classes from "./SideListItem.module.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, LinkProps } from "react-router-dom";

interface ListItemLinkProps {
  icon: React.ReactElement;
  primary: string;
  count: string;
  to: string;
}
const SideListItem: React.FC<ListItemLinkProps> = (props) => {
  const { icon, primary, count, to } = props;

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
