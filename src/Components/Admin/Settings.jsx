import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavChildren } from './NavChildren';
// REMAINING: ADD NEW CATEGORIES, BROWSE OPTION AND FIELDS ADD AND REMOVE
export const Settings = ({ NAV_ITEMS }) => {
  const [isClosed, setIsClosed] = useState([]);

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
              display={'flex'}
              justifyContent={'space-between'}
              w={'full'}
              textAlign={'left'}
              color="#00509E"
              fontWeight={600}
              fontSize={['1.8rem', '2.3rem', '2.5rem']}
            >
              {item.label}
              {!isClosed.includes(index) ? (
                <ChevronDownIcon
                  cursor={'pointer'}
                  onClick={() => setIsClosed([...isClosed, index])}
                />
              ) : (
                <ChevronUpIcon
                  cursor={'pointer'}
                  onClick={() =>
                    setIsClosed(isClosed.filter(item => item !== index))
                  }
                />
              )}
            </Heading>
            <Box
              w={'full'}
              display={isClosed.includes(index) ? 'none' : 'initial'}
            >
              {item.children
                ? item.children.map((child, index) => (
                    <NavChildren
                      item={child}
                      id={item._id}
                      childIndex={index}
                    />
                  ))
                : ''}
            </Box>
          </VStack>
        ))}
      </VStack>
    </Container>
  );
};
