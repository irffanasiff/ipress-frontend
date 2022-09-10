import { Table } from 'react-chakra-pagination';
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderDetails } from './OrderDetails';
const tableColumns = [
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        Sr. No.
      </Text>
    ),
    accessor: 'index',
  },
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        {' '}
        Order id
      </Text>
    ),
    accessor: 'orderId',
  },
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        {' '}
        User
      </Text>
    ),
    accessor: 'user',
  },
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        Products
      </Text>
    ),
    accessor: 'products',
  },
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        Total Price
      </Text>
    ),
    accessor: 'totalPrice',
  },
  {
    Header: (
      <Text color={'main.400'} fontSize={{ md: '1rem' }}>
        Paid
      </Text>
    ),
    accessor: 'isPaid',
  },
  {
    Header: <Text color={'main.400'} fontSize={{ md: '1rem' }}></Text>,
    accessor: 'more',
  },
];
export const OrderList = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState({});
  const {
    allDetails: { orders, users, products, loading },
  } = useSelector(state => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tableData = orders
    ? orders.map((order, index) => ({
        index: <Heading textAlign={'center'}>{index + 1}</Heading>,
        orderId: (
          <Flex align="center">
            <Text>{order._id}</Text>
          </Flex>
        ),
        user: (
          <Text w={'100%'} textAlign={'center'}>
            {users.find(item => item._id === order.user).name}
          </Text>
        ),
        products: (
          <Text w={'100%'} textAlign={'center'}>
            {order.orderItems.length}
          </Text>
        ),
        totalPrice: (
          <Text w={'100%'} textAlign={'center'}>
            {order.totalPrice}
          </Text>
        ),
        isPaid: (
          <Text
            w={'100%'}
            textAlign={'center'}
            color={order.isPaid ? 'Green' : 'Red'}
          >
            {order.isPaid ? 'Yes' : 'No'}
          </Text>
        ),
        more: (
          <Text
            cursor={'pointer'}
            color={'#00509E'}
            textDecor={'underline'}
            onClick={() => {
              let user = users.find(item => item._id === order.user);
              let items = order.orderItems.map(item => item.product);
              let orderedItems = products.filter(item =>
                items.includes(item._id)
              );
              setSelected({ order, user, products: orderedItems });
              onOpen();
            }}
          >
            Details
          </Text>
        ),
      }))
    : [];
  return (
    <Box p="12" overflowX={'auto'} w={'full'}>
      <Heading
        textAlign={'center'}
        py={{ base: '10px' }}
        color="#00509E"
        fontWeight={500}
        fontSize={['2rem', '2.7rem', '3rem', '3.3rem']}
      >
        ORDERS
      </Heading>

      <Box
        mx={'auto'}
        mt="6"
        boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
        fontSize={{ base: 'sm', md: '1rem' }}
        w={'fit-content'}
        bg={'gray.300'}
      >
        {orders ? (
          <Table
            colorScheme="blue"
            // Fallback component when list is empty
            emptyData={{
              icon: FiUser,
              text: 'No registered user.',
            }}
            totalRegisters={orders.length}
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

      <Modal
        key={'modal1'}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent w={'90vw'} maxW={'1000px'}>
          <ModalHeader
            fontWeight={500}
            fontSize={['1.5rem', '2rem', '2.5rem', '3rem']}
          >
            Order Details
          </ModalHeader>
          <ModalCloseButton />
          <OrderDetails {...selected} onClose={onClose} />
        </ModalContent>
      </Modal>
    </Box>
  );
};
