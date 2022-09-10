import { Container, HStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getAllDetails } from '../Actions/userAction';
import { Dashboard } from '../Components/Admin/Dashboard';
import { OrderList } from '../Components/Admin/OrderList';
import { ProductList } from '../Components/Admin/ProductList';
import { Settings } from '../Components/Admin/Settings';
import { UserList } from '../Components/Admin/UserList';
import { Sidebar } from '../Components/Sidebar/Sidebar';

const AdminHome = ({ NAV_ITEMS }) => {
  const dispatch = useDispatch();
  const {
    allDetails: { users, loading, orders, products },
  } = useSelector(state => state);
  useEffect(() => {
    // get all orders and products
    if (!users && !loading) {
      dispatch(getAllDetails());
    }
  }, [users, loading, dispatch]);
  return (
    <Container
      paddingInline={'0'}
      maxW={'full'}
      pl={{ base: '0px', md: '200px' }}
      pt={{ base: '20px', md: '0px' }}
      bg={'#EDF2F7'}
      minH={'100vh'}
      pos={'relative'}
      justifyContent={{ md: 'center' }}
    >
      <HStack gap={7} background={'gray.100'}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route
            path="/admin/settings"
            element={<Settings NAV_ITEMS={NAV_ITEMS} />}
          />
        </Routes>
      </HStack>
    </Container>
  );
};
export { AdminHome };
