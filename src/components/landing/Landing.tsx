import React, { useEffect } from "react";
import { IMeal } from "../../types/types";

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
    <div>
      {meal.map((i) => (
       <p key={i.id}>{i.name}</p>
      ))}
    </div>
  );
};

export default Landing;
