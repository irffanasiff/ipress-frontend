import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Container,
  Text,
  Box,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
const data = [
  {
    question: 'How long does it take to receive my order?',
    answer: 'NIL',
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Yes Sure',
  },
  {
    question: 'Can I contact you to edit my design?',
    answer: 'Yeah sure.',
  },
  {
    question: 'How long does shipping & delivery takes place?',
    answer: 'Depends on your shipping address.',
  },
];
const Faq = () => {
  return (
    <Container p={{ base: '4rem 1.5rem', md: '6rem 2rem' }} maxW="6xl">
      <Heading
        pb={{ base: '1rem', md: '2rem' }}
        textAlign={'Start'}
        fontWeight={'500'}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        FAQs(Frequently Asked Questions)
      </Heading>
      <Text color={'main.400'} fontWeight={600} my={'2rem'}>
        General
      </Text>
      <Accordion allowMultiple maxW="3xl">
        {data &&
          data.map((faq, index) => (
            <AccordionItem
              border="0"
              key={index}
              borderBottom={'1px solid #00509E'}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontWeight={'500'}
                        fontSize={{ base: 'sm', md: 'lg', lg: '1.3rem' }}
                        flex="1"
                        textAlign="left"
                        pr={'1rem'}
                        py="1.2rem"
                      >
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    fontSize={{ base: 'xs', md: 'md', lg: '1.2rem' }}
                    fontWeight={'300'}
                    color="black"
                    pb={4}
                  >
                    {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
      </Accordion>
    </Container>
  );
};

export default Faq;
