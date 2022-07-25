import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

type DrawerCardProps = {
  children: ReactNode;
};

const DrawerCard = ({ children }: DrawerCardProps) => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: "340px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "340px",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {children}
      </Drawer>
    </Box>
  );
};

export default DrawerCard;
