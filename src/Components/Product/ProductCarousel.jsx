import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Heading } from '@chakra-ui/react';

export const ProductCarousel = ({ images }) => {
  const customRenderThumb = children =>
    children.map((item, index) => {
      return (
        <img
          key={index}
          src={
            images[index].split('q_auto')[0] +
            'q_40,h_100,w_100' +
            images[index].split('q_auto')[1]
          }
          alt={''}
        />
      );
    });

  return (
    <Box w={{ base: '100%', md: '50%' }}>
      <Carousel
        {...{
          infiniteLoop: true,
          showStatus: false,
          autoPlay: true,
          useKeyboardArrows: true,
          transitionTime: 1000,
          interval: 3000,
        }}
        renderThumbs={customRenderThumb}
        width={'100%'}
      >
        {images.map((url, index) => {
          return (
            <Box
              key={index}
              mx="auto"
              w={{ base: '80%', md: '100%' }}
              h={'50vw'}
              minH={'300px'}
              maxH={'550px'}
              bgImage={`url("${
                url.split('q_auto')[0] + 'q_auto,h_700' + url.split('q_auto')[1]
              }")`}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgPos={'center'}
            ></Box>
          );
        })}
      </Carousel>
    </Box>
  );
};
