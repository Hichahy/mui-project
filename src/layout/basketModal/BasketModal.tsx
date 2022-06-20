import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  basketAmount: number;
}

const AlertDialog = ({ open, setOpen, basketAmount }: IProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {basketAmount < 1 ? (
            <DialogContentText id="alert-dialog-description">
              Your basket is empy.
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Yes Youu can buy this {basketAmount} product
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          {basketAmount > 0 ? (
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
