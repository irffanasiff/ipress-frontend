import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Heading, VStack } from '@chakra-ui/react';
import Photoeditor from '../Components/PhotoEditor/PhotoEditor';

export const Editor = ({ imgURL }) => {
  const [image, setImage] = useState('');
  let img = localStorage.getItem('EDITED_ITEM');
  if (imgURL && imgURL !== img) {
    localStorage.setItem('EDITED_ITEM', imgURL);
  } else if (!imgURL && img) {
    imgURL = img;
  }
  const { type } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(image);
    if (!imgURL && !img) {
      navigate(`/designs/${type}`);
    }
  }, [imgURL, type, navigate, img, image]);

  return (
    <VStack
      spacing={{ base: '4rem', lg: '2rem' }}
      p={{ base: '3rem 1.5rem', md: '4rem 2rem' }}
      maxW="8xl"
      mx="auto"
      direction={{ base: 'column-reverse', lg: 'row' }}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      justifyContent={'space-between'}
    >
      <Heading fontWeight={'400'}>Editor</Heading>
      <Photoeditor passImg={setImage} imgURL={imgURL} />
    </VStack>
  );
};
