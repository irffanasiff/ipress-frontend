import {
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
import { GrYoutube } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const CustomerInquiries = () => {
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
      <VStack p={{ base: '40px 15px', md: '70px 15px' }} bg={'#8AADCF'}>
        <Heading
          textAlign={'center'}
          py={{ base: '20px' }}
          color="#00509E"
          fontWeight={500}
          fontSize={['2rem', '2.7rem', '3rem', '3.6rem']}
        >
          Customer Inquiries
        </Heading>
        <Text
          fontSize={{ base: 'xs', md: 'md' }}
          w={'55%'}
          minW={'270px'}
          textAlign={'center'}
        >
          Need something special? Fill the form below and let us know the kind
          of project you have in mind and we will get back to you
        </Text>
      </VStack>
      <VStack id={'contact'} py={'65px'} gap={10} bg={'#EDEBEB'}>
        <Heading
          textAlign={'left'}
          color="#00509E"
          fontWeight={500}
          fontSize={['1.5rem', '2rem', '2.5rem']}
        >
          Fill the form below
        </Heading>
        <HStack
          fontSize={{ base: 'md', md: 'xl' }}
          w={{ base: '100%', sm: '90%', md: '75%' }}
          justifyContent={'space-evenly'}
          minW={'270px'}
          textAlign={'center'}
        >
          <VStack>
            <Text color={'#00509E'} fontWeight={600}>
              Phone
            </Text>
            <Text fontSize={{ base: 'xs', md: 'lg' }}>0813-894-1946</Text>
          </VStack>
          <VStack>
            <Text color={'#00509E'} fontWeight={600}>
              Email
            </Text>
            <Link
              to="#"
              onClick={e => {
                window.location.href = 'mailto:ipressltd@yahoo.com';
                e.preventDefault();
              }}
            >
              <Text
                as="span"
                _hover={{ textDecor: 'underline' }}
                fontSize={{ base: 'xs', sm: 'sm', md: 'lg' }}
              >
                ipressltd@yahoo.com
              </Text>
            </Link>
          </VStack>
          <VStack alignItems={'center'}>
            <Text color={'#00509E'} fontWeight={600}>
              Social Media
            </Text>
            <HStack
              fontSize={{ base: '0.9rem', sm: 'md', md: 'xl' }}
              spacing={2}
            >
              <Icon as={FaFacebookF} />
              <Icon as={RiLinkedinFill} />
              <Icon as={RiTwitterFill} />
              <Icon as={GrYoutube} />
            </HStack>
          </VStack>
        </HStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex my={'30px'} mx={'auto'} p={'0 20px'} wrap={'wrap'} w={'80%'}>
            <FormControl
              isInvalid={errors.name}
              mx={{ base: 0, md: 3 }}
              isRequired
              mb={{ base: '1rem', md: '1.5rem' }}
              w={{
                base: 'full',
                md: '25%',
              }}
              flex={{ md: 1 }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                First Name
              </FormLabel>
              <Input
                outline={'1px solid black'}
                fontSize={{ base: 'sm', md: 'md' }}
                px="0.5rem"
                rounded={'none'}
                _hover={{ outline: '2px solid black' }}
                _focus={{ outline: '2px solid #00509E' }}
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
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
              flex={{ md: 1 }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                Last Name
              </FormLabel>
              <Input
                outline={'1px solid black'}
                fontSize={{ base: 'sm', md: 'md' }}
                px="0.5rem"
                rounded={'none'}
                _hover={{ outline: '2px solid black' }}
                _focus={{ outline: '2px solid #00509E' }}
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
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
              flex={{ md: 1 }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
              <Input
                outline={'1px solid black'}
                fontSize={{ base: 'sm', md: 'md' }}
                px="0.5rem"
                rounded={'none'}
                _hover={{ outline: '2px solid black' }}
                _focus={{ outline: '2px solid #00509E' }}
                h={{ base: '1.7rem', sm: '2rem', md: '2.4rem' }}
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
                md: '100%',
              }}
            >
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Message</FormLabel>
              <Textarea
                outline={'1px solid black'}
                fontSize={{ base: 'sm', md: 'md' }}
                px="0.5rem"
                rounded={'none'}
                h={{ base: '1.7rem', sm: '2rem', md: '170px' }}
                _hover={{ outline: '2px solid black' }}
                _focus={{ outline: '2px solid #00509E' }}
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
              p={'20px'}
              justifySelf={'flex-end'}
              w={'250px'}
              rounded={'none'}
              bg={'#00509E'}
              color={'white'}
              fontWeight={300}
              border={'1px solid #00509E'}
              _hover={{
                color: '#00509E',
                bg: 'white',
              }}
            >
              Send
            </Button>
          </Flex>
        </form>
      </VStack>
    </Container>
  );
};
