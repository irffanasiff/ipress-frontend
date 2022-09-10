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
  Image,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderDetails } from './OrderDetails';
const tableColumns = [
  {
    Header: <Text color={'main.400'}>Sr. No.</Text>,
    accessor: 'index',
  },
  {
    Header: <Text color={'main.400'}> Product</Text>,
    accessor: 'product',
  },
  {
    Header: <Text color={'main.400'}> Design</Text>,
    accessor: 'design',
  },
  {
    Header: <Text color={'main.400'}> User</Text>,
    accessor: 'user',
  },
  {
    Header: <Text color={'main.400'}>Price</Text>,
    accessor: 'price',
  },
  {
    Header: <Text color={'main.400'}>Ordered</Text>,
    accessor: 'ordered',
  },
  {
    Header: <Text color={'main.400'}></Text>,
    accessor: 'more',
  },
];
export const ProductList = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState({});
  const {
    allDetails: { users, products, loading },
  } = useSelector(state => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tableData = products
    ? products.map((product, index) => ({
        index: <Heading textAlign={'center'}>{index + 1}</Heading>,
        product: (
          <Flex align="center">
            <Text>{product.name}</Text>
          </Flex>
        ),
        design: <Image src={product.design.image} w={'100px'} h={'100px'} />,
        user: (
          <Text w={'100%'} textAlign={'center'}>
            {users.find(item => item._id === product.user).name}
          </Text>
        ),
        price: (
          <Text w={'100%'} textAlign={'center'}>
            {product.price}
          </Text>
        ),
        ordered: (
          <Text
            w={'100%'}
            textAlign={'center'}
            color={product.isOrdered ? 'Green' : 'Red'}
          >
            {product.isOrdered ? 'Yes' : 'No'}
          </Text>
        ),
        more: (
          <Text
            cursor={'pointer'}
            color={'#00509E'}
            textDecor={'underline'}
            onClick={() => {
              let user = users.find(item => item._id === product.user);
              setSelected({ order: null, user, products: [product] });
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
        Products
      </Heading>

      <Box
        mx={'auto'}
        mt="6"
        boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
        fontSize={{ base: 'sm', md: '1rem' }}
        w={'fit-content'}
      >
        {products ? (
          <Table
            colorScheme="blue"
            // Fallback component when list is empty
            emptyData={{
              icon: FiUser,
              text: 'No registered user.',
            }}
            totalRegisters={products.length}
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
          <ModalHeader fontWeight={500} fontSize={['1.5rem', '2rem', '2.5rem']}>
            Product Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={{ base: 2, md: 4 }}>
            <OrderDetails {...selected} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" rounded={'none'} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type={'submit'}
              colorScheme="blue"
              rounded={'none'}
              onClick={onClose}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
