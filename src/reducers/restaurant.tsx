import typeToReducer from "type-to-reducer";
import { ADD_TO_BASKET, LOAD_MEAL } from "../common/types";

interface stateRestaurant {
  meal: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    type: string[];
  }>;
  filteredItems: Array<{}>;
  basket: Array<{}>;
  amountBasket: number;
}

const initialState: stateRestaurant = {
  meal: [],
  filteredItems: [],
  basket: [],
  amountBasket: 0,
};

export const user = typeToReducer(
  {
    [LOAD_MEAL]: (state: stateRestaurant, action: any) => ({
      ...state,
      meal: action.payload,
      filteredItems: action.payload,
    }),

    [ADD_TO_BASKET]: (state: stateRestaurant, action: any) => ({
      ...state,
      basket: action.payload.basket,
      amountBasket: action.payload.amountBasket,
    }),
  },
  initialState
);

export default user;
