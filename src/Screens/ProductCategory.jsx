import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ProductCategory = ({ items, setCategory }) => {
  let { type } = useParams();
  const products = items.filter(item => {
    return item.href === `/category/${type}`;
  });
  const productCard = (product, index, href, image, category) => {
    let url = image.split('q_auto');
    let transformation =
      category === 'Large Formats' ? 'q_60,w_650,h_500' : 'q_auto,w_900';

    return (
      <Box
        key={index}
        h={['50vh', '70vh', '80vh']}
        maxH={'600px'}
        border={'2px solid black'}
        mx={'10px'}
        mb={'30px'}
        p={{ base: '5%', lg: '3% 5%' }}
      >
        <Flex h={'100%'} direction={index % 2 ? 'row' : 'row-reverse'}>
          <Box
            w={['40%', '50%']}
            bgColor={'#CECECE'}
            bgImage={`url('${url[0] + transformation + url[1]}')`}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgPos={'center'}
          ></Box>
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
  useEffect(() => {
    setCategory(type);
    return () => setCategory('none');
  }, [setCategory, type]);
  return (
    <Container maxW={'8xl'} p="0">
      <Center
        bg={'#8AADCF'}
        h={'20vw'}
        minH={'200px'}
        maxH={'300px'}
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
          productCard(
            item.label,
            index,
            item.href,
            item.image[0],
            products[0].label
          )
        )}
      </Box>
    </Container>
  );
};
export { ProductCategory };
