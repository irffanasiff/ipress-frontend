import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SAVE_PRODUCT,
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
