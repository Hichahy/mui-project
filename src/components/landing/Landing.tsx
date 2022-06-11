import React, { useEffect } from "react";
import "./landing.scss"
import { IMeal } from "../../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface IProps {
  meal: IMeal[];
  loadMeal: () => void;
}

const Landing = ({ meal, loadMeal }: IProps) => {
  useEffect(() => {
    loadMeal();
  }, []);

  if (meal.length < 1) {
    return <div>loading...</div>;
  }

  return (
    <div className="container-card">
      {meal.map((i) => (
        <Card style={{margin: "20px"}} key={i.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={i.image}
              alt={i.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Landing;
