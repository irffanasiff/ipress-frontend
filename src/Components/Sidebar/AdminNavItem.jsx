import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function AdminNavItem({ icon, title, active, link }) {
  return (
    <Flex mt={3} flexDir="column" w="100%" alignItems={'flex-start'}>
      <Box
        cursor={'pointer'}
        backgroundColor={active && 'white'}
        color={active ? 'black' : 'white'}
        px={7}
        py={4}
        border={'1px solid #00509E'}
        _hover={{
          textDecor: 'none',
          backgroundColor: 'white',
          color: 'black',
        }}
        w={'100%'}
      >
        <NavLink to={`/${link}`}>
          <Flex width={'100%'}>
            <Icon as={icon} fontSize="xl" />
            <Text ml={5} display={'flex'}>
              {title}
            </Text>
          </Flex>
        </NavLink>
      </Box>
    </Flex>
  );
}
