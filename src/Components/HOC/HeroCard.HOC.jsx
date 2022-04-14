import { Center, VStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const HeroCard = ({ img, title }) => {
  return (
    <VStack spacing="1rem" alignItems={'start'} p="1rem">
      <Center
        w={{ base: '12rem', md: '15rem' }}
        h={{ base: '15rem', md: '18rem' }}
        overflow={'hidden'}
      >
        <Image
          w={{ base: '12rem', md: '15rem' }}
          h={{ base: '15rem', md: '18rem' }}
          objectFit={'cover'}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: 'scale(1.15)',
          }}
          src={img}
        />
      </Center>
      <Text fontWeight="400" fontSize={{ base: 'lg', md: 'xl' }}>
        {title}
      </Text>
    </VStack>
  );
};

export default HeroCard;
