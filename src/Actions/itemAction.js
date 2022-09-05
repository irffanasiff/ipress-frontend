import axios from 'axios';
import {
  ITEMS_FETCH_ERROR,
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_SUCCESS,
} from '../Constants/itemConstants';

export const getNavItem = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEMS_FETCH_REQUEST,
    });

    const { data } = await axios.get(
      'https://ipress-server.herokuapp.com/api/items'
    );

    dispatch({
      type: ITEMS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_FETCH_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
