import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
  Select,
  Tag,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../Actions/cartAction';

const Cart = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qty = search ? Number(search.split('=')[1]) : 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = id => {
    navigate('/login?redirect=shipping');
  };

  return (
    <Container maxW="8xl" border="2px solid red">
      <Heading mx="auto">Shoping Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your card is empty</Text>
      ) : (
        cartItems.map((item, key) => (
          <HStack py="1rem" maxW="25rem" justify={'space-between'}>
            <HStack>
              <Text>{item.name}</Text>
            </HStack>
            <FormControl w="6rem" as="span" value={qty}>
              <Select
                placeholder={item.qty}
                onChange={e =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map(index => (
                  <option key={index} value={index + 2}>
                    {index + 2}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button onClick={() => removeFromCartHandler(item.product)}>
              Remove
            </Button>
          </HStack>
        ))
      )}
      <HStack w="20rem" justify={'space-between'}>
        <Text>
          Total <Tag>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Tag>
        </Text>
        <Text>
          Subtotal{' '}
          <Tag>
            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
          </Tag>
        </Text>
        <Button isDisabled={cartItems.length === 0} onClick={checkoutHandler}>
          Proceed to checkout
        </Button>
      </HStack>
    </Container>
  );
};

export {Cart};
