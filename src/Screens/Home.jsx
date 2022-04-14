import React, { useEffect } from 'react';
import {
  Container,
  Heading,
  Wrap,
  Box,
  Stack,
  Skeleton,
  SkeletonText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  HStack,
  WrapItem,
  Button,
  VStack,
  Image,
  scaleFadeConfig,
  Center,
} from '@chakra-ui/react';
import ProductCard from '../Components/Product/ProductCard';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/productAction';
import ProductLoader from '../Components/Loader/ProductLoader';
import Print from '../Images/print.webp';
import HeroCard from '../Components/HOC/HeroCard.HOC';
import Testimonials from '../Components/Sections/Testimonial/Index';

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container paddingInline={'0'} maxW={'full'}>
      <VStack spacing={{ base: '4rem', md: '6rem' }}>
        <Heading
          lineHeight={{ base: '3.6rem', md: '6.8rem' }}
          maxW="6xl"
          mx="auto"
          pt={{ base: '5rem', md: '6rem' }}
          fontSize={{ base: '3.2rem', md: '8xl' }}
          fontWeight="500"
        >
          <Text as="span">
            <Text as="span" display={{ base: 'none', md: 'block' }}>
              &nbsp;&nbsp;&nbsp;
            </Text>{' '}
            Quality Prints Shipped to your{' '}
          </Text>
          <Typewriter
            className="HomePage-typewriter"
            options={{
              strings: [
                '<span>doorstep</span>',
                '<span>house</span>',
                '<span>office</span>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <Center
          overflow={'hidden'}
          w={{ base: '100%', xl: '60%' }}
          h={{ base: '20rem', md: '40rem' }}
        >
          <Image
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
            maxW={'7xl'}
            src={Print}
            alt="print"
            // w={{ base: '100%', xl: '60%' }}
            //  h={{ base: '20rem', md: '40rem' }}
            objectFit={'cover'}
            objectPosition="center center"
          />
        </Center>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          maxW={'6xl'}
          p="1rem"
          gap="2rem"
          w="full"
        >
          <Text maxW="3xl" fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
            For more than 20 years, VistaPrint has helped small business owners,
            entrepreneurs and dreamers create custom designs and professional
            marketing.
          </Text>
          <Button variant={'custom-black'}>Learn More</Button>
        </Stack>
        <Box
          display="flex"
          flexDirection="column"
          py="4rem"
          alignItem="start"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
        >
          <Text
            fontSize={['16px', '20px', '24px']}
            transform={{
              base: 'translate(1rem,-1rem)',
              md: 'translate(-8rem, 3rem)',
              lg: 'translate(-8rem, 3rem)',
            }}
          >
            OUR <br /> SERVICES
          </Text>
          <Text
            _hover={{ color: 'ipress.500', transform: '' }}
            onMouseOver={() => {
              console.log('mouseOver1');
            }}
            w="full"
            p="1rem"
            borderTop="1px solid gray"
          >
            BILLBOARD
          </Text>
          <Text
            _hover={{ color: 'ipress.500', transform: '' }}
            onMouseOver={() => {
              console.log('mouseOver');
            }}
            w="full"
            p="1rem"
            borderTop="1px solid gray"
          >
            BANNER
          </Text>
          <Text
            _hover={{ color: 'ipress.500', transform: '' }}
            onMouseOver={() => {
              console.log('mouseOver');
            }}
            w="full"
            p="1rem"
            borderTop="1px solid gray"
          >
            ROLL UP STANDS
          </Text>
          <Text
            _hover={{ color: 'ipress.500', transform: '' }}
            onMouseOver={() => {
              console.log('mouseOver');
            }}
            w="full"
            p="1rem"
            borderTop="1px solid gray"
          >
            DUMMY CHEQUES
          </Text>
          <Text
            _hover={{ color: 'ipress.500', transform: '' }}
            onMouseOver={() => {
              console.log('mouseOver');
            }}
            w="full"
            p="1rem"
            borderTop="1px solid gray"
            borderBottom="1px solid gray"
          >
            INSTAGRAM FRAME BOARDS
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          py="4rem"
          alignItem="start"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
        >
          <Text fontSize={['16px', '20px', '24px']}>OUR PRODUCTS</Text>
          <Wrap
            my="2rem"
            maxW={{ base: '14rem', sm: '4xl' }}
            mx="auto"
            justify={{ base: 'space-evenly', md: 'space-between' }}
            alignContent={'center'}
            align="center"
            alignItems={'center'}
          >
            <WrapItem>
              <HeroCard
                title="Banner"
                img="https://media.istockphoto.com/vectors/luxury-banner-template-vector-id1199863174?k=20&m=1199863174&s=612x612&w=0&h=bp8NUgyoqxBwxoYPSpgJ2HLlLq3xO-ZWQ8dpSeIXoX8="
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Poster"
                img="https://img.pikbest.com/01/61/68/65SpIkbEsTywJ.jpg-0.jpg!bw700"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Sticker"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
            <HeroCard
              title="Banner"
              img="https://media.istockphoto.com/vectors/luxury-banner-template-vector-id1199863174?k=20&m=1199863174&s=612x612&w=0&h=bp8NUgyoqxBwxoYPSpgJ2HLlLq3xO-ZWQ8dpSeIXoX8="
            />
            <WrapItem>
              <HeroCard
                title="Poster"
                img="https://img.pikbest.com/01/61/68/65SpIkbEsTywJ.jpg-0.jpg!bw700"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Sticker"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
          </Wrap>
        </Box>
        <Testimonials />
      </VStack>
    </Container>
  );
};

export { Home };
