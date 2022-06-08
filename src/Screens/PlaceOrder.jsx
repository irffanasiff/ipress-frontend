import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
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
//import { createOrder } from '../Actions/orderAction';

export const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          (acc, item) => acc + item.price * item.fields[0].quantity,
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
    dispatch(orderProducts(order));
  };

  useEffect(() => {
    if (order && order.success) {
      navigate(`/`);
    }
  }, [navigate, order]);
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Box
        maxW={{ base: '3xl', lg: '8xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="bold">
              SHOPPING CART
            </Heading>
            <Stack spacing="2" borderBottom={'1px solid gray'} pb={5}>
              <Heading
                fontSize="xl"
                fontWeight="bold"
                color={mode('gray.700', 'white')}
              >
                SHIPPING
              </Heading>
              <Text
                color={mode('gray.500', 'gray.400')}
                fontSize="16px"
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
              <Text color={mode('gray.500', 'gray.400')} fontSize="16px">
                Payment Method : {cart.paymentMethod}
              </Text>
            </Stack>
            <Stack spacing="6">
              <Heading fontSize="xl" fontWeight="bold">
                ITEMS
              </Heading>
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
                    p="1rem"
                    justify={'space-between'}
                    gap={3}
                    maxW={'500px'}
                    alignSelf={'stretch'}
                  >
                    <VStack>
                      <Image
                        rounded="lg"
                        width="120px"
                        height="120px"
                        fit="cover"
                        draggable="false"
                        loading="lazy"
                        src={item.design.image}
                      />
                      <Text>
                        {item.fields[0].size.split('_')[0]} x{' '}
                        {item.fields[0].size.split('_')[1]}
                      </Text>
                    </VStack>
                    <Text>{item.name}</Text>
                    {/* <FormControl w="6rem" as="span" value={qty}>
                  <Select
                    placeholder={item.fields ? item.fields.quantity : ''}
                    onChange={e => console.log(e.target)}
                  >
                    {[...Array(item.countInStock).keys()].map(index => (
                      <option key={index} value={index + 2}>
                        {index + 2}
                      </option>
                    ))}
                  </Select>
                </FormControl> */}
                    <Text>Quantity: {item.fields[0].quantity}</Text>
                    <Text>Price: ${item.price}</Text>
                  </HStack>
                ))
              ) : (
                <Heading fontWeight={'400'}>EMPTY CART</Heading>
              )}
            </Stack>
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
