import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import Basket from "../../layout/basket/Basket";
import BasketModal from "../../layout/basketModal/BasketModal";
import { NavLink } from "react-router-dom";

interface IProps {
  basket: Array<{}>;
  addProductToBasket: (i: any) => void;
  removeProductFromBasket: (i: any) => void;
  deleteProductFromBasket: (i: any) => void;
}

const Navigation = ({
  basket,
  addProductToBasket,
  removeProductFromBasket,
  deleteProductFromBasket,
}: IProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(255, 255, 255, 0.7)",
          color: "black",
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink style={{textDecoration: "none", color: "black"}} to="/">
            <Typography
              display="flex"
              alignItems="center"
              variant="h6"
              color="inherit"
              component="div"
            >
              <FastfoodOutlinedIcon /> FeedMe
            </Typography>
          </NavLink>
          <Basket handleClickOpen={handleClickOpen} basket={basket} />
        </Toolbar>
      </AppBar>
      <BasketModal
        addProductToBasket={addProductToBasket}
        removeProductFromBasket={removeProductFromBasket}
        basket={basket}
        open={open}
        setOpen={setOpen}
        deleteProductFromBasket={deleteProductFromBasket}
      />
    </>
  );
};

export default Navigation;
