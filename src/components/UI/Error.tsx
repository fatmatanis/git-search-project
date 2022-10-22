import React, { useContext } from "react";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ErrorSharp } from "@mui/icons-material";
import { ResultContext } from "../../store/result-context";
import { ErrorProps } from "../../types/types";

const Error: React.FC<ErrorProps> = ({ alertText }) => {
  const [open, setOpen] = React.useState(true);

  const { setError } = useContext(ResultContext);

  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <IconButton edge="start" color="warning">
            <ErrorSharp />
          </IconButton>
          Oops!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Error;
