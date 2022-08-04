import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

type DrawerCardProps = {
  children: ReactNode;
};

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: "360px",
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: "360px",
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("md")]: {
    width: "260px",
    [`& .MuiDrawer-paper`]: {
      width: "260px",
      boxSizing: "border-box",
    },
  },
}));

const DrawerCard = ({ children }: DrawerCardProps) => {
  return (
    <Box>
      <CustomDrawer variant="permanent">
        <Toolbar />
        {children}
      </CustomDrawer>
    </Box>
  );
};

export default DrawerCard;
