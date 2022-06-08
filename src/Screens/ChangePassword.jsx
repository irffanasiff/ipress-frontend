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
import { changePassword, sendResetLink } from '../Actions/userAction';

const ChangePassword = ({ close }) => {
  let { search } = useLocation();
  let token = search.split('=')[1];
  const [showPassword, setShowPassword] = useState(false);
  const [linkSend, setLinkSend] = useState(false);
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
  const { success, error: passwordError } = useSelector(
    state => state.passwordReset
  );
  const redirect = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    if (userInfo) {
      navigate(`/${redirect}`);
      if (close) close();
    }
  }, [navigate, redirect, userInfo, close, error, toast]);
  useEffect(() => {
    if (passwordError && linkSend) {
      toast({
        title: 'Error',
        description: passwordError,
        status: 'error',
        duration: 2000,
        position: 'top',
      });
    } else if (success === 'Password Updated' && linkSend) {
      toast({
        title: 'Password Updated',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
      navigate('/login');
    }
  }, [passwordError, toast, linkSend, success, navigate]);
  const onSubmit = data => {
    if (data.new === data.confirm) {
      dispatch(changePassword(data.new, token));
      setLinkSend(true);
    } else {
      toast({
        title: 'Error',
        description: 'Confirm password',
        status: 'error',
        duration: 2000,
        position: 'top',
      });
    }
  };

  const onSubmitEmail = data => {
    dispatch(sendResetLink(data.email));
    setLinkSend(true);
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
          Change Password
        </Heading>
        <Text
          maxW={{ base: '18rem', md: '25rem' }}
          fontSize={{ base: 'sm', md: 'md' }}
          py={'1rem'}
          textAlign="center"
          color={'ipress.300'}
        >
          For more than 20 years, VistaPrint has helped small business owners.
          Don't Have an Account?{' '}
          <Box
            as="button"
            onClick={e => {
              e.preventDefault();
              if (close) close();
            }}
          >
            <Text
              as="span"
              textColor={'ipress.500'}
              _hover={{ textDecoration: 'underline' }}
            >
              <Link to="/signup">Sign in</Link>
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
          {linkSend && success === 'link sent' ? (
            <Heading>
              Link has been sent on your email. Follow the instructions.
            </Heading>
          ) : !token ? (
            <form onSubmit={handleSubmit(onSubmitEmail)}>
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
              <Box my="2rem" width="fit-content" mx="auto" alignSelf={'center'}>
                <Button
                  type="submit"
                  variant="custom-black"
                  _hover={{
                    color: 'ipress.500',
                    borderColor: 'ipress.500',
                  }}
                >
                  Send Reset Link
                </Button>
              </Box>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl w="full" isRequired isInvalid={errors.new}>
                <Tooltip
                  hasArrow
                  w={{ base: '16rem', md: '16rem' }}
                  label="Minimum 4 Characters"
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
                      placeholder="New Password"
                      _placeholder={{ color: 'gray.400' }}
                      type={showPassword ? 'text' : 'password'}
                      {...register('new', {
                        required: 'Please enter new Password',
                        minLength: {
                          value: 4,
                          message: 'Minimum 4 Characters',
                        },
                        /* pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                          message: 'Use a strong password',
                        }, */
                      })}
                    />
                  </InputGroup>
                </Tooltip>
                {errors.new && (
                  <FormErrorMessage>{errors.new.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                pt={'1rem'}
                w={{ base: 'full', md: '20rem' }}
                isRequired
                isInvalid={errors.confirm}
              >
                <Tooltip
                  hasArrow
                  w={{ base: '16rem', md: '16rem' }}
                  label="Minimum 4 Characters"
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
                      placeholder="Confirm Password"
                      _placeholder={{ color: 'gray.400' }}
                      type={showPassword ? 'text' : 'password'}
                      {...register('confirm', {
                        required: 'Please confirm Password',
                        minLength: {
                          value: 4,
                          message: 'Minimum 4 Characters',
                        },
                        /* pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                          message: 'Use a strong password',
                        }, */
                      })}
                    />
                  </InputGroup>
                </Tooltip>
                {errors.confirm && (
                  <FormErrorMessage>{errors.confirm.message}</FormErrorMessage>
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
                <Button
                  type="submit"
                  variant="custom-black"
                  _hover={{
                    color: 'ipress.500',
                    borderColor: 'ipress.500',
                  }}
                >
                  RESET PASSWORD
                </Button>
              </Box>
            </form>
          )}
        </VStack>
      </VStack>
    </Container>
  );
};
export { ChangePassword };
