import {
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_ERROR,
  ITEMS_FETCH_SUCCESS,
  ITEMS_EDIT_REQUEST,
  ITEMS_EDIT_SUCCESS,
  ITEMS_EDIT_ERROR,
} from '../Constants/itemConstants.js';

export const itemsGetReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_FETCH_REQUEST:
      return { loading: true };
    case ITEMS_FETCH_SUCCESS:
      return { loading: false, navItem: action.payload };
    case ITEMS_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ITEMS_EDIT_REQUEST:
      return { ...state, loading: true };
    case ITEMS_EDIT_SUCCESS:
      return { loading: false, navItem: action.payload };
    case ITEMS_EDIT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
