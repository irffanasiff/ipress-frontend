import {
  Button,
  Container,
  Heading,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { NavChildren } from './NavChildren';

export const Settings = ({ NAV_ITEMS }) => {
  return (
    <Container maxW={'6xl'} w={'100%'} overflowX={'hidden'} p={[0, 2, 4]}>
      <Heading
        textAlign={'center'}
        py={{ base: '20px' }}
        color="#00509E"
        fontWeight={500}
        fontSize={['2rem', '2.7rem', '3rem', '3.6rem']}
      >
        ITEM CATEGORIES
      </Heading>
      <VStack w={'full'}>
        {NAV_ITEMS.map((item, index) => (
          <VStack
            key={index}
            border={'1px solid #00509E'}
            borderRadius={'8px'}
            p={[0, '20px']}
            mx={'auto'}
            w={'full'}
            gap={{ base: '20px', md: '40px' }}
          >
            <Heading
              w={'full'}
              textAlign={'left'}
              color="#00509E"
              fontWeight={600}
              fontSize={['1.8rem', '2.3rem', '2.5rem']}
            >
              {item.label}
            </Heading>
            {item.children
              ? item.children.map((child, index) => (
                  <NavChildren item={child} id={item._id} childIndex={index} />
                ))
              : ''}
          </VStack>
        ))}
      </VStack>
    </Container>
  );
};
