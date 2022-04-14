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

const Faq = ({ data }) => {
  return (
    <Container
      p={{ base: '4rem 1.5rem', md: '6rem 2rem' }}
      maxW="6xl"
      py={{ base: '4rem', md: '8rem' }}
    >
      <Heading
        pb={{ base: '1rem', md: '2rem' }}
        textAlign={'Start'}
        fontWeight={'500'}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple mx="auto" maxW="3xl">
        {data &&
          data.map((faq, index) => (
            <AccordionItem my="1rem" border="0">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontWeight={'500'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                        flex="1"
                        textAlign="left"
                        pr={'1rem'}
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
                    fontSize={{ base: 'xs', md: 'md' }}
                    fontWeight={'300'}
                    fontColor="black"
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
