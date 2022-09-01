import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Select,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  addToCart,
  changeQuantity,
  listCartItems,
  removeFromCart,
} from '../Actions/cartAction';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState([]);
  const cart = useSelector(state => state.cart);
  const { product } = useSelector(state => state.productSaved);
  const { cartItems, loading } = cart;

  useEffect(() => {
    if (product && product.design) {
      dispatch(addToCart(product));
    } else if (!cartItems && !loading) {
      dispatch(listCartItems());
    }
  }, [dispatch, product, cartItems, loading, quantity]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = id => {
    navigate('/login?redirect=shipping');
  };

  return (
    <Container
      maxW="6xl"
      w={{ base: '100%', sm: '90%' }}
      minH={'90%'}
      my={'20px'}
    >
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
                p={'1rem'}
                pos={'relative'}
                gap={[3, 4, 5, 6]}
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                key={key}
                borderBottom={
                  cartItems.length !== key + 1 ? '1px solid lightgray' : 'none'
                }
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
                </VStack>
                <VStack
                  alignItems={{ base: 'center', sm: 'flex-start' }}
                  gap={1}
                  alignSelf={{ base: 'center', sm: 'flex-start' }}
                >
                  <Text
                    fontSize={['18px', '16px', '20px', '22px']}
                    fontWeight={'bold'}
                  >
                    {item.name}
                  </Text>
                  <HStack
                    minW={['150px', '200px']}
                    justifyContent="space-between"
                  >
                    <Text>Quantity: </Text>
                    <Select
                      alignSelf={'center'}
                      h={['2.3rem', '2.6rem', '2.3rem', '2.8rem']}
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
                  </HStack>
                  <HStack
                    minW={['150px', '200px']}
                    justifyContent="space-between"
                  >
                    <Text>Item Total: </Text>{' '}
                    <Text fontWeight={'bold'}>
                      {' '}
                      ${item.price * (item.fields.Quantity || 20)}
                    </Text>{' '}
                  </HStack>
                </VStack>

                <Button
                  display={{ base: 'none', md: 'flex' }}
                  variant={'ipress-black'}
                  borderRadius={'8px'}
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  Remove
                </Button>
                <IconButton
                  display={{ md: 'none' }}
                  position={'absolute'}
                  right={'0px'}
                  top={'0px'}
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  <CloseIcon size={32} />
                </IconButton>
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
                    (acc, item, index) =>
                      acc + (item.fields.Quantity || 20) * item.price,
                    0
                  )}
            </Tag>
          </Text>
          <Button
            variant={'custom-black'}
            _hover={{ bgColor: 'black', color: 'whiteAlpha.900' }}
            fontSize={{ base: '12px', sm: '16px', md: '18px' }}
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
