import {
  ADD_TO_BASKET,
  LOAD_MEAL,
  REMOVE_FROM_BASKET,
  DELETE_FROM_BASKET,
} from "../common/types";
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

export const addProductToBasket =
  (product: IMeal) => (dispatch: any, getState: any) => {
    const basket = getState().restaurant.basket.slice();
    let alreadyExists = false;
    basket.forEach((x: any) => {
      if (x.id === product.id) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      basket.push({ ...product, count: 1 });
    }
    dispatch({
      type: ADD_TO_BASKET,
      payload: { basket },
    });
  };

export const removeProductFromBasket =
  (product: IMeal) => (dispatch: any, getState: any) => {
    const basket = getState().restaurant.basket.slice();
    basket.forEach((x: any) => {
      if (x.id === product.id && product.count > 1) {
        x.count--;
      }
    });
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: { basket },
    });
  };

export const deleteProductFromBasket =
  (product: IMeal) => (dispatch: any, getState: any) => {
    const basket = getState()
      .restaurant.basket.slice()
      .filter((x: any) => x.id !== product.id);

    dispatch({
      type: DELETE_FROM_BASKET,
      payload: { basket },
    });
  };
