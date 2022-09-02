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
        gap={{ base: '15px', md: '30px', lg: '50px' }}
        justifyContent={{ lg: 'space-evenly' }}
      >
        {user && user.name ? (
          <VStack
            alignItems={{ base: 'flex-start' }}
            gap={{ base: '15px', md: '30px' }}
          >
            <Heading fontWeight={'600'}>Profile</Heading>

            <VStack
              alignItems={'flex-start'}
              alignSelf={{ base: 'center', sm: 'flex-start' }}
              boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
              p={'2rem'}
              minW={{ base: '240px' }}
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
                  {address || city || zipCode || country ? (
                    <Text
                      as={'span'}
                      fontSize={{ base: '14px', md: '16px' }}
                    >{`${address || ''}, ${city || ''}(${zipCode || ''}), ${
                      country || ''
                    }`}</Text>
                  ) : (
                    <Text fontSize={{ base: '14px', md: '16px' }}>
                      no address saved
                    </Text>
                  )}
                </Text>
              </VStack>
              <Flex
                mt={'2rem !important'}
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
          </VStack>
        ) : error ? (
          <Heading>{error}</Heading>
        ) : (
          ''
        )}
        <VStack
          align={'flex-start'}
          alignSelf={'stretch'}
          flex={1}
          gap={{ base: '15px', md: '30px' }}
        >
          <Heading
            fontWeight={'600'}
            my={{ base: '2rem !important', md: '0rem !important' }}
          >
            Order List
          </Heading>
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
              w={{ base: 'full', lg: '90%' }}
              p="1.5rem"
              boxShadow={'0px 10px 30px -5px rgba(0, 0, 0, 0.3)'}
            >
              {products.map((item, key) => {
                const { address, city, zipCode, country } =
                  item.shippingAddress;
                return (
                  <HStack
                    w={'full'}
                    p={{ base: '1.5rem 0', xl: '1.5rem' }}
                    gap={[8, 4, 4, 8]}
                    flexDirection={{
                      base: 'column',
                      sm: 'row',
                      md: 'column',
                      lg: 'row',
                    }}
                    justifyContent={'flex-start'}
                    key={key}
                    fontSize={[{ base: '14px', md: '16px' }]}
                    textAlign={'right'}
                    borderBottom={
                      products.length === key + 1 ? 'none' : '1px solid gray'
                    }
                  >
                    <VStack>
                      <Box
                        width="135px"
                        height="150px"
                        border={'1px solid gray'}
                      >
                        <Image
                          rounded="lg"
                          height="full"
                          fit="cover"
                          draggable="false"
                          loading="lazy"
                          src={item.orderItems[0].product.design.image}
                        />
                      </Box>
                      <Text textAlign={'center'} fontWeight={600}>
                        Payment: {item.isPaid ? 'COMPLETED' : 'PENDING'}
                      </Text>
                    </VStack>
                    <VStack
                      alignItems={'flex-start'}
                      gap={1}
                      alignSelf={[
                        'center',
                        'flex-start',
                        'center',
                        'flex-start',
                      ]}
                      w={{ xl: '350px' }}
                      fontSize={['13px', '15px', '15px', '15px', '16px']}
                    >
                      <HStack
                        w={'full'}
                        justifyContent="space-between"
                        fontSize={['14px', '16px', '18px']}
                        fontWeight={600}
                      >
                        <Text>Id: </Text>{' '}
                        <Text fontSize={['13px', '15px', '17px']}>
                          {' '}
                          {item._id}
                        </Text>{' '}
                      </HStack>
                      <HStack w={'full'} justifyContent="space-between">
                        <Text>Date: </Text>{' '}
                        <Text>
                          {' '}
                          {item.paidAt ? item.paidAt.split('T')[0] : 'NOT PAID'}
                        </Text>{' '}
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
              {products.length === 0 ? (
                <Heading fontWeight={400}>Order list empty</Heading>
              ) : (
                ''
              )}
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
