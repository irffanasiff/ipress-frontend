import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderSummaryItem = props => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">$ {value}</Text> : children}
    </Flex>
  );
};

export const OrderSummary = ({
  itemsPrice,
  shippingPrice,
  taxPrice,
  total,
  totalItems,
  placeOrderHandler,
  paymentMethod,
}) => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  const { userInfo } = useSelector(state => state.userLogin);
  const navigate = useNavigate();
  const successHandler = paymentResult => {
    placeOrderHandler(paymentResult);
    // dispatch an action that will
    // 1. Mark the products as ordered
    // 2. Create an order
    // 3. Return Success
    // 4. Empty cartItems from localStorage and store
    // 5. Navigate to Home
    //dispatch(payOrder(order._id, paymentResult));
  };
  const paymentHandler = () => {
    if (paymentMethod === 'COD') {
      placeOrderHandler();
    } else if (paymentMethod === 'PayPal') setPlaceOrder(true);
  };
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        'https://ipress-server.herokuapp.com/api/config/paypal'
      );
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?currency=USD&client-id=${clientId}`;
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.body.appendChild(script);
    };

    if (!window.paypal && paymentMethod === 'PayPal') {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [navigate, userInfo, paymentMethod]);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">ORDER SUMMARY</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Total Price" value={itemsPrice} />
        <OrderSummaryItem
          label="Shipping"
          value={shippingPrice}
        ></OrderSummaryItem>
        <OrderSummaryItem label="Tax" value={taxPrice}></OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            ${total}
          </Text>
        </Flex>
      </Stack>
      {!placeOrder ? (
        <Button
          bg={'gray.600'}
          color={'white'}
          _hover={{ bg: 'gray.900' }}
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          isDisabled={!totalItems}
          onClick={paymentHandler}
        >
          Checkout
        </Button>
      ) : !sdkReady ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Box my={4}>
          <PayPalButton
            amount={total}
            onSuccess={successHandler}
            currency="USD"
          />
        </Box>
      )}
    </Stack>
  );
};
