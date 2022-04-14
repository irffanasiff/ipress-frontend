import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Container maxW="full" bg="ipress.600" color="gray.300">
      <Container
        maxW="6xl"
        pt={{ base: '4rem', md: '12rem' }}
        px={'2rem'}
        display={'flex'}
        flexDirection="column"
        fap="2rem"
      >
        <Stack
          spacing={{ base: '2.5rem', md: 'auto' }}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Stack
            spacing={{ base: '2.5rem', md: '3rem', lg: '5rem' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
              <Heading
                mb={{ base: '0.5rem', md: '1rem' }}
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={'400'}
                color="white"
              >
                We are here
              </Heading>
              <Text maxW="15rem">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </Text>
              <Text>info@ipress.in</Text>
              <Text>020 8125 3074</Text>
            </VStack>
            <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
              <Heading
                mb={{ base: '0.5rem', md: '1rem' }}
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={'400'}
                color="white"
              >
                Services
              </Heading>
              <Box
                as="button"
                onClick={() => {
                  navigate('/service/dryCleaning');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Billboards</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('/service/bedding');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Banners</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('service/household');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Rollup Stands</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('service/shirts');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Dummy Cheques</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('service/laundry');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Laundry</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('service/ironing');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                textAlign="start"
              >
                <Text>
                  Instagram Frame <Text>Boards</Text>{' '}
                </Text>
              </Box>
            </VStack>{' '}
            <VStack fontSize={{ base: 'sm', md: 'md' }} alignItems={'start'}>
              <Heading
                mb={{ base: '0.5rem', md: '1rem' }}
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={'400'}
                color="white"
              >
                Navigate
              </Heading>
              <Box
                as="button"
                onClick={() => {
                  navigate('about');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>About</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('areas');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Profile</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('pricing');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Cart</Text>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  navigate('t&c');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Text>Terms and Conditions</Text>
              </Box>
            </VStack>
          </Stack>
        </Stack>{' '}
        <Stack
          mt={{ base: '6rem', md: '7rem' }}
          mb="0.5rem"
          w="full"
          fontSize={{ base: 'sm', md: 'md' }}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'start', md: 'center' }}
        >
          <Text>© 2022 SpinWash</Text>
          <Text>
            <a href="https://twitter.com/demonicirfan" target="_blank">
              Designed and Developed by Irfan Asif
            </a>
          </Text>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
