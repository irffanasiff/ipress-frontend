import {
  CART_ADD_ITEM,
  CART_CHANGE_QUANTITY,
  CART_CLEAR,
  CART_CLEAR_ITEMS,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../Constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], loading: true },
  action
) => {
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
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_LIST_REQUEST:
      return { ...state, loading: true };
    case CART_LIST_SUCCESS:
      return { ...state, loading: false, cartItems: action.payload };
    case CART_LIST_FAIL:
      return { ...state, error: action.payload, loading: false };
    case CART_CLEAR_ITEMS:
      return { ...state, cartItems: [] };
    case CART_CHANGE_QUANTITY:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};
