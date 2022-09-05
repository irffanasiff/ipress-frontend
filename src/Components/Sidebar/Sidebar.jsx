import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import AdminNavItem from './AdminNavItem';
import { useLocation } from 'react-router-dom';
import Logo from '../../Images/logo.webp';

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <VStack
      pos="fixed"
      left="0"
      top={'0'}
      h={'100vh'}
      w={{ base: '70px', md: '200px' }}
      justifyContent="space-between"
      bg="main.400"
      color="white"
    >
      <VStack
        spacing={0}
        w={'100%'}
        alignItems={'flex-start'}
        as="nav"
        py={'60px'}
      >
        <AdminNavItem
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          link=""
          active={pathname === '/'}
        />

        <AdminNavItem
          icon={FiUser}
          title="Clients"
          link="admin/users"
          active={pathname === '/admin/users'}
        />

        <AdminNavItem
          icon={BsCartCheck}
          title="Products"
          link="admin/products"
          active={pathname === '/admin/products'}
        />

        <AdminNavItem
          icon={FiDollarSign}
          title="Orders"
          link="admin/orders"
          active={pathname === '/admin/orders'}
        />
        <AdminNavItem
          icon={FiSettings}
          title="Settings"
          link="admin/settings"
          active={pathname === '/admin/settings'}
        />
      </VStack>
      <VStack w="100%" alignItems={'center'} mb={4}>
        <Divider />
        <HStack mt={4} align="flex-start">
          <Avatar size="sm" src="avatar-1.jpg" mx={'auto'} />
          <Flex flexDir="column" ml={4}>
            <Heading as="h3" size="sm">
              ADMIN NAME
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </HStack>
      </VStack>
    </VStack>
  );
};
