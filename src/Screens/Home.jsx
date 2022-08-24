import React, { useState } from 'react';
import {
  Container,
  Heading,
  Wrap,
  Box,
  Stack,
  Text,
  WrapItem,
  Button,
  VStack,
  Image,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
} from '@chakra-ui/react';
import { HiLightBulb } from 'react-icons/hi';
import { FaLocationArrow, FaPencilAlt } from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';
import Typewriter from 'typewriter-effect';
import HeroCard from '../Components/HOC/HeroCard.HOC';
import { useRef } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const targetElement = useRef();
  const targetElement2 = useRef();
  const handleScroll = e => {
    const isVisble =
      window.innerHeight - targetElement.current.getBoundingClientRect().top;
    const bottom = targetElement.current.getBoundingClientRect().bottom;
    if (isVisble >= 0 && bottom > 0) {
      var x = targetElement.current.getBoundingClientRect().top;
      var y = targetElement2.current.getBoundingClientRect().top;
      targetElement.current.style.backgroundPosition = parseInt(-x / 15) + 'px';
      targetElement2.current.style.backgroundPosition =
        parseInt(-y / 15) + 'px';
    }
  };
  useEffect(() => {
    /* window.addEventListener('scroll', handleScroll);
    return function cleanupListener() {
      window.removeEventListener('scroll', handleScroll);
    }; */
  }, []);

  return (
    <Container paddingInline={'0'} maxW={'8xl'}>
      <VStack spacing={{ base: '4rem', md: '6rem' }}>
        <Center
          overflow={'hidden'}
          w={{ base: '100%' }}
          h={'120vh'}
          minH={'300px'}
          maxH={{ base: '500px', md: '1200px' }}
          bg="gray.500"
          bgImage={
            "url('https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_1500/v1661113425/IPRESS/Mockups/Ipress_T_shirt_2_o023zx.jpg')"
          }
          bgRepeat={'no-repeat'}
          bgSize={'cover'}
          bgAttachment={'fixed'}
          bgPos={'center'}
        >
          <Heading
            lineHeight={{ base: '3.6rem', md: '130%' }}
            pl={'30px'}
            maxW="6xl"
            mx="auto"
            fontSize={{ base: '3.2rem', md: '8xl' }}
            fontWeight="700"
            minH={{ base: '180px' }}
            color={'white'}
          >
            <Text as="span">
              Quality Prints Shipped to your{' '}
              <Box h={0} display={{ base: 'none', md: 'inline', lg: 'none' }}>
                <br />
              </Box>
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
        </Center>
        <Flex
          flexWrap={'wrap'}
          px={[4, '50px', 10]}
          width={'100%'}
          justifyContent={['space-between', 'space-evenly']}
        >
          <Flex
            direction={'column'}
            width={['100%', '100%', '35%']}
            h={{ base: '500px', md: '600px', lg: '90vh' }}
            maxH={'900px'}
            gap={6}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
            position={'relative'}
            overflow={'hidden'}
          >
            <Box
              zIndex={0}
              w={{ base: '120%', md: '110%', xl: '130%' }}
              h={'100%'}
              position={'absolute'}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_1500/v1661114449/IPRESS/Mockups/Pen_Mockup_rfflsu.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
              ref={targetElement2}
            ></Box>
            <VStack zIndex={2}>
              <Text fontSize={['2xl', '3xl', '2rem', '2.5rem']} p={2}>
                Custom <br />
                Stationary/
                <br />
                Promotional Items
              </Text>
            </VStack>
            <Text
              zIndex={2}
              fontSize={['lg', 'xl', '1.3rem', '2xl']}
              p={4}
              color={'gray.600'}
              width={'300px'}
            >
              {' '}
              Chose from our various design options
            </Text>
            <Button
              fontWeight={400}
              fontSize={'xl'}
              p={'1.5rem'}
              width={'200px'}
              bgColor={'white'}
              color={'#00509E'}
              _hover={{
                bgColor: 'transparent',
                outline: '2px solid #00509E',
              }}
            >
              Start Creating
            </Button>
          </Flex>
          <Flex
            mt={[3, 3, 0]}
            direction={'column'}
            width={['100%', '100%', '60%']}
            h={{ base: '500px', md: '600px', lg: '90vh' }}
            maxH={'900px'}
            gap={6}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
            position={'relative'}
            overflow={'hidden'}
          >
            <Box
              zIndex={0}
              w={{ base: '120%', md: '110%', xl: '130%' }}
              h={'100%'}
              position={'absolute'}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_1500/v1661114449/IPRESS/Mockups/Pen_Mockup_rfflsu.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
              ref={targetElement}
            ></Box>
            <VStack zIndex={2}>
              <Text fontSize={['2xl', '4xl', '5xl']}>
                Create <br />
                Professioal Print <br />
                Projects
              </Text>
            </VStack>
            <Text
              fontSize={['lg', '2xl']}
              color={'gray.600'}
              width={'330px'}
              zIndex={2}
            >
              {' '}
              Everything you need to create your custom projects
            </Text>
            <Button
              fontWeight={400}
              fontSize={'xl'}
              p={'1.5rem'}
              width={'200px'}
              bgColor={'white'}
              color={'#00509E'}
              _hover={{
                bgColor: 'transparent',
                outline: '2px solid #00509E',
              }}
            >
              View More
            </Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} w={'100%'} p={{ base: 3, md: 4, '2xl': 0 }}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '2rem' }}
            mb={{ base: '30px', md: '60px' }}
          >
            Need large formats? Contact us about different options.
          </Heading>
          <Grid
            mx={'auto'}
            h={{ base: '400px', md: '700px', lg: '800px' }}
            w={{ base: '100%', md: '80%' }}
            templateRows="repeat(6, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={[2, 4]}
          >
            <GridItem
              rowSpan={3}
              colSpan={5}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,h_600/v1661114104/IPRESS/Mockups/Mug_five_oerswx.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
            />
            <GridItem
              rowSpan={2}
              colSpan={2}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,h_300/v1661113343/IPRESS/Mockups/Flex_banner_with_4_eyelets_mockup_bgxcvd.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
            />
            <GridItem
              rowSpan={2}
              colSpan={3}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_500/v1661113288/IPRESS/Mockups/Car_Brand_Mockup_hjhay2.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center left'}
            />
            <GridItem
              rowSpan={4}
              colSpan={5}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,ar_5:4,c_fill/c_scale,h_550/v1661116261/IPRESS/Mockups/Window_Graphics_Mockup_New_tahxzr.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
            />
            <GridItem
              rowSpan={3}
              colSpan={5}
              bg="gray.500"
              bgImage={
                'url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_80,ar_5:3,c_fill/c_scale,w_800/v1661114324/IPRESS/Mockups/Notebook_Correction_ephzm4.jpg")'
              }
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
            />
          </Grid>
        </Flex>
        <Flex direction={'column'} w={'full'}>
          <Heading
            mx={{ base: 3, md: 4, '2xl': 0 }}
            fontSize={['xl', '3xl', '4xl']}
            mb={{ base: '20px', md: '50px' }}
          >
            Our Process
          </Heading>
          <Grid
            alignItems={'center'}
            textAlign={'center'}
            mx={'auto'}
            w={'100%'}
            templateRows={{
              sm: 'repeat(4, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(1, 1fr)',
            }}
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
          >
            <GridItem
              bg="#00509E"
              minH={{ base: '300px', lg: '420px' }}
              color={'white'}
              display={'flex'}
              flexDirection={'column'}
              gap={{ base: '15px', md: '30px' }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <HiLightBulb size={90} />
              <Heading fontSize={'1.8rem'}>STEP 1</Heading>
              <Heading fontSize={'1rem'} fontWeight={400}>
                {' '}
                Chose your product
              </Heading>
            </GridItem>
            <GridItem
              bg="#F0F0F0"
              minH={{ base: '300px', lg: '420px' }}
              display={'flex'}
              flexDirection={'column'}
              gap={{ base: '15px', md: '30px' }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <FaLocationArrow size={90} />
              <Heading fontSize={'1.8rem'}>STEP 2</Heading>
              <Heading fontSize={'1rem'} fontWeight={400} w={'80%'}>
                {' '}
                Pick your printing specifications and quantity
              </Heading>
            </GridItem>
            <GridItem
              bg="#00509E"
              minH={{ base: '300px', lg: '420px' }}
              display={'flex'}
              flexDirection={'column'}
              gap={{ base: '15px', md: '30px' }}
              alignItems={'center'}
              justifyContent={'center'}
              color="white"
            >
              <FaPencilAlt size={90} />
              <Heading fontSize={'1.8rem'}>STEP 3</Heading>
              <Heading fontSize={'1rem'} fontWeight={400} w={'80%'}>
                {' '}
                Easily upload your own design or customize one of our templates
              </Heading>
            </GridItem>
            <GridItem
              bg="#F0F0F0"
              minH={{ base: '300px', lg: '420px' }}
              display={'flex'}
              flexDirection={'column'}
              gap={{ base: '15px', md: '30px' }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <RiShoppingCartLine size={90} />
              <Heading fontSize={'1.8rem'}>STEP 4</Heading>
              <Heading fontSize={'1rem'} fontWeight={400} w={'80%'}>
                {' '}
                Pay and get ready for your product to be produced and delivered.
              </Heading>
            </GridItem>
          </Grid>
        </Flex>
        <Box
          display="flex"
          flexDirection="column"
          py="4rem"
          align="start"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
        >
          <Heading
            mx={{ base: 3, md: 4, '2xl': 0 }}
            fontSize={['xl', '3xl', '4xl']}
          >
            Get Started
          </Heading>
          <Wrap
            spacing={0}
            m="2rem 0"
            maxW={{ base: '14rem', sm: '100%' }}
            justify={{ base: 'space-evenly' }}
            alignContent={'center'}
            align="center"
            alignItems={'center'}
          >
            <WrapItem>
              <HeroCard
                title="Brochures"
                img="https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_600/v1661115015/IPRESS/Mockups/Trifold_Brochure_Mockup_ut653a.jpg"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Dummy Cheques"
                img="https://img.pikbest.com/01/61/68/65SpIkbEsTywJ.jpg-0.jpg!bw700"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Menus"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Flyers"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="T-shirt"
                img="https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_400/v1661117439/IPRESS/Mockups/Ipress_T_shirt-min_k6rkxs.jpg"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Calenders"
                img="https://img.pikbest.com/01/61/68/65SpIkbEsTywJ.jpg-0.jpg!bw700"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Banners"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Stickers"
                img="https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_400/v1661114640/IPRESS/Mockups/Plain_White_Stickers_Mockup_cqls7k.jpg"
              />
            </WrapItem>
          </Wrap>
        </Box>
      </VStack>
    </Container>
  );
};

export { Home };
