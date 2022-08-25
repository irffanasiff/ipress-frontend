import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../Actions/imageAction';
import {
  Center,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
/* import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'; */

export const Designs = ({ setUrl }) => {
  let { type } = useParams();
  let productName =
    type === 'Paper-Stickers' || type === 'Transparent-Stickers'
      ? 'Stickers'
      : type.split('-').join(' ');
  const navigate = useNavigate(); // navigate to editor on clicking poster
  const dispatch = useDispatch();
  const { imageData, loading, error } = useSelector(state => state.images);
  useEffect(() => {
    if (!imageData || !imageData[productName]) {
      dispatch(getImages(productName));
    } else if (imageData[productName].length === 0) {
      navigate(`/product/${type}`);
    }
  }, [productName, imageData, type, dispatch, navigate]);
  const handleClick = e => {
    setUrl(e.target.src);
    navigate(`/designs/${type}/editor`);
  };
  const renderImages = data => {
    return (
      <SimpleGrid
        columns={[2, 2, 3, 4]}
        minChildWidth={{ base: '280px', sm: '200px', lg: '300px' }}
        columnGap={[5, 5, 10]}
        rowGap={[10, 10, 20]}
        w={'full'}
      >
        {data.map((img, index) => {
          let url = img['secure_url'].split('upload/');
          return (
            <GridItem
              key={index}
              mx={'auto'}
              onClick={e => handleClick(e)}
              minW={{ base: '280px', sm: '200px', lg: '300px' }}
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={url[0] + 'upload/q_auto,w_1000/' + url[1]}
                alt={img.filename}
                maxH={'400px'}
                minW={{ base: '280px', sm: '200px', lg: '300px' }}
                mx={'auto'}
              />
              <Text
                textAlign={'center'}
                m={2}
                fontSize={{ base: '0.8rem', sm: '0.9rem', md: '1rem' }}
              >
                Click to begin designing
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    );
  };
  const renderSkeleton = () => (
    <SimpleGrid
      minChildWidth={{ base: '280px', sm: '200px', lg: '300px' }}
      columnGap={[5, 5, 10]}
      rowGap={[10, 10, 20]}
      w={'full'}
    >
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
      <GridItem minW={{ base: '280px', sm: '200px', lg: '300px' }}>
        <Skeleton height={'250px'}></Skeleton>
      </GridItem>
    </SimpleGrid>
  );
  return (
    <>
      <Center
        bg={'#8AADCF'}
        h={'60vh'}
        maxH={'500px'}
        minH={'200px'}
        color={'#00509E'}
        flexDirection={'column'}
        maxW={'8xl'}
        mx={'auto'}
      >
        <VStack
          bg={'white'}
          w={{ base: '90%', md: '80%' }}
          h={{ base: '70%', md: '65%' }}
          justifyContent={'center'}
          gap={'12%'}
        >
          <Heading
            fontSize={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
            fontWeight={400}
            textAlign={'center'}
          >
            Start Designing
          </Heading>
          <Heading
            fontSize={{ base: '0.9rem', md: '1.1rem' }}
            fontWeight={400}
            mt={5}
            px={'8%'}
            textAlign={'center'}
          >
            Simply customize one of our templates or create your own designs
            with our online design tool.
          </Heading>
        </VStack>
      </Center>
      <VStack
        spacing={{ base: '4rem', lg: '2rem' }}
        p={{ base: '3rem 1.5rem', md: '4rem 2rem' }}
        maxW="8xl"
        mx="auto"
        direction={{ base: 'column-reverse', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={'space-between'}
      >
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : imageData ? (
          imageData[productName] ? (
            renderImages(imageData[productName])
          ) : (
            renderSkeleton()
          )
        ) : (
          renderSkeleton()
        )}
      </VStack>
    </>
  );
};

export const DesignsFromCloud = () => {
  /* // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dzofnuhqh',
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('IPRESS/Banner');

  // Apply the transformation.

  console.log(myImage);
  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
      <img
        src="https://res.cloudinary.com/dzofnuhqh/image/upload/v1650886777/IPRESS/Banner/Banner_9_nn53gh.jpg"
        alt=""
      />
    </div>
  ); */
};
