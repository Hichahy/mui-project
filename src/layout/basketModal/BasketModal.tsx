import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TableBasket from "../tableBasket/TableBasket";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  basketAmount: number;
  basket: any;
}

const AlertDialog = ({ open, setOpen, basketAmount, basket }: IProps) => {
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
            <TableBasket basket={basket} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          {basketAmount > 0 ? (
            <Button onClick={handleClose} autoFocus>
              order now
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
