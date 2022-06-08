import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
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
    <Container maxW="6xl" w={'90%'} minH={'90%'} my={'20px'}>
      <Heading mx="auto" my={5}>
        Cart
      </Heading>
      <VStack justify={'space-between'} bgColor={'gray.100'} h={'full'}>
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
          <VStack align={'flex-start'} alignSelf={'stretch'}>
            {cartItems.map((item, key) => (
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
                      src={item.design.image}
                    />
                  </Box>
                  <Text>
                    {item.fields[0].size.split('_')[0]} x{' '}
                    {item.fields[0].size.split('_')[1]}
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
                    {item.name}
                  </Text>
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
                  <HStack
                    minW={['150px', '200px']}
                    justifyContent="space-between"
                  >
                    <Text>Quantity: </Text>{' '}
                    <Text> {item.fields[0].quantity}</Text>{' '}
                  </HStack>
                  <HStack
                    minW={['150px', '200px']}
                    justifyContent="space-between"
                  >
                    <Text>Item Total: </Text>{' '}
                    <Text fontWeight={'bold'}> ${item.price}</Text>{' '}
                  </HStack>
                </VStack>
                <Button
                  variant={'custom-black'}
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  Remove
                </Button>
              </HStack>
            ))}
          </VStack>
        )}
        <HStack
          borderTop="1px solid gray"
          w={'100%'}
          justify={'space-evenly'}
          p={'1rem'}
          color={'green.900'}
          fontWeight={'bold'}
          fontSize={['1rem', '1.5rem', '1.5rem']}
        >
          <Text>
            Product Total{' '}
            <Tag
              verticalAlign={'middle'}
              p={'6px 10px'}
              fontSize={['17px', '18px', '19px']}
            >
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
            variant={'custom-black'}
            isDisabled={!cartItems ? '' : cartItems.length === 0}
            onClick={checkoutHandler}
          >
            checkout
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export { Cart };
