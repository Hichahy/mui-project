import typeToReducer from 'type-to-reducer'
import { 
  LOAD_MEAL
} from '../common/types'

interface stateRestaurant {
  meal: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    type:string[];
  }>;
  filteredItems: Array<{}>;
}

const initialState: stateRestaurant = {
meal: [],
filteredItems: [],
}

export const user = typeToReducer(
  {
    [LOAD_MEAL]: (state: stateRestaurant, action: any) => ({
      ...state,
      meal: action.payload,
      filteredItems: action.payload
    }),
  },
  initialState
)

export default user