import axios from 'axios';
import { CART_CLEAR_ITEMS } from '../Constants/cartConstants';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SAVE_PRODUCT,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../Constants/productConstants';
// a product action is created:
// // product action
// //
// // Description:
// // This action is responsible for getting the list of products.

// a action is created for list product details
// // product action
// //
// // Description:
// // This action is responsible for getting the details of a product.
export const listProductDetails = id => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveProducts = data => async dispatch => {
  dispatch({ type: SAVE_PRODUCT, payload: data });
  localStorage.setItem('SAVED_PRODUCT', JSON.stringify(data));
};

export const orderProducts = order => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/orders',
      { ...order },
      config
    );
    console.log(data);
    // on success clear cart product

    dispatch({
      type: ORDER_CREATE_SUCCESS,
    });
    dispatch({
      type: CART_CLEAR_ITEMS,
    });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get all orders from a user
export const listProducts = data => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      'http://localhost:5000/api/orders',
      config
    );
    console.log(data);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
