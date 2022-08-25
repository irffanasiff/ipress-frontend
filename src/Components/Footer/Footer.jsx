import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsPaypal, BsTelephonePlusFill } from 'react-icons/bs';
import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import {
  Visa,
  UnionPay,
  Paypal,
  Amex,
  Discover,
  DinersClub,
  Jcb,
  Mastercard,
} from 'react-pay-icons';
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
    <>
      <Flex
        maxW={'8xl'}
        mx={'auto'}
        w={'100%'}
        h={'100vh'}
        maxH={{ base: '600px', md: '500px' }}
        position={'relative'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          w={{ base: '100%', md: '50%' }}
          h={{ base: 'auto', md: '100%' }}
          bg={'#FFE892'}
          direction={'column'}
          p={'5%'}
          gap={'20px'}
        >
          <Heading
            fontSize={['xl', '3xl', '5xl']}
            color={'#00509E'}
            fontWeight={500}
            textAlign={'center'}
          >
            Join Our Mailing List
          </Heading>
          <Heading
            fontSize={['12px', '1rem', '1.2rem']}
            fontWeight={400}
            textAlign={'center'}
          >
            Be the first to know about about our sales, events and exclusive
            offers.
          </Heading>
          <Box position={'relative'}>
            <Text
              as={'label'}
              htmlFor={'email'}
              fontSize={['10px', '12px', '14px']}
              color={'#00509E'}
              ml={5}
            >
              Enter your email address*
            </Text>
            <HStack
              bg={'#E5EBFA'}
              borderRadius={'30px'}
              px={2}
              w={{ base: '75%', md: '100%' }}
            >
              <Input
                name={'email'}
                borderRadius={'30px'}
                required
                h={{ base: '30px', sm: '40px', md: '50px' }}
                fontSize={{ base: '12px', md: '16px' }}
                p={2}
                bg={'#E5EBFA'}
                color={'#00509E'}
                placeholder={'e.g., name@example.com'}
                _placeholder={{
                  color: 'rgba(29, 103, 205, 0.6)',
                  fontSize: '14px',
                }}
              />
              <Button
                border={'1px solid #00509E'}
                color={'#1D67CD'}
                _hover={{ bg: '#1D67CD', color: 'white' }}
                borderRadius={'20px'}
                fontSize={{ base: '10px', sm: '14px', lg: '16px' }}
                h={{ base: 7, sm: 8, lg: 10 }}
              >
                Subscribe
              </Button>
            </HStack>
          </Box>
        </Flex>
        <Flex
          w={{ base: '100%', md: '50%' }}
          h={'100%'}
          bg={'#00509E'}
          p={{ base: '3%', md: '5% 3%', lg: '5%' }}
        >
          <Box
            w={'80%'}
            maxW={'350px'}
            p={{ base: '30px 50px' }}
            bg={'white'}
            h={{ base: '180px', sm: '60%', md: 'fit-content' }}
            mx={'auto'}
            mt={['2rem', '2rem', '0']}
            textAlign={'center'}
            borderRadius={'5px'}
          >
            <Heading
              fontSize={['xl', '3xl', '5xl']}
              color={'#00509E'}
              fontWeight={500}
              borderBottom={'1px solid #00509E'}
              pb={4}
            >
              Need Help?
            </Heading>
            <Text mt={5} fontSize={['12px', '1rem', '1.2rem']}>
              Got a question? We are here to help make your projects come to
              life.
            </Text>
          </Box>
        </Flex>
        <Flex
          direction={'column'}
          position={'absolute'}
          top={{ base: '80%', sm: '85%' }}
          w={'90%'}
          left={'5%'}
          bg={'#C8D9EA'}
        >
          <Container
            maxW="8xl"
            display={'flex'}
            flexDirection="column"
            p={{ base: '2rem', sm: '1.5rem', md: '2rem' }}
          >
            <Stack
              spacing={{ base: '2.5rem', md: 'auto' }}
              direction={{ base: 'column-reverse', md: 'row' }}
            >
              <Stack
                w={'100%'}
                justifyContent={{ base: 'space-evenly' }}
                spacing={{ base: '1rem', sm: '0.5rem' }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <VStack
                  w={{ sm: '40%', md: 'auto' }}
                  mr={{ sm: '20px', md: '0' }}
                  fontSize={{ base: 'xs', md: 'sm', lg: '0.9rem' }}
                  alignItems={'start'}
                >
                  <Heading
                    mb={{ base: '0.5rem', md: '1rem' }}
                    fontSize={['16px', '18px', '22px']}
                    fontWeight={'400'}
                    color="#00509E"
                  >
                    iPress Locations
                  </Heading>
                  <Text maxW="20rem">
                    iPress Locations Mercyland Land Junction Opposite NNPC
                    Filling Station, East West Road, Nkpolu- Rumuigbo, Port
                    Harcourt, Rivers State
                  </Text>
                  <Text fontWeight={'bold'} fontSize={{ base: 'sm', md: 'md' }}>
                    Head Office
                  </Text>
                  <Text maxW="20rem">
                    {' '}
                    KM16, East-West Road, Before UPTH Junction Alakahia, Port
                    Harcourt, Rivers State
                  </Text>
                  <HStack
                    fontSize={{ base: 'md', md: 'xl' }}
                    spacing={[2, 2, 5]}
                  >
                    <Icon as={FaFacebookF} />
                    <Icon as={RiLinkedinFill} />
                    <Icon as={RiTwitterFill} />
                    <Icon as={GrYoutube} />
                  </HStack>
                </VStack>
                <VStack
                  fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                  alignItems={'start'}
                >
                  <Heading
                    mb={{ base: '0.5rem', md: '1rem' }}
                    fontSize={['16px', '18px', '24px']}
                    fontWeight={'400'}
                    color="#00509E"
                  >
                    Customer Support
                  </Heading>
                  <Box
                    as="button"
                    onClick={() => {
                      navigate('/customer-support');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>Contact Us</Text>
                  </Box>
                  <Box
                    as="button"
                    onClick={() => {
                      navigate('/customer-support');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>FAQ</Text>
                  </Box>
                  <Box
                    as="button"
                    textAlign={'left'}
                    onClick={() => {
                      navigate('/customer-support');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>Customer Inquiries</Text>
                  </Box>
                  <Box
                    as="button"
                    mb={'0.5rem'}
                    onClick={() => {
                      navigate('/customer-support');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>About Us</Text>
                  </Box>
                  <Heading
                    mt={'1rem !important'}
                    fontSize={['16px', '18px', '24px']}
                    fontWeight={'400'}
                    color="#00509E"
                  >
                    Store Policy
                  </Heading>
                  <Box
                    as="button"
                    onClick={() => {
                      navigate('/terms-conditions');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>Terms of Service</Text>
                  </Box>
                  <Box
                    as="button"
                    onClick={() => {
                      navigate('/customer-support');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <Text>Shipping</Text>
                  </Box>
                </VStack>{' '}
                <VStack
                  fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                  alignItems={'start'}
                >
                  <Heading
                    mb={{ base: '0.5rem', md: '1rem' }}
                    fontSize={['16px', '18px', '24px']}
                    fontWeight={'400'}
                    color="#00509E"
                  >
                    Need Help ?
                  </Heading>
                  <Flex alignItems={'center'}>
                    <Icon as={BsTelephonePlusFill} mr={2} />
                    0813-894-1946
                  </Flex>
                  <Flex alignItems={'center'}>
                    <Icon as={BsTelephonePlusFill} mr={2} />
                    0708-367-5200
                  </Flex>
                  <Flex alignItems={'center'} as="button">
                    <Icon as={GrMail} mr={2} />
                    <Link
                      to="#"
                      onClick={e => {
                        window.location.href = 'mailto:ipressltd@yahoo.com';
                        e.preventDefault();
                      }}
                    >
                      <Text as="span" _hover={{ textDecor: 'underline' }}>
                        ipressltd@yahoo.com
                      </Text>
                    </Link>
                  </Flex>
                  <VStack
                    alignItems={'flex-start'}
                    mt={'3rem !important'}
                    fontWeight={'600'}
                  >
                    <Box>
                      <Text>Mon - Fri: 8am - 8pm</Text>
                    </Box>
                    <Box>
                      <Text>Saturday: 9am - 7pm</Text>
                    </Box>
                    <Box>
                      <Text>Sunday: 9am - 8pm</Text>
                    </Box>
                  </VStack>
                </VStack>
              </Stack>
            </Stack>{' '}
          </Container>
          <Container maxW="full" bg="#00509E" color="gray.300">
            <HStack justifyContent={'right'} mr={'5%'} mt={3} wrap={'wrap'}>
              <Visa style={{ margin: 10, width: 40 }} />;
              <UnionPay style={{ margin: 10, width: 40 }} />;
              <Mastercard style={{ margin: 10, width: 40 }} />;
              <Jcb style={{ margin: 10, width: 40 }} />;
              <Amex style={{ margin: 10, width: 40 }} />;
              <DinersClub style={{ margin: 10, width: 40 }} />;
              <Discover style={{ margin: 10, width: 40 }} />;
              <Paypal style={{ margin: 10, width: 40 }} />;
            </HStack>
            <Stack
              mt={{ base: '3rem' }}
              mb="0.5rem"
              w="full"
              fontSize={{ base: 'sm', md: 'md' }}
              flexDir={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'start', md: 'center' }}
            >
              <Text>© 2022 Ipress</Text>
            </Stack>
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
