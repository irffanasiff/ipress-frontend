import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { NavLink, useParams } from 'react-router-dom';

const ProductCategory = ({ items }) => {
  let { type } = useParams();
  const products = items.filter(item => {
    return item.href === `/category/${type}`;
  });
  const productCard = (product, index, href) => {
    return (
      <Box
        h={['50vh', '70vh', '80vh']}
        bg={'#00509E'}
        p={{ base: '5%', lg: '3% 5%' }}
      >
        <Flex h={'100%'} direction={index % 2 ? 'row' : 'row-reverse'}>
          <Box border={'1px solid black'} w={['40%', '50%']}></Box>
          <Center
            bg={'white'}
            w={['60%', '50%']}
            flexDirection={'column'}
            p={[3, 5, 7]}
            textAlign={'center'}
          >
            <Heading fontSize={['1.2rem', '1.7rem', '2.5rem']} fontWeight={400}>
              {product}
            </Heading>
            <Heading
              fontSize={['12px', '1rem', '1.2rem']}
              fontWeight={400}
              my={[5, 7]}
            >
              Chose between different {product}
            </Heading>
            <NavLink to={href}>
              <Button
                fontWeight={400}
                bg={'black'}
                color={'white'}
                borderRadius={0}
                _hover={{
                  border: '1px solid black',
                  bg: 'white',
                  color: 'black',
                }}
              >
                View More
              </Button>
            </NavLink>
          </Center>
        </Flex>
      </Box>
    );
  };
  return (
    <Container maxW={'8xl'} p="0">
      <Center
        bg={'#8AADCF'}
        h={'20vw'}
        minH={'200px'}
        color={'#00509E'}
        flexDirection={'column'}
      >
        <Heading fontSize={['3xl', '4xl', '5xl']}>{products[0].label}</Heading>
        <Heading fontSize={['lg', 'xl', '2xl']} fontWeight={400} mt={5}>
          Chose between different {products[0].label}
        </Heading>
      </Center>
      <Box pt={'5%'}>
        {products[0].children.map((item, index) =>
          productCard(item.label, index, item.href)
        )}
      </Box>
    </Container>
  );
};
export { ProductCategory };
