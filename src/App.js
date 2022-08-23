import React, { useEffect, useState } from 'react';
import './index.css';
import { ChakraProvider, Heading, Center } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails, logout } from './Actions/userAction';
import {
  Home,
  Signup,
  Login,
  Variants,
  Cart,
  ProductDetails,
  ChangePassword,
  UserProfile,
} from './Screens';
import theme, { Fonts } from './theme';
import { Designs } from './Screens/Designs';
import { Editor } from './Screens/Editor';
import { Shipping } from './Screens/Shipping';
import { Payment } from './Screens/Payment';
import { PlaceOrder } from './Screens/PlaceOrder';
import { listCartItems } from './Actions/cartAction';
import { AdminHome } from './Screens/AdminHome';
import { ProductCategory } from './Screens/ProductCategory';
import { NAV_ITEMS } from './Components/Header/NavItems';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};
function App() {
  const [imgURL, setImgURL] = useState();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector(state => state.userDetails);

  const cart = useSelector(state => state.cart);
  const { cartItems, loading } = cart;
  const { user, error } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo && (!user || !user.name) && !error) {
      try {
        dispatch(getUserDetails('profile'));
      } catch (err) {
        console.log(err);
      }
    } else if (error === 'Token expired') {
      dispatch(logout());
    } else if (user.name && !cartItems && !loading) {
      dispatch(listCartItems());
    }
  }, [dispatch, user, userInfo, error, loading, cartItems]);
  return (
    <ChakraProvider theme={newTheme}>
      <Fonts />
      <BrowserRouter>
        {userInfo && userInfo.isAdmin ? '' : <Header />}
        <Routes>
          <Route
            path="/*"
            element={userInfo && userInfo.isAdmin ? <AdminHome /> : <Home />}
          />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/variants" element={<Variants />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/designs/:type"
            element={<Designs setUrl={setImgURL} />}
          />
          <Route
            path="/designs/:type/editor"
            element={<Editor imgURL={imgURL} />}
          />
          <Route path="/reset-password" element={<ChangePassword />} />
          <Route
            path="/product/:id"
            element={<ProductDetails setUrl={setImgURL} />}
          />
          <Route
            path="/category/:type"
            element={<ProductCategory items={NAV_ITEMS} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="*"
            element={
              <Center h="75vh">
                <Heading w="full" textAlign={'center'}>
                  Page Not found
                </Heading>
              </Center>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
