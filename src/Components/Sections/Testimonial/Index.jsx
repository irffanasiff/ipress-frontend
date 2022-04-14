import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  VStack,
  HStack,
  Text,
  Container,
  Heading,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonials() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '0%', md: '0%' });
  const side = useBreakpointValue({ base: '30%', md: '70%' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      name: 'Rusty Stickel',
      jobTitle: 'Biological scientist',
      reviewDate: '15 Jan 2021',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8ivAs7hm5jEr5IhywAlD57gNTzeCTh8HQrtd9NGeHpcuUJ8mevmo6R6OlCXPKiT0K2Y&usqp=CAU',
    },
    {
      name: 'Henry Saddler',
      jobTitle: 'Editor',
      reviewDate: '22  Dec 2020',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://p4.wallpaperbetter.com/wallpaper/253/245/135/elijah-wood-black-white-face-actor-wallpaper-preview.jpg',
    },
    {
      name: 'Jessica Marasco',
      jobTitle: 'Payroll bookkeeper',
      reviewDate: '10 Mar 2021',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat',
      image:
        'https://images.unsplash.com/photo-1575708980055-ffd4c17f1be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <Container m="0" maxW="full" backgroundColor={'black'} color="white">
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}
        maxW="8xl"
        mx="auto"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          border="1px solid white"
          p="2rem 1rem"
          right={{ base: '8rem', md: '10rem', lg: '16rem' }}
          rounded="full"
          top={{ base: '5rem', md: '12rem' }}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BsArrowLeft size="30px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          border="1px solid white"
          p="2rem 1rem"
          aria-label="right-arrow"
          variant="ghost"
          rounded="full"
          position="absolute"
          right={{ base: '3rem', md: '5rem', lg: '11rem' }}
          top={{ base: '5rem', md: '12rem' }}
          // transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BsArrowRight size="30px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={slider => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                opacity: '.4',
                zIndex: '-1',
                background: `url(${card.image}) no-repeat 60% 20%`,
                backgroundSize: '30rem',
                backgroundClip: 'content-box',
              }}
              key={index}
              height={'6xl'}
              //position="relative"
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container
                size="container.lg"
                height="600px"
                maxW="6xl"
                position="relative"
              >
                <Stack
                  justifyContent={'space-between'}
                  spacing={6}
                  w={'full'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                  direction={{ base: 'column', md: 'row' }}
                >
                  <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                    TESTIMONIALS
                  </Heading>
                  <VStack
                    w="full"
                    pl={{ base: '0rem', md: '5rem' }}
                    alignSelf="center"
                    mx="auto"
                    alignItems={'start'}
                  >
                    <HStack
                      fontSize={{ base: 'xl', lg: '2xl' }}
                      fontWeight="400"
                      spacing="2rem"
                    >
                      <Text>{card.jobTitle}</Text>
                      <Text>{card.reviewDate}</Text>
                    </HStack>
                    <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      /{card.name}
                    </Text>
                    <Text
                      maxW={{ base: 'lg', md: 'xl' }}
                      fontSize={{ base: 'md', lg: 'lg' }}
                      color="GrayText"
                      minH={'10rem'}
                    >
                      {card.text}
                    </Text>
                  </VStack>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
