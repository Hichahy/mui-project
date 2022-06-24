import React, { useEffect } from "react";
import "./product.scss";
import { IMeal } from "../../types/types";
import { useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

interface IProps {
  meal: IMeal[];
  loadMeal: () => void;
  addProductToBasket: (porduct: any) => void;
}

const Product = ({ meal, loadMeal, addProductToBasket }: IProps) => {
  useEffect(() => {
    loadMeal();
  }, []);

  const { id } = useParams();
  const find = () => {
    return meal.find((x: any) => x.id === id);
  };

  const product = find()!;

  if (meal.length < 1) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "93vh",
        }}
      >
        <CircularProgress size="100px" />
      </Box>
    );
  }

  return (
    <div className="product-container">
      <NavLink className="back" to="/">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <div className="description-box">
        <Typography variant="h2">{product.name}</Typography>
        <Typography variant="overline">
          that&apos;s a {product.type} food
        </Typography>
        <Typography variant="overline" component="h2">
          {product.description}
        </Typography>
        <Typography variant="h1">{product.price.toFixed(2)}$</Typography>
        <IconButton
          size="large"
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => addProductToBasket(product)}
        >
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
      </div>
      <img className="product-img" src={product.image} alt={product.name} />
    </div>
  );
};

export default Product;
