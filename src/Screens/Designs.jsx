import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../Actions/imageAction';
import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
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
  type = type.charAt(0).toUpperCase() + type.slice(1);
  const navigate = useNavigate(); // navigate to editor on clicking poster
  const dispatch = useDispatch();
  const { imageData, loading, error } = useSelector(state => state.images);
  useEffect(() => {
    if (!imageData || !imageData[type]) {
      console.log('images');
      dispatch(getImages(type));
    } else if (imageData[type].length === 0) {
      navigate(`/product/${type}`);
    }
  }, [imageData, type, dispatch, navigate]);
  const handleClick = e => {
    setUrl(e.target.src);
    navigate(`/designs/${type}/editor`);
  };
  const renderImages = data => {
    return (
      <SimpleGrid columns={[3]} columnGap={10} rowGap={20} w={'full'}>
        {data.map(img => (
          <GridItem
            key={img.filename}
            colSpan={1}
            onClick={e => handleClick(e)}
          >
            <Image src={img['secure_url']} alt={img.filename} />
          </GridItem>
        ))}
      </SimpleGrid>
    );
  };
  return (
    <VStack
      spacing={{ base: '4rem', lg: '2rem' }}
      p={{ base: '3rem 1.5rem', md: '4rem 2rem' }}
      maxW="7xl"
      mx="auto"
      direction={{ base: 'column-reverse', lg: 'row' }}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      justifyContent={'space-between'}
    >
      <Heading fontWeight={'400'}>{type}</Heading>

      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : imageData ? (
        imageData[type] ? (
          renderImages(imageData[type])
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </VStack>
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
