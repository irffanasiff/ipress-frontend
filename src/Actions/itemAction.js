import axios from 'axios';
import {
  IMAGE_EDIT_ERROR,
  IMAGE_EDIT_REQUEST,
  IMAGE_EDIT_SUCCESS,
  ITEMS_EDIT_ERROR,
  ITEMS_EDIT_REQUEST,
  ITEMS_EDIT_SUCCESS,
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

export const editNavItem = item => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEMS_EDIT_REQUEST,
    });

    const {
      userLogin: { userInfo },
      items: { navItem },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch(
      'https://ipress-server.herokuapp.com/api/items',
      { ...item },
      config
    );
    dispatch({
      type: ITEMS_EDIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_EDIT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editItemSample = item => async (dispatch, getState) => {
  try {
    dispatch({
      type: IMAGE_EDIT_REQUEST,
    });

    const {
      userLogin: { userInfo },
      items: { navItem },
      images,
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch(
      'https://ipress-server.herokuapp.com/api/items',
      { ...item },
      config
    );
    let payload = {};
    if (images.imageData) {
      payload = { ...images.imageData };
    }
    if (item.type === 'Delete') {
      payload[item.folder] = payload[item.folder].filter(
        img => !img['secure_url'].includes(item.image)
      );
    } else {
      let keys_to_keep = ['filename', 'secure_url'];
      payload[item.folder].push(
        keys_to_keep.reduce((acc, curr) => {
          acc[curr] = data[curr];
          return acc;
        }, {})
      );
    }
    dispatch({
      type: IMAGE_EDIT_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_EDIT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
