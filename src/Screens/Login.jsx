import {
  Box,
  Button,
  useToast,
  Text,
  Heading,
  FormControl,
  FormErrorMessage,
  VStack,
  Container,
  Tooltip,
  Input,
  InputGroup,
  Spinner,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Actions/userAction';

const Login = ({ close, reset }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    if (userInfo) {
      navigate(`/${redirect}`);
      if (close) close();
    } else if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 2000,
        position: 'top',
      });
    }
  }, [navigate, redirect, userInfo, close, error, toast]);
  const onSubmit = ({ email, password }) => {
    console.log('submitted');
    dispatch(login(email, password));
  };

  return (
    <Container
      w="fit-content"
      minH={{ base: '80vh', lg: '90vh' }}
      display="flex"
      alignItems={'center'}
      justify="center"
    >
      <VStack
        my="auto"
        spacing={{ base: '1.2rem', md: '2rem' }}
        mx={{ base: '0.5rem', md: '2rem' }}
      >
        <Heading
          textAlign={'center'}
          alignItems={'center'}
          fontSize={{ base: '2xl', md: '4xl' }}
          mx="auto"
          w="fit-content"
          maxW={{ base: '15rem', md: '20rem' }}
        >
          Login to your account
        </Heading>
        <Text
          maxW={{ base: '18rem', md: '25rem' }}
          fontSize={{ base: 'sm', md: 'md' }}
          py={'1rem'}
          textAlign="center"
          color={'ipress.300'}
        >
          For more than 20 years, VistaPrint has helped small business owners.
          Forgot your Password?{' '}
          <Box
            as="button"
            onClick={e => {
              e.preventDefault();
            }}
          >
            <Text
              as="span"
              textColor={'ipress.500'}
              _hover={{ textDecoration: 'underline' }}
            >
              <Link
                to={
                  redirect
                    ? `/reset-password?redirect=${redirect}`
                    : '/reset-password'
                }
                onClick={e => {
                  if (close) {
                    e.preventDefault();
                    reset(3);
                  }
                }}
              >
                Reset
              </Link>
            </Text>
          </Box>
        </Text>
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        <VStack w="full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl w="full" isRequired isInvalid={errors.email}>
              <Input
                fontSize="xl"
                variant="custom"
                borderBottom={'1px solid gray'}
                type={'text'}
                px="0.5rem"
                h={{ base: '3rem', md: '3.6rem' }}
                size={{ base: 'sm', md: 'lg' }}
                placeholder="Email"
                _placeholder={{ color: 'gray.400' }}
                {...register('email', {
                  required: 'Please enter registered email',
                  pattern: {
                    value:
                      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              pt={'1rem'}
              w={{ base: 'full', md: '20rem' }}
              isRequired
              isInvalid={errors.password}
            >
              <Tooltip
                hasArrow
                w={{ base: '16rem', md: '16rem' }}
                label="Minimum 8 Characters"
                arrowSize={8}
                placement="top"
                closeOnClick={false}
                color="black"
                fontWeight={'200'}
                bg="gray.200"
              >
                <InputGroup>
                  <Input
                    fontSize="xl"
                    variant="custom"
                    borderBottom={'1px solid gray'}
                    px="0.5rem"
                    h={{ base: '3rem', md: '3.6rem' }}
                    size={{ base: 'sm', md: 'lg' }}
                    placeholder="Password"
                    _placeholder={{ color: 'gray.400' }}
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Please enter Password',
                      minLength: { value: 4, message: 'Minimum 4 Characters' },
                      /* pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                        message: 'Use a strong password',
                      }, */
                    })}
                  />
                </InputGroup>
              </Tooltip>
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
            <Box
              cursor="pointer"
              flex={'1'}
              alignItems={'center'}
              justifyContent={'center'}
              h={{ base: '6', md: 'full' }}
              mt={{ base: '2', md: '4' }}
              mr="2"
              size={{ sm: 'md', md: 'lg' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Text>Hide</Text> : <Text>Show</Text>}
            </Box>
            <Box my="2rem" width="fit-content" mx="auto" alignSelf={'center'}>
              <Button w={'150px'} type="submit" variant={'ipress-black'}>
                Login
              </Button>
            </Box>
          </form>
        </VStack>
      </VStack>
    </Container>
  );
};
export { Login };
