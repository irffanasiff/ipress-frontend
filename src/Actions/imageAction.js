import axios from 'axios';

import {
  IMAGES_FETCH_REQUEST,
  IMAGES_FETCH_ERROR,
  IMAGES_FETCH_SUCCESS,
} from '../Constants/imageConstants.js';

export const getImages = type => async (dispatch, getState) => {
  try {
    dispatch({
      type: IMAGES_FETCH_REQUEST,
    });
    const { data } = await axios.get(
      `http://ipress-server.herokuapp.com/api/images?folder=${type}`
    );
    const { images } = getState();
    let payload = {};
    if (images.imageData) {
      payload = { ...images.imageData };
    }
    let keys_to_keep = ['filename', 'secure_url'];
    payload[type] = data.resources.map(img =>
      keys_to_keep.reduce((acc, curr) => {
        acc[curr] = img[curr];
        return acc;
      }, {})
    );
    dispatch({
      type: IMAGES_FETCH_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: IMAGES_FETCH_ERROR,
      payload: message,
    });
  }
};
