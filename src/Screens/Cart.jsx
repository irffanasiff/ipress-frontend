import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
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
          cartItems.map((item, key) => (
            <HStack py="1rem" maxW="25rem" justify={'space-between'}>
              <HStack>
                <Text>{item.name}</Text>
              </HStack>
              <FormControl w="6rem" as="span" value={qty}>
                <Select
                  placeholder={item.fields ? item.fields.quantity : ''}
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
              <Button onClick={() => removeFromCartHandler(item._id)}>
                Remove
              </Button>
            </HStack>
          ))
        )}
        <HStack w="20rem" justify={'space-between'}>
          <Text>
            Total{' '}
            <Tag>
              {!cartItems
                ? ''
                : cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </Tag>
          </Text>
          <Text>
            Subtotal{' '}
            <Tag>
              $
              {!cartItems
                ? ''
                : cartItems.reduce(
                    (acc, item) => acc + item.qty * item.price,
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
