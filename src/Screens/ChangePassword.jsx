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
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Actions/userAction';

const ChangePassword = ({ close }) => {
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
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    if (userInfo) {
      navigate(`/${redirect}`);
      if (close) close();
    }
  }, [navigate, redirect, userInfo, close, error, toast]);
  const onSubmit = data => {
    console.log('submitted');
    console.log(data);
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
                      minLength: { value: 4, message: 'Minimum 4 Characters' },
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
                      minLength: { value: 4, message: 'Minimum 4 Characters' },
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
        </VStack>
      </VStack>
    </Container>
  );
};
export { ChangePassword };
