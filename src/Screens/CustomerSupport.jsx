import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { RiCustomerService2Line } from 'react-icons/ri';
import { GoMailRead } from 'react-icons/go';
import { useForm } from 'react-hook-form';
export const CustomerSupport = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = fields => {
    console.log(fields);
  };
  return (
    <Container maxW={'8xl'} p={0}>
      <Heading
        p={{ base: '50px 15px' }}
        textAlign={'center'}
        color="#00509E"
        fontWeight={500}
        fontSize={['2.2rem', '2.7rem', '3rem', '3.6rem']}
      >
        Customer Support
      </Heading>
      <VStack bg={'#C8D9EA'} py={'65px'} gap={6}>
        <Heading
          textAlign={'center'}
          color="#00284F"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem', '3rem']}
        >
          Ways to Connect
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight={200}>
          Our Customer Service team is always happy to help you.
        </Text>
        <HStack
          mt={'20px !important'}
          w={'90%'}
          justifyContent={'space-evenly'}
          color={'#00509E'}
          flexWrap={'wrap'}
          spacing={0}
        >
          <VStack
            my={4}
            minW={'270px'}
            w={'45%'}
            bg={'white'}
            h={'270px'}
            justifyContent={'center'}
            gap={2}
          >
            <Icon as={GoMailRead} w={'4.5rem'} h={'4.5rem'}></Icon>
            <Text fontSize={{ base: '1rem', md: 'xl' }}>Send Us a Message</Text>
            <Text color={'black'} textDecor={'underline'}>
              Contact us anytime
            </Text>
          </VStack>
          <VStack
            w={'45%'}
            minW={'270px'}
            bg={'white'}
            h={'270px'}
            justifyContent={'center'}
            gap={2}
            ml={0}
          >
            <Icon as={RiCustomerService2Line} w={'4.5rem'} h={'4.5rem'}></Icon>
            <Text
              fontSize={{ base: '1rem', md: 'xl' }}
              p={3}
              textAlign={'center'}
            >
              Call 08138941946 or 07083675200
            </Text>
            <Text color={'black'} textDecor={'underline'}>
              Weekdays 8am - 6pm
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack py={'65px'} gap={4}>
        <Heading
          textAlign={'center'}
          color="#00284F"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem', '3rem']}
        >
          At your Service
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          w={'55%'}
          minW={'270px'}
          textAlign={'center'}
        >
          Our professional customer service team is always happy to help you.
          Please fill the form and we will get back to you as soon as possible
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            my={'30px'}
            mx={'auto'}
            p={'40px 20px'}
            borderRadius={'8px'}
            wrap={'wrap'}
            bg={'#C8D9EA'}
            w={'80%'}
            color={'#00509E'}
            outline={'1px solid #00509E'}
          >
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '25%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                First Name
              </FormLabel>
              <Input
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                type={'text'}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                size={{ base: 'sm', md: 'md' }}
                {...register('First Name', {
                  required: `Please enter your first name`,
                })}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '25%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                Last Name
              </FormLabel>
              <Input
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                type={'text'}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                size={{ base: 'sm', md: 'md' }}
                {...register('Last Name', {
                  required: `Please enter your Last Name`,
                })}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '25%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
              <Input
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                type={'text'}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                size={{ base: 'sm', md: 'md' }}
                {...register('Email', {
                  required: `Please enter your Email`,
                })}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '25%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                Phone Number
              </FormLabel>
              <Input
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                type={'number'}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                size={{ base: 'sm', md: 'md' }}
                {...register('Phone Number', {
                  required: `Please enter your Phone Number`,
                })}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '60%',
              }}
              flex={1}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Subject</FormLabel>
              <Input
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                type={'text'}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                size={{ base: 'sm', md: 'md' }}
                {...register('Subject', {
                  required: `Please enter your Subject`,
                })}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '100%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Message</FormLabel>
              <Textarea
                outline={'1px solid #00509E'}
                bg={'#C8D9EA'}
                color={'#00509E'}
                fontSize={{ base: 'sm', md: 'md' }}
                px="0.5rem"
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                borderRadius="4px"
                {...register('Message', {
                  required: `Please enter your Message`,
                })}
              />
              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              p={'25px'}
              ml={3}
              w={'150px'}
              borderRadius={'4px'}
              bg={'#00509E'}
              color={'white'}
              fontWeight={300}
              border={'1px solid #00509E'}
              _hover={{
                color: '#00509E',
                bg: 'white',
              }}
            >
              Submit
            </Button>
          </Flex>
        </form>
      </VStack>
      <VStack py={'65px'} gap={4}>
        <Heading
          textAlign={'center'}
          color="#00284F"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem', '3rem']}
        >
          Store Locator
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          w={'55%'}
          minW={'270px'}
          textAlign={'center'}
        >
          Visit us in any of our stores across the country
        </Text>
        <VStack w={{ base: '100%', md: '80%' }} borderTop={'1px solid #00509E'}>
          <HStack
            w={'100%'}
            p={{ base: '50px 20px', md: '50px 30px' }}
            borderBottom={'1px solid #00509E'}
            justifyContent={'space-between'}
          >
            <Text
              w={{ base: '20%', sm: '15%' }}
              color={'#00509E'}
              fontSize={{ base: 'md', md: 'xl' }}
            >
              Location 01
            </Text>
            <Text
              w={'40%'}
              lineHeight={'150%'}
              fontSize={{ base: '.8rem', sm: '0.9rem', md: '1rem' }}
            >
              Mercyland Land Junction Opposite NNPC Filling Station, East West
              Road, Nkpolu- Rumuigbo, Port Harcourt, Rivers State
            </Text>
            <Text
              w={'20%'}
              fontSize={{ base: '.8rem', sm: '0.9rem', md: '1rem' }}
            >
              <Text my={2}> Opening hours:</Text>
              <Text my={2}>
                Mon - Fri:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                8am - 8pm
              </Text>
              <Text my={2}>
                Saturday:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                9am - 7pm
              </Text>
              <Text my={2}>
                Sunday:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                9am - 8pm
              </Text>
            </Text>
          </HStack>
          <HStack
            w={'100%'}
            p={{ base: '50px 20px', md: '50px 30px' }}
            borderBottom={'1px solid #00509E'}
            justifyContent={'space-between'}
          >
            <Text
              w={{ base: '20%', sm: '15%' }}
              color={'#00509E'}
              fontSize={{ base: 'md', md: 'xl' }}
            >
              Location 02
            </Text>
            <Text
              w={'40%'}
              lineHeight={'150%'}
              fontSize={{ base: '.8rem', sm: '0.9rem', md: '1rem' }}
            >
              KM16, East-West Road, Before UPTH Junction Alakahia, Port
              Harcourt, Rivers State
            </Text>
            <Text
              w={'20%'}
              fontSize={{ base: '.8rem', sm: '0.9rem', md: '1rem' }}
            >
              <Text my={2}> Opening hours:</Text>
              <Text my={2}>
                Mon - Fri:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                8am - 8pm
              </Text>
              <Text my={2}>
                Saturday:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                9am - 7pm
              </Text>
              <Text my={2}>
                Sunday:{' '}
                <Box display={{ base: 'inline', md: 'none' }}>
                  <br />
                </Box>{' '}
                9am - 8pm
              </Text>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};
