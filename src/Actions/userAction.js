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
import {
  ORDER_EDIT_FAIL,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
} from '../Constants/productConstants';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'https://ipress-server.herokuapp.com/api/user/login',
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_UPDATE_RESET });
};

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'https://ipress-server.herokuapp.com/api/user',
      { name, email, password },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `https://ipress-server.herokuapp.com/api/user/${id}`,
      config
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = user => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `https://ipress-server.herokuapp.com/api/user/profile`,
      user,
      config
    );

    await dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const sendResetLink = email => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_SEND_RESETLINK,
    });
    const { data } = await axios.post(
      `https://ipress-server.herokuapp.com/api/user/link`,
      {
        email,
      }
    );
    await dispatch({
      type: USER_SEND_RESETLINK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message);
    dispatch({
      type: USER_SEND_RESETLINK_FAIL,
      payload: message,
    });
  }
};
export const changePassword =
  (password, token) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_RESET_PASSWORD,
      });
      const { data } = await axios.post(
        `https://ipress-server.herokuapp.com/api/user/password`,
        {
          password,
          token,
        }
      );
      await dispatch({
        type: USER_RESET_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(message);
      dispatch({
        type: USER_RESET_PASSWORD_FAIL,
        payload: message,
      });
    }
  };

export const deleteUser = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
      allDetails: { users },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `https://ipress-server.herokuapp.com/api/user/admin/${id}`,
      config
    );
    await dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const getAllDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DETAILS_GET_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `https://ipress-server.herokuapp.com/api/user`,
      config
    );

    await dispatch({
      type: DETAILS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: DETAILS_GET_FAIL,
      payload: message,
    });
  }
};

// set order paid and delivered
// ADMIN
export const editOrders = edit => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_EDIT_REQUEST,
    });
    const {
      userLogin: { userInfo },
      allDetails: { orders },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      'https://ipress-server.herokuapp.com/api/orders',
      edit,
      config
    );
    let newOrders = orders.map(order =>
      order._id === data._id ? (order = { ...order, ...edit.update }) : order
    );
    dispatch({
      type: ORDER_EDIT_SUCCESS,
      payload: newOrders,
    });
  } catch (error) {
    dispatch({
      type: ORDER_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
