import { Table } from 'react-chakra-pagination';
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
} from '@chakra-ui/react';
import { FiTrash2, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Actions/userAction';

export const UserList = () => {
  const [page, setPage] = useState(1);

  const {
    allDetails: { users, loading },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const tableData = users
    ? users.map((user, index) => ({
        index: (
          <Heading w={'100%'} textAlign={'center'}>
            {index + 1}
          </Heading>
        ),
        name: (
          <Flex align="center">
            <Text>{user.name}</Text>
          </Flex>
        ),
        email: user.email,
        createdAt: user.createdAt.split('T')[0],
        action: (
          <Button
            colorScheme="gray"
            onClick={() => dispatch(deleteUser(user._id))}
            size="sm"
            bg={'white'}
          >
            <Icon as={FiTrash2} fontSize="20" />
          </Button>
        ),
        orders: (
          <Button size="md" bg={'white'} onClick={() => {}}>
            View Orders
          </Button>
        ),
      }))
    : [];

  // Accessor to get a data in user object
  const tableColumns = [
    {
      Header: (
        <Heading
          textAlign={'center'}
          fontSize={{ base: 'md', md: '1.5rem' }}
          fontWeight={600}
          color="#00509E"
        >
          Sr. No.
        </Heading>
      ),
      accessor: 'index',
    },
    {
      Header: (
        <Heading
          fontSize={{ base: 'md', md: '1.5rem' }}
          fontWeight={600}
          color="#00509E"
        >
          Name
        </Heading>
      ),
      accessor: 'name',
    },
    {
      Header: (
        <Heading
          fontSize={{ base: 'md', md: '1.5rem' }}
          fontWeight={600}
          color="#00509E"
        >
          Email
        </Heading>
      ),
      accessor: 'email',
    },
    {
      Header: (
        <Heading
          fontSize={{ base: 'md', md: '1.5rem' }}
          fontWeight={600}
          color="#00509E"
        >
          Date
        </Heading>
      ),
      accessor: 'createdAt',
    },
    {
      Header: '',
      accessor: 'action',
    },
    {
      Header: '',
      accessor: 'orders',
    },
  ];
  return (
    <Box p="12" overflowX={'auto'} w={'full'}>
      <Heading
        textAlign={'center'}
        py={{ base: '10px' }}
        color="#00509E"
        fontWeight={500}
        fontSize={['2rem', '2.7rem', '3rem', '3.3rem']}
      >
        Users
      </Heading>

      <Box
        mt="6"
        boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
        fontSize={{ base: 'sm', md: '1rem' }}
      >
        {users ? (
          <Table
            colorScheme="blue"
            // Fallback component when list is empty
            emptyData={{
              icon: FiUser,
              text: 'No registered user.',
            }}
            totalRegisters={users.length}
            page={page}
            // Listen change page event and control the current page using state
            onPageChange={page => setPage(page)}
            columns={tableColumns}
            data={tableData}
          />
        ) : (
          <Heading p={4}>Loading ....</Heading>
        )}
      </Box>
    </Box>
  );
};
