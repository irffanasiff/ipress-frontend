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
  useDisclosure,
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
import { CloseIcon } from '@chakra-ui/icons';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { pathname } = useLocation();
  return (
    <VStack
      pos="fixed"
      left="0"
      top={'0'}
      h={{ base: isOpen ? '100vh' : 'fit-content', md: '100vh' }}
      w={{ base: '50px', md: '200px' }}
      justifyContent="space-between"
      bg="main.400"
      color="white"
    >
      <Flex display={{ base: 'flex', md: 'none' }}>
        <IconButton
          _hover={{ color: 'white' }}
          _active={{ color: 'white' }}
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon size={32} /> : <HiOutlineMenuAlt4 size={32} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <VStack
        spacing={0}
        w={'100%'}
        alignItems={'flex-start'}
        as="nav"
        py={'60px'}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
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
      <VStack
        w="100%"
        alignItems={'center'}
        mb={4}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
      >
        <Divider />
        <HStack mt={4} align="flex-start" pb={2}>
          <Avatar size="sm" src="avatar-1.jpg" mx={'auto'} />
          <Flex flexDir="column" ml={4} display={{ base: 'none', md: 'flex' }}>
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
