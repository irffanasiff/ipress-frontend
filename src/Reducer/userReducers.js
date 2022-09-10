import {
  ORDER_EDIT_FAIL,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
} from '../Constants/productConstants';
import {
  DETAILS_GET_FAIL,
  DETAILS_GET_REQUEST,
  DETAILS_GET_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_RESET_PASSWORD,
  USER_RESET_PASSWORD_FAIL,
  USER_RESET_PASSWORD_SUCCESS,
  USER_SEND_RESETLINK,
  USER_SEND_RESETLINK_FAIL,
  USER_SEND_RESETLINK_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from '../Constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return { user: {} };
    default:
      return state;
  }
};
// change password reducer
export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SEND_RESETLINK:
      return { loading: true };
    case USER_SEND_RESETLINK_SUCCESS:
      return { loading: false, success: 'link sent' };
    case USER_SEND_RESETLINK_FAIL:
      return { loading: false, error: action.payload };
    case USER_RESET_PASSWORD:
      return { loading: true };
    case USER_RESET_PASSWORD_SUCCESS:
      return { loading: false, success: 'Password Updated' };
    case USER_RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// All users
export const allDetailsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case DETAILS_GET_REQUEST:
      return { loading: true };
    case DETAILS_GET_SUCCESS:
      return { loading: false, ...action.payload };
    case DETAILS_GET_FAIL:
      return { loading: false, error: action.payload };
    case USER_DELETE_REQUEST:
      return { ...state, loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, ...action.payload };
    case USER_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ORDER_EDIT_REQUEST:
      return { ...state, loading: true };
    case ORDER_EDIT_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case ORDER_EDIT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
