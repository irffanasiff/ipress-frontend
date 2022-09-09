import {
  IMAGES_FETCH_REQUEST,
  IMAGES_FETCH_ERROR,
  IMAGES_FETCH_SUCCESS,
} from '../Constants/imageConstants.js';
import {
  IMAGE_EDIT_ERROR,
  IMAGE_EDIT_REQUEST,
  IMAGE_EDIT_SUCCESS,
} from '../Constants/itemConstants.js';

export const imagesGetReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGES_FETCH_REQUEST:
      return { ...state, loading: true };
    case IMAGES_FETCH_SUCCESS:
      return { loading: false, imageData: action.payload };
    case IMAGES_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case IMAGE_EDIT_REQUEST:
      return { ...state, loading: true };
    case IMAGE_EDIT_SUCCESS:
      return { loading: false, imageData: action.payload };
    case IMAGE_EDIT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
