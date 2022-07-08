import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: "350px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "350px",
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

export default Card;
