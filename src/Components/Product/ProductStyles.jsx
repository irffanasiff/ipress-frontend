import { Box, Flex, VStack } from '@chakra-ui/react';

export const ProductStyles = ({ styles, brochure }) => {
  return (
    <Flex
      gap={'20px'}
      wrap={'wrap'}
      m={'30px'}
      mx={{ sm: 0, md: '30px' }}
      justifyContent={'space-evenly'}
    >
      {styles.map((style, index) => (
        <VStack
          w={{ base: '120px', sm: '200px', md: '260px' }}
          spacing={0}
          key={index}
        >
          <Box
            w={'100%'}
            bg={`url("https://res.cloudinary.com/dzofnuhqh/image/upload/q_auto,w_600/v1660948591/IPRESS/${
              brochure ? 'Brochure%20Types' : 'Finishing%20Styles'
            }/${style.replace(' ', '_')}.jpg")`}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgPos={'center'}
            h={
              brochure
                ? { base: '100px', md: '200px' }
                : { base: '100px', md: '120px' }
            }
          ></Box>
          <Box w={'100%'} bg={'#E8E6E6'} p={2} textAlign={'center'}>
            {style}
          </Box>
        </VStack>
      ))}
    </Flex>
  );
};
