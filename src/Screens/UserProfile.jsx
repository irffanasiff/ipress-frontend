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
      direction={{ base: 'column-reverse', lg: 'row' }}
      alignItems={'flex-start'}
      textAlign={'left'}
      justifyContent={'space-between'}
    >
      <Heading fontWeight={'400'}>Profile</Heading>
      <Flex direction={['column']} w={'full'}>
        {user && user.name ? (
          <VStack px={'5rem'} alignItems={'flex-start'}>
            <Avatar
              w={['100px', '120px', '150px', '180px']}
              h={['100px', '120px', '150px', '180px']}
              bg={'gray.300'}
              borderRadius="50%"
              textAlign={'left'}
            />
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'2xl'}>Name :</Text>
              <Text>{user.name.toUpperCase()}</Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'2xl'}>Email :</Text>
              <Text>{user.email}</Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'2xl'}>Address :</Text>
              <Text>{`${address || ''}, ${city || ''}(${zipCode || ''}), ${
                country || ''
              }`}</Text>
            </VStack>

            <Flex
              direction={['column', 'row']}
              gap={[2, 4]}
              align={['center']}
              marginTop={'2rem !important'}
            >
              <EditProfile />
              <Button
                size="sm"
                w={'full'}
                onClick={logoutHandler}
                variant={'custom-black'}
                fontSize={['10px', '13px', '15px']}
              >
                Logout
              </Button>
            </Flex>
          </VStack>
        ) : error ? (
          <Heading>{error}</Heading>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        <VStack>
          {ordersLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : products ? (
            <VStack align={'flex-start'} alignSelf={'stretch'}>
              {products.map((item, key) => {
                const { address, city, zipCode, country } =
                  item.shippingAddress;
                return (
                  <HStack
                    w={'full'}
                    p="1rem"
                    gap={[3, 4, 5, 6]}
                    justifyContent={'space-evenly'}
                    key={key}
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
                      <Text>
                        Payment: {item.isPaid ? 'COMPLETED' : 'PENDING'}
                      </Text>
                    </VStack>
                    <VStack
                      alignItems={'flex-start'}
                      gap={1}
                      alignSelf={'flex-start'}
                    >
                      <Text
                        fontSize={['14px', '16px', '20px', '22px']}
                        fontWeight={'bold'}
                      >
                        {item._id}
                      </Text>
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
                    </VStack>
                    <OrderInfo item={item} />
                  </HStack>
                );
              })}
            </VStack>
          ) : (
            <Heading>Loading...</Heading>
          )}
        </VStack>
      </Flex>
    </VStack>
  );
};
export { UserProfile };
