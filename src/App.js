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
import { CustomerSupport } from './Screens/CustomerSupport';
import { TermsConditions } from './Screens/TermsConditions';
import ScrollToTop from './Components/Utils/ScrollToTop';
import { getNavItem } from './Actions/itemAction';
import Faq from './Components/Sections/FAQ';
import { CustomerInquiries } from './Screens/CustomerInquiries';
import { AboutUs } from './Screens/AboutUs';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};
function App() {
  const [imgURL, setImgURL] = useState();
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const { userDetails, cart, items, userLogin } = useSelector(state => state);
  const { userInfo } = userLogin;
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
  useEffect(() => {
    if (!items.navItem && !items.loading) {
      dispatch(getNavItem());
    }
  }, [dispatch, items.loading, items.navItem]);
  return (
    <ChakraProvider theme={newTheme}>
      <Fonts />
      <BrowserRouter>
        {userInfo && userInfo.isAdmin ? (
          ''
        ) : (
          <Header
            category={category}
            product={product}
            NAV_ITEMS={items.navItem ? items.navItem : NAV_ITEMS}
          />
        )}
        <ScrollToTop />
        <Routes>
          <Route
            path="/*"
            element={
              userInfo && userInfo.isAdmin ? (
                <AdminHome
                  NAV_ITEMS={items.navItem ? items.navItem : NAV_ITEMS}
                />
              ) : (
                <Home setCategory={setCategory} setProduct={setProduct} />
              )
            }
          />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/variants" element={<Variants />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/customer-support/:section"
            element={<CustomerSupport />}
          />
          <Route path="/customer-inquiries" element={<CustomerInquiries />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
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
            element={
              <ProductDetails
                setUrl={setImgURL}
                setCategory={setCategory}
                setProduct={setProduct}
                NAV_ITEMS={items.navItem ? items.navItem : NAV_ITEMS}
              />
            }
          />
          <Route
            path="/category/:type"
            element={
              <ProductCategory
                items={items.navItem ? items.navItem : NAV_ITEMS}
                setCategory={setCategory}
              />
            }
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
        {userInfo && userInfo.isAdmin ? '' : <Footer />}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
