import React, { useState, useEffect } from "react";
import "./basket.scss";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface IProps {
  basket: Array<{}>
  handleClickOpen: () => void;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "#1976d2",
  },
}));

const Basket = ({ handleClickOpen, basket}: IProps) => {
  const [btnisHightLighted, setBtnisHightLighted] = useState(false);

   // funkcja akumulująca
   const totalCount = basket.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.count
  }, 0)

  useEffect(() => {
    setBtnisHightLighted(true);
    const timer = setTimeout(() => {
      setBtnisHightLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalCount]);

  return (
    <IconButton
      className={`${btnisHightLighted ? "bump" : ""}`}
      onClick={handleClickOpen}
      aria-label="cart"
    >
      <StyledBadge  badgeContent={totalCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge >
    </IconButton >
  );
};

export default Basket;
