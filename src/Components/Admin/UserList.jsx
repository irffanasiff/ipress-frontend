import { Table } from 'react-chakra-pagination';
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { FiTrash2, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Actions/userAction';
import { UserDetails } from './UserDetails';

export const UserList = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState({});
  const [id, setId] = useState();

  const {
    allDetails: { users, loading, orders, products },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
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
            onClick={() => {
              setId(user._id);
              onOpenDelete();
              //dispatch(deleteUser(user._id))
            }}
            size="sm"
            bg={'white'}
          >
            <Icon as={FiTrash2} fontSize="20" />
          </Button>
        ),
        orders: (
          <Button
            size="md"
            bg={'white'}
            onClick={() => {
              let order = orders.filter(item => item.user === user._id);
              let items = order.map(
                or => or.orderItems.find(item => item.product).product
              );
              let orderedItems = products.filter(item =>
                items.includes(item._id)
              );
              console.log({ order, user, items, orderedItems });
              setSelected({ orders: order, user, products: orderedItems });
              onOpen();
            }}
          >
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
        mx={'auto'}
        mt="6"
        w={'fit-content'}
        boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
        fontSize={{ base: 'sm', md: '1rem' }}
        bg={'gray.300'}
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
      <Modal
        key={'modal2'}
        isOpen={isDelete}
        onClose={onCloseDelete}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent w={'fit-content'} maxW={'1000px'}>
          <ModalHeader fontSize={{ base: 'md', md: '1.5rem' }} color={'red'}>
            Confirm
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this user?</ModalBody>
          <ModalFooter>
            <Button colorScheme={'blue'} mr={3} onClick={onCloseDelete}>
              Close
            </Button>
            <Button
              colorScheme={'red'}
              mr={3}
              onClick={() => {
                dispatch(deleteUser(id));
                onCloseDelete();
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        key={'modal1'}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent w={'fit-content'} maxW={'1000px'}>
          <ModalHeader
            fontWeight={500}
            fontSize={['1.5rem', '2rem', '2.5rem', '3rem']}
          >
            Orders
          </ModalHeader>
          <ModalCloseButton />
          <UserDetails {...selected} onClose={onClose} />
          <ModalFooter>
            <Button
              variant={'ipress-black'}
              mr={3}
              onClick={onClose}
              minW={'150px'}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
