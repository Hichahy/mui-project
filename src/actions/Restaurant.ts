import { LOAD_MEAL } from '../common/types';
import axios from 'axios';

const url :any = process.env.REACT_APP_FIREBASE_GET_DATA

export const loadMeal = () => async (dispatch: any) => {
  try {
    const res = await axios.get(
      url
    );
    dispatch({
      type: LOAD_MEAL,
      payload: res.data
    });
  } catch (err) {
    console.log('err', err);
  }
};