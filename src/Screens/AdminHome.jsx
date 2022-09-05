import { Container, HStack } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Components/Admin/Dashboard';
import { OrderList } from '../Components/Admin/OrderList';
import { Settings } from '../Components/Admin/Settings';
import { UserList } from '../Components/Admin/UserList';
import { Sidebar } from '../Components/Sidebar/Sidebar';

const AdminHome = () => {
  return (
    <Container paddingInline={'0'} maxW={'full'} pl={'200px'}>
      <HStack gap={7} background={'gray.100'}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </HStack>
    </Container>
  );
};
export { AdminHome };
