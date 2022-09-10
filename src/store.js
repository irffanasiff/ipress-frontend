import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
} from './Reducer/productReducer';
import {
  allDetailsReducer,
  changePasswordReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from './Reducer/userReducers';
import { cartReducer } from './Reducer/cartReducers';
import { imagesGetReducer } from './Reducer/imageReducer';
import { orderReducer } from './Reducer/orderReducers';
import { itemsGetReducer } from './Reducer/itemReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  productSaved: productSaveReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  images: imagesGetReducer,
  order: orderReducer,
  passwordReset: changePasswordReducer,
  items: itemsGetReducer,
  allDetails: allDetailsReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : null;
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : null;
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null;
const savedProductFromStorage = localStorage.getItem('SAVED_PRODUCT')
  ? JSON.parse(localStorage.getItem('SAVED_PRODUCT'))
  : {};
const initialState = {
  productSaved: { product: savedProductFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
    shippingPrice: '500',
    loading: false,
  },
  userLogin: { userInfo: userInfoFromStorage },
  items: { loading: false },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
