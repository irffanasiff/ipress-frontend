import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function AdminNavItem({ icon, title, active, navSize, link }) {
  return (
    <Flex
      mt={3}
      flexDir="column"
      w="100%"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Box
        backgroundColor={active && 'white'}
        color={active ? 'black' : 'white'}
        p={3}
        borderRadius={8}
        _hover={{
          textDecor: 'none',
          backgroundColor: 'white',
          color: 'black',
        }}
        w={navSize === 'large' && '100%'}
      >
        <NavLink to={`/${link}`}>
          <Flex width={'100%'}>
            <Icon as={icon} fontSize="xl" />
            <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
              {title}
            </Text>
          </Flex>
        </NavLink>
      </Box>
    </Flex>
  );
}
