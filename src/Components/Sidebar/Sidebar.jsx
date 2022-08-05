import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi';
import AdminNavItem from './AdminNavItem';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large');
  const { pathname } = useLocation();
  return (
    <Flex
      pos="sticky"
      left="5"
      my="2.5vh"
      alignSelf={'stretch'}
      minH={'95vh'}
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      minW={navSize === 'small' ? '70px' : '200px'}
      flexDir="column"
      justifyContent="space-between"
      bg="ipress.600"
      color="white"
    >
      <Flex
        p={2}
        flexDir={'column'}
        w={'100%'}
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          background="none"
          color="white"
          fontSize={navSize === 'small' ? '2xl' : 'xl'}
          mt={5}
          _hover={{ background: 'none' }}
          _active={{ background: 'white', color: 'black' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        <AdminNavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          link=""
          active={pathname === '/'}
        />

        <AdminNavItem
          navSize={navSize}
          icon={FiUser}
          title="Clients"
          link="admin/users"
          active={pathname === '/admin/users'}
        />

        <AdminNavItem
          navSize={navSize}
          icon={FiDollarSign}
          title="Orders"
          link="admin/orders"
          active={pathname === '/admin/orders'}
        />
        <AdminNavItem
          navSize={navSize}
          icon={FiSettings}
          title="Settings"
          link="admin/settings"
          active={pathname === '/admin/settings'}
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              ADMIN NAME
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
