import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
export const Dashboard = () => {
  return (
    <Container w={'100%'} p={5} maxW={'8xl'}>
      <Heading
        lineHeight={{ base: '3.6rem', md: '6.8rem' }}
        maxW="6xl"
        mx="auto"
        fontSize={{ base: '3.2rem', md: '4rem' }}
        fontWeight="500"
      >
        Dashboard
      </Heading>
      <VStack w={'100%'} spacing={5}>
        <Flex w={'100%'} justifyContent={'space-between'}>
          <HStack
            p={5}
            w={'30%'}
            maxW={'350px'}
            minW={'150px'}
            borderRadius={'8px'}
            background={'white'}
          >
            <Icon
              as={FiUser}
              fontSize="5xl"
              p={2}
              borderRadius={'50%'}
              background={'gray.200'}
            ></Icon>
            <Stack p={2}>
              <Heading as="h2" size={'sm'} color={'gray.500'}>
                Total Users
              </Heading>
              <Heading as="h3" size={'xl'} color={'gray.900'}>
                100
              </Heading>
            </Stack>
          </HStack>

          <HStack
            p={5}
            w={'30%'}
            minW={'150px'}
            maxW={'350px'}
            borderRadius={'8px'}
            background={'white'}
          >
            <Icon
              as={FiUser}
              fontSize="5xl"
              p={2}
              borderRadius={'50%'}
              background={'gray.200'}
            ></Icon>
            <Stack p={2}>
              <Heading as="h2" size={'sm'} color={'gray.500'}>
                Total Orders
              </Heading>
              <Heading as="h3" size={'xl'} color={'gray.900'}>
                100
              </Heading>
            </Stack>
          </HStack>

          <HStack
            maxW={'350px'}
            p={5}
            w={'30%'}
            minW={'150px'}
            borderRadius={'8px'}
            background={'white'}
          >
            <Icon
              as={FiUser}
              fontSize="5xl"
              p={2}
              borderRadius={'50%'}
              background={'gray.200'}
            ></Icon>
            <Stack p={2}>
              <Heading as="h2" size={'sm'} color={'gray.500'}>
                Orders in Transit
              </Heading>
              <Heading as="h3" size={'xl'} color={'gray.900'}>
                100
              </Heading>
            </Stack>
          </HStack>
        </Flex>
        <Flex w={'100%'} justifyContent={'space-evenly'}>
          <HStack
            maxW={'350px'}
            p={5}
            w={'30%'}
            minW={'150px'}
            borderRadius={'8px'}
            background={'white'}
          >
            <Icon
              as={FiUser}
              fontSize="5xl"
              p={2}
              borderRadius={'50%'}
              background={'gray.200'}
            ></Icon>
            <Stack p={2}>
              <Heading as="h2" size={'sm'} color={'gray.500'}>
                Amount to be Paid
              </Heading>
              <Heading as="h3" size={'xl'} color={'gray.900'}>
                100
              </Heading>
            </Stack>
          </HStack>

          <HStack
            maxW={'350px'}
            p={5}
            w={'30%'}
            minW={'150px'}
            borderRadius={'8px'}
            background={'white'}
          >
            <Icon
              as={FiUser}
              fontSize="5xl"
              p={2}
              borderRadius={'50%'}
              background={'gray.200'}
            ></Icon>
            <Stack p={2}>
              <Heading as="h2" size={'sm'} color={'gray.500'}>
                Orders in Transit
              </Heading>
              <Heading as="h3" size={'xl'} color={'gray.900'}>
                100
              </Heading>
            </Stack>
          </HStack>
        </Flex>
      </VStack>
      <Flex></Flex>
    </Container>
  );
};
