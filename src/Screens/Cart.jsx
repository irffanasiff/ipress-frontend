import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Select,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import {
  addToCart,
  listCartItems,
  removeFromCart,
} from '../Actions/cartAction';

const Cart = () => {
  const { search } = useLocation();
  const qty = search ? Number(search.split('=')[1]) : 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { product } = useSelector(state => state.productSaved);
  const { cartItems, loading } = cart;

  useEffect(() => {
    if (product && product.design) {
      dispatch(addToCart(product));
    } else if (!cartItems && !loading) {
      dispatch(listCartItems());
    }
  }, [dispatch, product, cartItems, loading]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = id => {
    navigate('/login?redirect=shipping');
  };

  return (
    <Container maxW="6xl" w={'90%'}>
      <Heading mx="auto" my={5}>
        Shoping Cart
      </Heading>
      <HStack justify={'space-between'}>
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
        ) : cartItems.length === 0 ? (
          <Text>Your card is empty</Text>
        ) : (
          <VStack align={'flex-start'} w={'100%'}>
            {cartItems.map((item, key) => (
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
                <Button onClick={() => removeFromCartHandler(item._id)}>
                  Remove
                </Button>
              </HStack>
            ))}
          </VStack>
        )}
        <HStack
          justify={'space-between'}
          p={'1rem'}
          color={'green.900'}
          fontWeight={'bold'}
          fontSize={['1rem', '1.5rem', '1.5rem']}
        >
          <Text>
            Total{' '}
            <Tag verticalAlign={'middle'} p={'6px 10px'}>
              {!cartItems
                ? ''
                : cartItems.reduce(
                    (acc, item) => acc + item.fields[0].quantity,
                    0
                  )}
            </Tag>
          </Text>
          <Text>
            Subtotal{' '}
            <Tag verticalAlign={'middle'} p={'6px 10px'}>
              $
              {!cartItems
                ? ''
                : cartItems.reduce(
                    (acc, item) => acc + item.fields[0].quantity * item.price,
                    0
                  )}
            </Tag>
          </Text>
          <Button
            isDisabled={!cartItems ? '' : cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed to checkout
          </Button>
        </HStack>
      </HStack>
    </Container>
  );
};

export { Cart };
