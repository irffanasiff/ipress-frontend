import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  Spinner,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckoutSteps } from '../Components/Checkout/CheckoutSteps';
import { OrderSummary } from '../Components/Checkout/OrderSummary';
import { orderProducts } from '../Actions/productAction';
import { changeQuantity } from '../Actions/cartAction';
import { useState } from 'react';
//import { createOrder } from '../Actions/orderAction';

export const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ordering, setOrdering] = useState(false);
  const cart = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.userLogin);
  const { address, city, zipCode, country } = cart.shippingAddress;
  const order = useSelector(state => state.order);
  const { loading, error } = cart;
  const { cartItems } = cart;
  if (!cart.shippingAddress.address) {
    navigate('/shipping');
  } else if (!cart.paymentMethod) {
    navigate('/payment');
  }

  //   Calculate prices
  const addDecimals = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cartItems
      ? cart.cartItems.reduce(
          (acc, item) => acc + item.price * item.fields.Quantity,
          0
        )
      : 0
  );
  cart.shippingPrice = addDecimals(
    cartItems ? (cart.itemsPrice > 100 || cartItems.length === 0 ? 0 : 100) : 0
  );
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  //   Place Order
  const placeOrderHandler = paymentResult => {
    let orderItems = cartItems.map(item => ({ product: item._id }));
    let order = {
      user: userInfo._id,
      orderItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,

      itemsPrice: cart.itemsPrice,
      taxPrice: cart.taxPrice,
      shippingPrice: cart.shippingPrice,
      totalPrice: cart.totalPrice,
      isPaid: cart.paymentMethod !== 'COD',
    };
    if (order.isPaid) {
      let { id, status, update_time, payer } = paymentResult;
      order.paidAt = new Date();
      order.paymentResult = {
        id,
        status,
        update_time,
        email_address: payer.email_address,
      };
    }
    dispatch(orderProducts(order, cartItems));
    setOrdering(true);
  };

  useEffect(() => {
    if (ordering && order.success) {
      navigate(`/profile`);
    }
  }, [navigate, order, ordering]);
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Box
        maxW={{ base: '3xl', lg: '8xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        fontSize={['14px', '16px']}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack spacing={{ base: '8', md: '10' }} flex={2}>
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color={'#00509E'}
            >
              SHOPPING CART
            </Heading>
            <Stack spacing="2" borderBottom={'1px solid gray'} pb={5}>
              <Heading
                fontSize="xl"
                fontWeight="bold"
                color={mode('gray.700', 'white')}
              >
                SHIPPING ADDRESS
              </Heading>
              <Text
                color={mode('gray.500', 'gray.400')}
              >{`${address}, ${city}(${zipCode}), ${country}`}</Text>
            </Stack>
            <Stack spacing="2" borderBottom={'1px solid gray'} pb={5}>
              <Heading
                fontSize="xl"
                fontWeight="bold"
                color={mode('gray.700', 'white')}
              >
                PAYMENT METHOD
              </Heading>
              <Text color={mode('gray.500', 'gray.400')}>
                Payment Method : {cart.paymentMethod}
              </Text>
            </Stack>
            <VStack alignItems={'flex-start'} my={'100px !important'}>
              <Heading fontSize={{ base: '2rem', md: '3xl' }} fontWeight="bold">
                ITEMS
              </Heading>
              <Divider borderColor={'black'} mb={'20px !important'} />
              {!cartItems ? (
                loading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                ) : (
                  ''
                )
              ) : cartItems.length !== 0 ? (
                cartItems.map((item, key) => (
                  <HStack
                    w={'full'}
                    py={7}
                    gap={7}
                    justifyContent={'flex-start'}
                    flexDir={{ base: 'column', sm: 'row' }}
                    key={key}
                    borderBottom={
                      cartItems.length !== key + 1
                        ? '1px solid lightgray'
                        : 'none'
                    }
                  >
                    <Box
                      width={{ base: '120px', md: '200px' }}
                      height={{ base: '120px', md: '150px' }}
                      border={'1px solid black'}
                      borderColor={'gray.400'}
                      borderRadius={'8px'}
                    >
                      <Image
                        rounded="lg"
                        height="full"
                        fit="cover"
                        draggable="false"
                        loading="lazy"
                        src={item.design.image}
                      />
                    </Box>
                    <VStack
                      alignItems={{ base: 'center', sm: 'flex-start' }}
                      gap={1}
                      w={'full'}
                      alignSelf={'flex-start'}
                    >
                      <Text
                        fontSize={{ base: 'xl', md: '2xl' }}
                        fontWeight={'bold'}
                      >
                        {item.name}
                      </Text>
                      <HStack
                        fontSize={['14px', '16px', '17px']}
                        w={'full'}
                        maxW={'500px'}
                        justifyContent={'space-between'}
                      >
                        <VStack
                          justifyContent={'flex-start'}
                          alignItems={'flex-start'}
                        >
                          <Text>Quantity: </Text>
                          <Select
                            w={'100px'}
                            h={['2rem', '2.3rem']}
                            fontSize={{ base: 'sm', sm: 'md' }}
                            borderRadius={'30px'}
                            cursor={'pointer'}
                            _focus={{
                              outline: 'none',
                            }}
                            onChange={e => {
                              dispatch(changeQuantity(e.target.value, key));
                            }}
                            value={item.fields.Quantity || 20}
                            placeholder={'quantity'}
                          >
                            {(() => {
                              var indents = [];
                              if (!item.fields.Quantity) {
                                dispatch(changeQuantity(20, key));
                              }
                              for (var i = 20; i <= 500; i = i + 20) {
                                indents.push(
                                  <option value={i} key={i}>
                                    {i}
                                  </option>
                                );
                              }
                              return indents;
                            })()}
                          </Select>
                        </VStack>
                        <VStack
                          alignSelf={'stretch'}
                          justifyContent={'space-evenly'}
                          alignItems={'flex-start'}
                        >
                          <Text>Item Price: </Text>{' '}
                          <Text fontWeight={'bold'}> ${item.price}</Text>{' '}
                        </VStack>
                        <VStack
                          alignSelf={'stretch'}
                          justifyContent={'space-evenly'}
                          alignItems={'flex-start'}
                        >
                          <Text>Total Item Price: </Text>{' '}
                          <Text fontWeight={'bold'}>
                            {' '}
                            ${item.price * (item.fields.Quantity || 20)}
                          </Text>{' '}
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>
                ))
              ) : (
                <Heading fontWeight={'400'}>EMPTY CART</Heading>
              )}
            </VStack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            {error ? (
              <Alert status="error">
                <AlertIcon /> {error}
              </Alert>
            ) : (
              ''
            )}
            <OrderSummary
              itemsPrice={cart.itemsPrice}
              shippingPrice={cart.shippingPrice}
              taxPrice={cart.taxPrice}
              total={cart.totalPrice}
              totalItems={cartItems ? cartItems.length : 0}
              placeOrderHandler={placeOrderHandler}
              paymentMethod={cart.paymentMethod}
            />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/">
                <Text
                  color={mode('blue.500', 'blue.200')}
                  textDecoration={'underline'}
                >
                  {' '}
                  Continue shopping{' '}
                </Text>
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
