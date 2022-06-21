import React, { useState, useEffect } from "react";
import "./basket.scss";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface IProps {
  basketAmount: any;
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

const Basket = ({ handleClickOpen, basketAmount }: IProps) => {
  const [btnisHightLighted, setBtnisHightLighted] = useState(false);

  useEffect(() => {
    setBtnisHightLighted(true);
    const timer = setTimeout(() => {
      setBtnisHightLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [basketAmount]);

  return (
    <IconButton
      className={`${btnisHightLighted ? "bump" : ""}`}
      onClick={handleClickOpen}
      aria-label="cart"
    >
      <StyledBadge badgeContent={basketAmount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default Basket;
