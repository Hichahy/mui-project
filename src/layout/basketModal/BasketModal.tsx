import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogContentText from "@mui/material/DialogContentText";
import TableBasket from "../tableBasket/TableBasket";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  basket: any;
  addProductToBasket: (i: any) => void;
  removeProductFromBasket: (i: any) => void;
  deleteProductFromBasket: (i: any) => void;
}

const AlertDialog = ({
  open,
  setOpen,
  basket,
  addProductToBasket,
  removeProductFromBasket,
  deleteProductFromBasket
}: IProps) => {
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
        fullWidth={true}
      >
        <DialogContent>
          {basket.length < 1 ? (
            <DialogContentText id="alert-dialog-description">
              Your basket is empy.
            </DialogContentText>
          ) : (
            <TableBasket
              removeProductFromBasket={removeProductFromBasket}
              addProductToBasket={addProductToBasket}
              deleteProductFromBasket={deleteProductFromBasket}
              basket={basket}
            />
          )}
        </DialogContent>
        {basket.length > 0 ? (
          <Typography align="right" variant="h6" sx={{ padding: "0 24px" }}>
            Total:
            {basket
              .reduce((a: any, c: any) => a + c.price * c.count, 0)
              .toFixed(2)}
            $
          </Typography>
        ) : null}
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Back
          </Button>
          {basket.length > 0 ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleClose}
              autoFocus
            >
              order now
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
