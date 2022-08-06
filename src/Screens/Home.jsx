import React from 'react';
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
import Print from '../Images/print.webp';
import HeroCard from '../Components/HOC/HeroCard.HOC';
import Testimonials from '../Components/Sections/Testimonial/Index';

const Home = () => {
  return (
    <Container paddingInline={'0'} maxW={'8xl'}>
      <VStack spacing={{ base: '4rem', md: '6rem' }}>
        <Center
          overflow={'hidden'}
          w={{ base: '100%' }}
          h={'120vh'}
          minH={'300px'}
          maxH={'1500px'}
          bgImage={Print}
          bgRepeat={'no-repeat'}
          bgSize={'cover'}
          bgAttachment={'fixed'}
        >
          <Heading
            lineHeight={{ base: '3.6rem', md: '6.8rem' }}
            maxW="6xl"
            mx="auto"
            fontSize={{ base: '3.2rem', md: '8xl' }}
            fontWeight="700"
            color={'white'}
          >
            <Text as="span">Quality Prints Shipped to your </Text>
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
          p={[4, 4, 0]}
          width={'100%'}
          justifyContent={['space-between', 'space-evenly']}
        >
          <Flex
            direction={'column'}
            width={['100%', '100%', '40%']}
            border={'1px solid black'}
            h={{ base: '500px', lg: '110vh' }}
            maxH={'700px'}
            gap={6}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
          >
            <VStack>
              <Text fontSize={['2xl', '4xl', '5xl']}>
                Custom <br />
                Stationary/
                <br />
                Promotional Items
              </Text>
            </VStack>
            <Text
              fontSize={['lg', '2xl', '3xl']}
              color={'gray.600'}
              width={'300px'}
            >
              {' '}
              Chose from our various design options
            </Text>
            <Button variant={'custom-black'} width={'200px'}>
              Start Creating
            </Button>
          </Flex>
          <Flex
            mt={[3, 3, 0]}
            direction={'column'}
            width={['100%', '100%', '55%']}
            border={'1px solid black'}
            h={{ base: '500px', lg: '110vh' }}
            maxH={'700px'}
            gap={6}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
          >
            <VStack>
              <Text fontSize={['2xl', '4xl', '5xl']}>
                Create <br />
                Professioal
                <br />
                Print projects
              </Text>
            </VStack>
            <Text
              fontSize={['lg', '2xl', '3xl']}
              color={'gray.600'}
              width={'300px'}
            >
              {' '}
              Everything you need to create your custom projects
            </Text>
            <Button variant={'custom-black'} width={'200px'}>
              View More
            </Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} w={'100%'} p={{ base: 3, md: 4, '2xl': 0 }}>
          <Heading
            fontSize={['2xl', '4xl', '5xl']}
            mb={{ base: '30px', md: '60px' }}
          >
            Need large formats? Contact us about different options.
          </Heading>
          <Grid
            mx={'auto'}
            h={{ base: '400px', md: '60vw' }}
            w={{ base: '100%', md: '60%' }}
            maxH={'600px'}
            templateRows="repeat(6, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={[2, 4]}
          >
            <GridItem rowSpan={3} colSpan={5} bg="tomato" />
            <GridItem rowSpan={2} colSpan={2} bg="green" />
            <GridItem rowSpan={2} colSpan={3} bg="papayawhip" />
            <GridItem rowSpan={4} colSpan={5} bg="black" />
            <GridItem rowSpan={3} colSpan={5} bg="red" />
          </Grid>
        </Flex>
        <Flex direction={'column'} w={'full'}>
          <Heading
            mx={{ base: 3, md: 4, '2xl': 0 }}
            fontSize={['xl', '3xl', '4xl']}
            mb={{ base: '60px' }}
          >
            Our Process
          </Heading>
          <Grid
            alignItems={'center'}
            textAlign={'center'}
            mx={'auto'}
            h={{ base: 'auto', lg: '30vw' }}
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
              minH={'300px'}
              color={'white'}
              display={'flex'}
              flexDirection={'column'}
              gap={'15px'}
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
              minH={'300px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'15px'}
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
              minH={'300px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'15px'}
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
              minH={'300px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'15px'}
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
            m="2rem 0"
            maxW={{ base: '14rem', sm: '100%' }}
            justify={{ base: 'space-evenly' }}
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
            <WrapItem>
              <HeroCard
                title="Sticker"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
            <WrapItem>
              <HeroCard
                title="Sticker"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
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
            <WrapItem>
              <HeroCard
                title="Sticker"
                img="https://i0.wp.com/www.graphidpromotion.com/wp-content/uploads/2019/09/stickers-adesivi-personalizzati-graphid.jpg?fit=629%2C835&ssl=1"
              />
            </WrapItem>
          </Wrap>
        </Box>
        <Flex w={'100%'} h={'100vh'} position={'relative'}>
          <Flex
            w={'50%'}
            h={'100%'}
            bg={'#FFE892'}
            direction={'column'}
            p={'5%'}
            gap={'20px'}
          >
            <Heading
              fontSize={['xl', '3xl', '5xl']}
              color={'#00509E'}
              fontWeight={500}
            >
              Join Our Mailing List
            </Heading>
            <Heading fontSize={'20px'} fontWeight={400}>
              Be the first to know about about our sales, events and exclusive
              offers.
            </Heading>
            <Box position={'relative'}>
              <Text as={'label'} for={'email'}>
                Enter your email address
              </Text>
              <Input
                name={'email'}
                borderRadius={'20px'}
                required
                h={'50px'}
                p={4}
                bg={'white'}
              />
              <Button
                position={'absolute'}
                border={'1px solid #00509E'}
                color={'#00509E'}
                _hover={{ bg: '#00509E', color: 'white' }}
                top={'40%'}
                right={'7px'}
                borderRadius={'20px'}
                zIndex={999}
              >
                Subscribe
              </Button>
            </Box>
          </Flex>
          <Flex w={'50%'} h={'100%'} bg={'#00509E'} p={'5%'}>
            <Box w={'80%'} p={'30px 70px'} bg={'white'} h={'50%'} mx={'auto'}>
              <Heading
                fontSize={['xl', '3xl', '5xl']}
                color={'#00509E'}
                fontWeight={500}
                borderBottom={'1px solid #00509E'}
                pb={4}
              >
                Need Help?
              </Heading>
              <Text mt={5}>
                Got a question? We are here to help make your projects come to
                life.
              </Text>
            </Box>
          </Flex>
          <Flex
            position={'absolute'}
            bottom={'-15%'}
            w={'90%'}
            h={'60vh'}
            left={'5%'}
            bg={'#C8D9EA'}
          ></Flex>
        </Flex>
      </VStack>
    </Container>
  );
};

export { Home };
