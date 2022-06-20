import React, { useEffect } from "react";
import "./landing.scss";
import { IMeal } from "../../types/types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BoxHeader from "../../layout/box/BoxHeader";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface IProps {
  meal: IMeal[];
  loadMeal: () => void;
}

const Landing = ({ meal, loadMeal }: IProps) => {
  useEffect(() => {
    loadMeal();
  }, []);

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
    <>
      <BoxHeader />
      <div className="container-card">
        {meal.map((i) => (
          <Card
            key={i.id}
            sx={{ width: 345, margin: 2, height: "fit-content" }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  align="inherit"
                  gutterBottom
                  variant="body2"
                  component="div"
                >
                  {i.name}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image={i.image}
                alt={i.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                align="inherit"
                sx={{
                  paddingBottom: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                variant="h5"
                component="div"
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {i.price.toFixed(2)}
                  <PaidRoundedIcon sx={{ margin: "0 5px", color: "#d9ad00" }} />
                </Box>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Landing;
