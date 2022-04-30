import {
  Box,
  Center,
  Button,
  useToast,
  Text,
  Heading,
  FormControl,
  Alert,
  AlertIcon,
  AlertTitle,
  FormErrorMessage,
  VStack,
  Container,
  Tooltip,
  Input,
  InputGroup,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register as userRegister } from '../Actions/userAction';

const Signup = ({ close }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const newUser = useSelector(state => state.userRegister);
  const userLogin = useSelector(state => state.userLogin);
  const savedUser = localStorage.getItem('userInfo');
  const { loading, error, userInfo } = newUser;
  const redirect = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    if (userLogin.userInfo) {
      navigate(`/${redirect}`);
      if (close) close();
    }
  }, [navigate, redirect, close, userLogin.userInfo]);
  const onSubmit = ({ name, email, password }) => {
    console.log('submit');
    dispatch(userRegister(name, email, password));
  };

  return (
    <Container
      w="fit-content"
      py="4rem"
      minH={{ base: '80vh', lg: '82vh' }}
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
          Get Started with your account
        </Heading>
        <Text
          maxW={{ base: '18rem', md: '25rem' }}
          fontSize={{ base: 'sm', md: 'md' }}
          py={'1rem'}
          textAlign="center"
          color={'ipress.300'}
        >
          For more than 20 years, VistaPrint has helped small business owners,.
          Already Have an Account?{' '}
          <Box as="button">
            <Text
              as="span"
              textColor={'ipress.500'}
              _hover={{ textDecoration: 'underline' }}
            >
              <Link to="/login">Login</Link>
            </Text>
          </Box>
        </Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
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
            <FormControl w="full" isRequired mb="1rem">
              <Input
                fontSize="xl"
                variant="custom"
                borderBottom={'1px solid gray'}
                type={'text'}
                px="0.5rem"
                h={{ base: '3rem', md: '3.6rem' }}
                size={{ base: 'sm', md: 'lg' }}
                placeholder="Full Name"
                {...register('name', {
                  required: 'Please enter Password',
                  minLength: { value: 2, message: 'Too Short' },
                })}
              />
              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl w="full" isRequired>
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
            >
              <Tooltip
                hasArrow
                w={{ base: '16rem', md: '16rem' }}
                label="Minimum 8 Characters, including Upper / lowercase and numbers"
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
                      minLength: { value: 5, message: 'Minimum 5 Characters' },
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

            <Button
              my="2rem"
              width="fit-content"
              mx="auto"
              alignSelf={'center'}
              type="submit"
              variant="custom-black"
              _hover={{
                color: 'ipress.500',
                borderColor: 'ipress.500',
              }}
            >
              Signup
            </Button>
          </form>
        </VStack>
      </VStack>
    </Container>
  );
};
export { Signup };
