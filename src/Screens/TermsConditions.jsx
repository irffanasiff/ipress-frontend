import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
export const TermsConditions = () => {
  return (
    <Container maxW={'8xl'} p={0}>
      <Heading
        p={{ base: '50px 15px' }}
        textAlign={'center'}
        color="#00509E"
        fontWeight={700}
        fontSize={['2.2rem', '2.7rem', '3rem', '3.6rem']}
      >
        Terms & Conditions
      </Heading>
      <VStack
        fontSize={{ base: 'sm', md: 'lg' }}
        border={'1px solid #00509E'}
        borderRadius={'8px'}
        w={{ base: '95%', md: '80%', lg: '60%' }}
        minW={{ base: '300px', md: '500px' }}
        p={'40px'}
        mx={'auto'}
        gap={{ base: '20px', md: '40px' }}
      >
        <Heading
          w={{ base: '90%', md: '70%' }}
          textAlign={'left'}
          color="#00509E"
          fontWeight={600}
          fontSize={['1.8rem', '2.3rem', '2.5rem']}
        >
          Ways to Connect
        </Heading>
        <Text w={{ base: '90%', md: '70%' }}>
          I’m a Customer Care section. I’m a great place to write a long text
          about your company and your services, and, most importantly, how to
          contact your store with queries. Writing a detailed Customer Care
          policy is a great way to build trust and reassure your customers that
          they can buy with confidence
        </Text>
      </VStack>
      <VStack
        fontSize={{ base: 'sm', md: 'lg' }}
        my={'50px'}
        border={'1px solid #00509E'}
        borderRadius={'8px'}
        w={{ base: '95%', md: '80%', lg: '60%' }}
        minW={{ base: '300px', md: '500px' }}
        p={'40px'}
        mx={'auto'}
        gap={{ base: '20px', md: '40px' }}
      >
        <Heading
          w={{ base: '90%', md: '70%' }}
          textAlign={'left'}
          color="#00509E"
          fontWeight={600}
          fontSize={['1.8rem', '2.3rem', '2.5rem']}
        >
          Privacy & Safety
        </Heading>
        <Box w={{ base: '90%', md: '70%' }}>
          <Text>
            I’m a Privacy & Safety policy section. I’m a great place to inform
            your customers about how you use, store, and protect their personal
            information. Add details such as how you use third-party banking to
            verify payment, the way you collect data or when will you contact
            users after their purchase was completed successfully.
          </Text>
          <Text mt={{ base: '15px', md: '30px' }}>
            Your user’s privacy is of the highest importance to your business,
            so take the time to write an accurate and detailed policy. Use
            straightforward language to gain their trust and make sure they keep
            coming back to your site!
          </Text>
        </Box>
      </VStack>
      <VStack
        fontSize={{ base: 'sm', md: 'lg' }}
        my={'50px'}
        border={'1px solid #00509E'}
        borderRadius={'8px'}
        w={{ base: '95%', md: '80%', lg: '60%' }}
        minW={{ base: '300px', md: '500px' }}
        p={'40px'}
        mx={'auto'}
        gap={{ base: '20px', md: '40px' }}
      >
        <Heading
          w={{ base: '90%', md: '70%' }}
          textAlign={'left'}
          color="#00509E"
          fontWeight={600}
          fontSize={['1.8rem', '2.3rem', '2.5rem']}
        >
          Wholesale Inquiries
        </Heading>
        <Box w={{ base: '90%', md: '70%' }}>
          <Text>
            I’m a wholesale inquiries section. I’m a great place to inform other
            retailers about how they can sell your stunning products. Use plain
            language and give as much information as possible in order to
            promote your business and take it to the next level!
          </Text>
          <Text mt={{ base: '15px', md: '30px' }}>
            I'm the second paragraph in your Wholesale Inquiries section. Click
            here to add your own text and edit me. It’s easy. Just click “Edit
            Text” or double click me to add details about your policy and make
            changes to the font. I’m a great place for you to tell a story and
            let your users know a little more about you.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
