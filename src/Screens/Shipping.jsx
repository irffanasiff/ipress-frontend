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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { saveShippingAddress } from '../Actions/cartAction';
import { CheckoutSteps } from '../Components/Checkout/CheckoutSteps';

export const Shipping = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { userInfo } = useSelector(state => state.userLogin);
  const { shippingAddress } = useSelector(state => state.cart);
  const onSubmit = data => {
    dispatch(saveShippingAddress(data));
    navigate('/payment');
  };
  const checkError = () => {
    Object.keys(errors).map(error =>
      toast({
        title: 'Error',
        description: errors[error].message,
        status: 'error',
        duration: 2000,
        position: 'top',
      })
    );
  };
  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=shipping');
    } else if (shippingAddress) {
      reset(shippingAddress);
    }
  }, [userInfo, shippingAddress, reset, navigate]);
  return (
    <>
      <CheckoutSteps step1 step2 />
      <VStack w="full" minH="600px" p={10} spacing={10} alignItems="center">
        <Heading
          textAlign={'center'}
          fontSize={{ base: '2rem', sm: '2.3rem', md: '2.6rem' }}
        >
          SHIPPING ADDRESS
        </Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ alignSelf: 'center', margin: '15px 0px' }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            columnGap={3}
            rowGap={'30px'}
            w={'100%'}
            minW={'300px'}
            my={'30px'}
          >
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  placeholder="Enter Address"
                  {...register('address', {
                    required: 'Please enter address',
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  placeholder="Enter City"
                  {...register('city', {
                    required: 'Please enter city',
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input
                  placeholder="Enter State"
                  {...register('state', {
                    required: 'Please enter State',
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  placeholder="Enter postal code"
                  {...register('zipCode', {
                    required: 'Please enter postal code',
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  placeholder="country"
                  {...register('country', {
                    required: 'Please enter country',
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Button
                w="full"
                type="submit"
                variant={'ipress-black'}
                onClick={checkError}
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
