import React from 'react';
import './index.css';
import { ChakraProvider, Heading, Center } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Signup, Login, Variants, Cart, ProductDetails } from './Screens';
import theme from './theme';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};
function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/variants" element={<Variants />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart/:id" element={<Cart />} />

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
