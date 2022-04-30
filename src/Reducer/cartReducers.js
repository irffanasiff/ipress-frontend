import {
  CART_ADD_ITEM,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REMOVE_ITEM,
} from '../Constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x === item);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x === existItem ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x._id !== action.payload),
      };
    case CART_LIST_REQUEST:
      return { ...state, loading: true };
    case CART_LIST_SUCCESS:
      return { ...state, loading: false, cartItems: action.payload };
    case CART_LIST_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
