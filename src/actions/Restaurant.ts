import { ADD_TO_BASKET, LOAD_MEAL } from "../common/types";
import { IMeal } from "../types/types";
import axios from "axios";

const url: any = process.env.REACT_APP_FIREBASE_GET_DATA;

export const loadMeal = () => async (dispatch: any) => {
  try {
    const res = await axios.get(url);
    dispatch({
      type: LOAD_MEAL,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

//Witch Amount product
// export const addProductToBasket = (product: IMeal) => (dispatch: any, getState: any) => {
//   const basket = getState().restaurant.meal.slice()
//   let alreadyExists = false
//   basket.forEach((x: any) => {
//     if (x.id === product.id) {
//       alreadyExists = true
//       x.count++
//     }
//   })
//   if (!alreadyExists) {
//     basket.push({ ...product, count: 1 })
//   }
//   dispatch({
//     type: ADD_TO_BASKET,
//     payload: { basket }
//   })
//   // localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }

export const addProductToBasket =
  (product: IMeal) => (dispatch: any, getState: any) => {
    const basket = getState().restaurant.basket;
    let amountBasket = basket.length + 1
    basket.push({ ...product });

    dispatch({
      type: ADD_TO_BASKET,
      payload: { basket, amountBasket},
    });
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
