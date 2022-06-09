import typeToReducer from 'type-to-reducer'
// import { } from '../common/types'

interface stateRestaurant {
}

const initialState: stateRestaurant = {

}

export const user = typeToReducer(
  {
    // [LOAD_GAME]: (state: stateRental, action: any) => ({
    //   ...state,
    //   games: action.payload,
    //   filteredItems: action.payload
    // }),
  },
  initialState
)

export default user