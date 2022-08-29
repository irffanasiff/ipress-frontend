import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listProducts } from '../Actions/productAction';
import { logout } from '../Actions/userAction';
import { EditProfile } from '../Components/UserProfile/EditProfile';
import { OrderInfo } from '../Components/UserProfile/OrderInfo';

const UserProfile = () => {
  const { userInfo } = useSelector(state => state.userLogin);
  const { user, error } = useSelector(state => state.userDetails);
  const { shippingAddress } = useSelector(state => state.cart);
  const { loading: ordersLoading, products } = useSelector(
    state => state.productList
  );

  const { address, city, zipCode, country } = shippingAddress || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    if (ordersLoading === undefined) dispatch(listProducts());
  }, [navigate, userInfo, dispatch, ordersLoading]);
  return (
    <VStack
      spacing={{ base: '4rem', lg: '2rem' }}
      p={{ base: '3rem 1.5rem', md: '4rem 2rem' }}
      maxW="8xl"
      mx="auto"
      alignItems={'flex-start'}
      textAlign={'left'}
      justifyContent={'space-between'}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        w={'full'}
        gap={{ base: '15px', md: '50px' }}
        justifyContent={{ lg: 'space-evenly' }}
      >
        {user && user.name ? (
          <VStack
            alignItems={{ base: 'flex-start' }}
            gap={{ base: '15px', md: '30px' }}
          >
            <Heading fontWeight={'400'}>Profile</Heading>

            <VStack
              alignItems={'flex-start'}
              alignSelf={{ base: 'center', sm: 'flex-start' }}
            >
              <Avatar
                w={['100px', '120px', '150px', '180px']}
                h={['100px', '120px', '150px', '180px']}
                bg={'gray.300'}
                borderRadius="50%"
                textAlign={'left'}
                mb={'2rem !important'}
              />
              <VStack alignItems={'flex-start'}>
                <Text fontSize={{ base: '15px', md: '18px' }}>
                  Name :{' '}
                  <Text as={'span'} fontSize={{ base: '14px', md: '16px' }}>
                    {user.name.toUpperCase()}
                  </Text>
                </Text>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={{ base: '15px', md: '18px' }}>
                  Email :{' '}
                  <Text as={'span'} fontSize={{ base: '14px', md: '16px' }}>
                    {user.email}
                  </Text>
                </Text>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={{ base: '15px', md: '18px' }}>
                  Address :{' '}
                  <Text as={'span'} fontSize={{ base: '14px', md: '16px' }}>{`${
                    address || ''
                  }, ${city || ''}(${zipCode || ''}), ${country || ''}`}</Text>
                </Text>
              </VStack>
            </VStack>
            <Flex
              direction={['column', 'row']}
              gap={[2, 4]}
              align={['center']}
              alignSelf={{ base: 'center', sm: 'flex-start' }}
            >
              <EditProfile />
              <Button
                w={'full'}
                onClick={logoutHandler}
                variant={'ipress-black'}
                py={{ base: 2, md: '25px' }}
              >
                Logout
              </Button>
            </Flex>
          </VStack>
        ) : error ? (
          <Heading>{error}</Heading>
        ) : (
          ''
        )}
        {ordersLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : products ? (
          <VStack
            align={'flex-start'}
            alignSelf={'stretch'}
            flex={1}
            gap={{ md: 10 }}
          >
            <Heading
              fontWeight={'400'}
              my={{ base: '2rem !important', md: '0rem !important' }}
            >
              Order List
            </Heading>
            {products.map((item, key) => {
              const { address, city, zipCode, country } = item.shippingAddress;
              return (
                <HStack
                  w={'full'}
                  p="1rem"
                  gap={[8, 4, 5, 6]}
                  flexDirection={{
                    base: 'column',
                    sm: 'row',
                    md: 'column',
                    lg: 'row',
                  }}
                  justifyContent={'space-evenly'}
                  key={key}
                  borderBottom={'1px solid rgba(0,0,0,0.5)'}
                  borderLeft={'1px solid rgba(0,0,0,0.5)'}
                  fontSize={{ base: '14px', md: '16px' }}
                  textAlign={'right'}
                >
                  <VStack>
                    <Box width="100px" height="100px">
                      <Image
                        rounded="lg"
                        height="full"
                        fit="cover"
                        draggable="false"
                        loading="lazy"
                        src={item.orderItems[0].product.design.image}
                      />
                    </Box>
                    <Text textAlign={'center'}>
                      Payment: {item.isPaid ? 'COMPLETED' : 'PENDING'}
                    </Text>
                  </VStack>
                  <VStack
                    alignItems={'flex-start'}
                    gap={1}
                    alignSelf={['center', 'flex-start', 'center', 'flex-start']}
                  >
                    <HStack
                      w={'full'}
                      justifyContent="space-between"
                      fontSize={['14px', '16px', '18px']}
                    >
                      <Text>Id: </Text> <Text> {item._id}</Text>{' '}
                    </HStack>
                    <HStack w={'full'} justifyContent="space-between">
                      <Text>Date: </Text>{' '}
                      <Text> {item.paidAt.split('T')[0]}</Text>{' '}
                    </HStack>
                    <HStack w={'full'} justifyContent="space-between">
                      <Text>Address: </Text>{' '}
                      <Text>
                        {' '}
                        {`${address}, ${city}(${zipCode}), ${country}`}
                      </Text>{' '}
                    </HStack>
                    <HStack w={'full'} justifyContent="space-between">
                      <Text>Delivered: </Text>{' '}
                      <Text>
                        {' '}
                        {item.isDelivered ? 'DELIVERED' : 'IN TRANSIT'}
                      </Text>{' '}
                    </HStack>
                    <HStack w={'full'} justifyContent="space-between">
                      <Text>Order Total: </Text>{' '}
                      <Text fontWeight={'bold'}> ${item.totalPrice}</Text>{' '}
                    </HStack>
                    <OrderInfo item={item} />
                  </VStack>
                </HStack>
              );
            })}
          </VStack>
        ) : (
          <Heading>Loading...</Heading>
        )}
      </Flex>
    </VStack>
  );
};
export { UserProfile };
