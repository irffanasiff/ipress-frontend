import {
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_ERROR,
  ITEMS_FETCH_SUCCESS,
} from '../Constants/itemConstants.js';

export const itemsGetReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_FETCH_REQUEST:
      return { loading: true };
    case ITEMS_FETCH_SUCCESS:
      return { loading: false, navItem: action.payload };
    case ITEMS_FETCH_ERROR:
      return { loading: false, error: action.payload, ...state };
    default:
      return state;
  }
};
