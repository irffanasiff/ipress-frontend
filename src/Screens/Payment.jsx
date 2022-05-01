import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  VStack,
  useToast,
  RadioGroup,
  Stack,
  Radio,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { savePaymentMethod } from '../Actions/cartAction';
import { CheckoutSteps } from '../Components/Checkout/CheckoutSteps';

export const Payment = () => {
  const [value, setValue] = useState('PayPal');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.userLogin);
  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=shipping');
    }
  }, [userInfo, navigate]);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(value));
    navigate('/placeorder');
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <VStack w="full" h="full" p={10} spacing={10} alignItems="center">
        <Heading size="2xl">Payment Method</Heading>
        <form
          onSubmit={onSubmit}
          style={{ alignSelf: 'center', margin: '15px 0' }}
        >
          <SimpleGrid
            columns={1}
            columnGap={3}
            rowGap={6}
            w={'50%'}
            minW={'300px'}
          >
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Payment method</FormLabel>
                <RadioGroup
                  defaultValue={'PayPal'}
                  onChange={setValue}
                  value={value}
                >
                  <Stack direction="row">
                    <Radio value="PayPal">PayPal</Radio>
                    <Radio value="Stripe">Stripe</Radio>
                    <Radio value="COD">Cash on Delivery</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <Button
                w="full"
                type="submit"
                bg={'gray.600'}
                color={'white'}
                _hover={{ bg: 'gray.700' }}
              >
                Continue
              </Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </VStack>
    </>
  );
};
