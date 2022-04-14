import { Button, Center, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Variants = () => {
  return (
    <Center p="2rem" flexDirection="column" h="100vh">
      <Input
        rounded="0px"
        borderBottom={'1px solid gray'}
        _placeholder={{
          color: 'gray',
        }}
        variant="custom"
        placeholder="Form Input"
      />
      <Button
        variant={'custom-black'}
        _hover={{ color: 'red', borderColor: 'red' }}
      >
        Button
      </Button>
      <Heading color="ipress.200">This is Heading</Heading>
      <Text color="ipress.300"> This is normal font</Text>
    </Center>
  );
};

export {Variants};
