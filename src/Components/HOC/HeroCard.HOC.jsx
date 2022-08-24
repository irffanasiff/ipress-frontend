import { Center, VStack, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const HeroCard = ({ img, title }) => {
  return (
    <VStack spacing="1rem" alignItems={'start'} p="1rem">
      <Center
        h={{ base: '12rem', md: '15rem' }}
        w={{ base: '15rem', md: '18rem' }}
        overflow={'hidden'}
        position={'relative'}
        role={'group'}
      >
        <Image
          h={{ base: '12rem', md: '15rem' }}
          w={{ base: '15rem', md: '18rem' }}
          objectFit={'cover'}
          transition="all 0.3s ease-in-out"
          _groupHover={{
            transform: 'scale(0.95)',
          }}
          src={img}
        />
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          fontWeight="600"
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          color={'white'}
          position={'absolute'}
          w={'100%'}
          h={'100%'}
          bg={'rgba(0,0,0, 0.25)'}
          _hover={{
            bg: 'rgba(0,0,0, 0)',
            color: 'rgba(0,0,0, 0)',
          }}
        >
          <Text>{title}</Text>
        </Flex>
      </Center>
    </VStack>
  );
};

export default HeroCard;
