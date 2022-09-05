import { Box, Container, Divider, Heading, Text } from '@chakra-ui/react';

export const AboutUs = () => {
  return (
    <Container maxW={'8xl'} p={0}>
      <Heading
        p={{ base: '50px 15px', md: '70px 15px' }}
        textAlign={'center'}
        color="#00509E"
        fontWeight={500}
        fontSize={['2.2rem', '2.7rem', '3rem', '3.6rem']}
      >
        About Us
      </Heading>
      <Box w={'90%'} textAlign={'center'} mx={'auto'} lineHeight={'180%'}>
        <Text>
          IBIENE PRESS LTD popularly known as iPress has been in printing
          business in Port Harcourt- Rivers State close to a decade. From small
          print jobs to massive branding campaigns, we meet all those
          last-minute deadlines.
          <br /> At iPRESS House our official motto is “EXPRESS YOUR SELF ” –
          This is because We’re excellent at bringing your ideas into
          captivating print that stands out.
        </Text>
        <Text>
          Our print center has two main branches in Port Harcourt– one at Nkpolu
          Rumuigbo and another at Alakahia. Both offices provide top-quality
          printing services to businesses, artists, freelancers,
          sub-contractors, photographers, students and individuals, and all our
          staff are experienced professionals who are passionate about printing.
          Our print services include Environmentally friendly printers that
          offers Digital Printing, Offset Printing, Large Format Printing,
          Embroidery, Vinyl Printing, UV Printing for outdoor and indoor.
        </Text>
        <Text my={'40px'}>
          Our extensive list of print services is available at both our
          branches, and you’ll get the same outstanding quality and customer
          services.
        </Text>
      </Box>
      <Box w={'100%'} h={'400px'} bg={'gray.300'} mb={'30px'}></Box>
      <Box
        w={'90%'}
        textAlign={'center'}
        mx={'auto'}
        lineHeight={'180%'}
        my={'70px'}
      >
        <Heading
          textAlign={'center'}
          color="#00509E"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem']}
          my={'40px'}
        >
          Our Story
          <Divider
            w={'50px'}
            border={'2px solid black'}
            mx={'auto'}
            borderColor={'black'}
          />
        </Heading>
        <Text>
          iPress has been servicing the printing requirements for businesses in
          Rivers State, Nationwide and across the globe since 2014. This has
          enabled us to acquire some of the best printing and quality practises.
          Year in Year out, the company continues to grow at a fast pace, our
          portfolio of clients continues to grow across a range of vertical
          markets both organically through referrals and a great on-line
          presence.
        </Text>
      </Box>
      <Box
        w={'90%'}
        textAlign={'center'}
        mx={'auto'}
        lineHeight={'180%'}
        my={'70px'}
      >
        <Heading
          textAlign={'center'}
          color="#00509E"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem']}
          my={'40px'}
        >
          Mission Statement
          <Divider
            w={'50px'}
            border={'2px solid black'}
            mx={'auto'}
            borderColor={'black'}
          />
        </Heading>
        <Text>
          To stimulate and set new standards through the spectrum of human
          creativity based on self-Expression at the highest level of quality.
        </Text>
      </Box>
      <Box
        w={'90%'}
        textAlign={'center'}
        mx={'auto'}
        lineHeight={'180%'}
        my={'70px'}
      >
        <Heading
          textAlign={'center'}
          color="#00509E"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem']}
          my={'40px'}
        >
          Vision
          <Divider
            w={'50px'}
            border={'2px solid black'}
            mx={'auto'}
            borderColor={'black'}
          />
        </Heading>
        <Text>
          To be a viable commercial printing company in Nigeria known for
          quality, durability and flexibility using integrated technologies and
          collaborative solutions.
        </Text>
      </Box>
      <Box
        w={'90%'}
        textAlign={'center'}
        mx={'auto'}
        lineHeight={'180%'}
        my={'70px'}
      >
        <Heading
          textAlign={'center'}
          color="#00509E"
          fontWeight={500}
          fontSize={['2rem', '2.5rem', '2.8rem']}
          my={'40px'}
        >
          Core Values
          <Divider
            w={'50px'}
            border={'2px solid black'}
            mx={'auto'}
            borderColor={'black'}
          />
        </Heading>
        <Text>Transparency, Honesty And Creativity</Text>
      </Box>
      <Box w={'100%'} h={'80vh'} bg={'gray.300'} mb={'100px'}></Box>
    </Container>
  );
};
