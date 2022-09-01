import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  RadioGroup,
  Stack,
  Radio,
  Text,
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
      <VStack w="full" minH="600px" p={10} gap={'30px'} alignItems="center">
        <Heading
          fontSize={{ base: '2rem', sm: '2.3rem', md: '2.6rem' }}
          textAlign={'center'}
        >
          Payment Method
        </Heading>
        <form
          onSubmit={onSubmit}
          style={{ alignSelf: 'center', margin: '15px 0' }}
        >
          <FormControl minW={{ base: '300px', md: '400px' }}>
            <RadioGroup
              defaultValue={'PayPal'}
              onChange={setValue}
              value={value}
            >
              <Stack
                direction="row"
                justifyContent={'space-between'}
                w={'full'}
              >
                <Radio size={'md'} value="PayPal">
                  <Text fontSize={{ base: '14px', md: '17px' }}>PayPal</Text>
                </Radio>
                <Radio size="md" value="Stripe">
                  <Text fontSize={{ base: '14px', md: '17px' }}>Stripe</Text>
                </Radio>
                <Radio size="md" value="COD">
                  <Text fontSize={{ base: '14px', md: '17px' }}>
                    Cash on Delivery
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Button w="full" type="submit" variant={'ipress-black'} my={'30px'}>
            Continue
          </Button>
        </form>
      </VStack>
    </>
  );
};
