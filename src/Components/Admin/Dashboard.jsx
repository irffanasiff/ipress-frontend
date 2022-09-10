import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiUser, FiDollarSign } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import { useSelector } from 'react-redux';
export const Dashboard = () => {
  const {
    allDetails: { orders, users },
  } = useSelector(state => state);
  const data = [
    {
      icon: FiUser,
      heading: 'Users',
      value: users ? users.length : 'Loading',
    },
    {
      icon: BsCartCheck,
      heading: 'Orders',
      value: orders ? orders.length : 'Loading',
    },
    {
      icon: FiDollarSign,
      heading: 'Revenue',
      value: orders
        ? '$' +
          orders.reduce(
            (sum, order) => sum + (order.isPaid ? order.totalPrice : 0),
            0
          )
        : 'Loading',
    },
  ];
  return (
    <Container w={'100%'} p={5} maxW={'8xl'}>
      {/* <Heading
        lineHeight={{ base: '3.6rem', md: '6.8rem' }}
        maxW="6xl"
        mx="auto"
        fontSize={{ base: '3.2rem', md: '4rem' }}
        color={'#00509E'}
      >
        Dashboard
      </Heading> */}
      <VStack w={'100%'} spacing={5} my={'30px'}>
        <SimpleGrid
          columns={[1, 2, 2, 2, 3]}
          w={'100%'}
          my={'30px'}
          gap={'50px'}
        >
          {data.map((item, index) => (
            <HStack
              key={index}
              p={4}
              w={{ md: '280px' }}
              borderRadius={'8px'}
              background={'white'}
              justifyContent={'flex-end'}
              pos={'relative'}
            >
              <Center
                w={'40%'}
                h={'80%'}
                pos={'absolute'}
                bg={'#00509E'}
                top={'-30%'}
                left={'5%'}
                boxShadow={'2xl'}
              >
                <Icon
                  as={item.icon || FiUser}
                  fontSize="5xl"
                  background={'transparent'}
                  color={'white'}
                ></Icon>
              </Center>
              <Stack p={2} textAlign={'right'} w={'100%'} gap={'20px'}>
                <Heading
                  as="h2"
                  fontSize={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
                  color={'gray.500'}
                  fontWeight={'500'}
                >
                  {item.heading}
                </Heading>
                <Heading
                  as="h3"
                  size={'xl'}
                  color={'gray.900'}
                  fontWeight={500}
                >
                  {item.value}
                </Heading>
              </Stack>
            </HStack>
          ))}
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          w={'full'}
          gap={{ base: '20px', sm: '5px', md: '20px' }}
        >
          <Box
            boxShadow={'2xl'}
            p={{ base: 4, sm: 2, md: 4 }}
            bg={'white'}
            borderRadius={'2xl'}
            w={'fit-content'}
            mx={'auto'}
          >
            <CircularProgress
              value={
                orders
                  ? (100 * orders.filter(order => !order.isDelivered).length) /
                    orders.length
                  : 30
              }
              size="200px"
            >
              <CircularProgressLabel fontSize={'md'} color={'gray.600'}>
                Orders In
                <br /> Transit
                <Text fontSize={'2rem'} color={'black'}>
                  {orders
                    ? orders.filter(order => !order.isDelivered).length
                    : 1}
                  /{orders ? orders.length : 1}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box
            boxShadow={'2xl'}
            p={{ base: 4, sm: 2, md: 4 }}
            bg={'white'}
            borderRadius={'2xl'}
            w={'fit-content'}
            mx={'auto'}
          >
            <CircularProgress
              value={
                orders
                  ? (100 * orders.filter(order => order.isPaid).length) /
                    orders.length
                  : 20
              }
              size="200px"
            >
              <CircularProgressLabel fontSize={'md'} color={'gray.600'}>
                Orders Paid
                <Text fontSize={'2rem'} color={'black'}>
                  {orders ? orders.filter(order => order.isPaid).length : 1}/
                  {orders ? orders.length : 1}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
