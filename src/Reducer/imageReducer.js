import {
  IMAGES_FETCH_REQUEST,
  IMAGES_FETCH_ERROR,
  IMAGES_FETCH_SUCCESS,
} from '../Constants/imageConstants.js';

export const imagesGetReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGES_FETCH_REQUEST:
      return { loading: true, ...state };
    case IMAGES_FETCH_SUCCESS:
      return { loading: false, imageData: action.payload };
    case IMAGES_FETCH_ERROR:
      return { loading: false, error: action.payload, ...state };
    default:
      return state;
  }
};
