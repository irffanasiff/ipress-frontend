import {
  Box,
  HStack,
  Image,
  Text,
  useColorModeValue as mode,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const OrderInfo = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'custom-black'} onClick={onOpen}>
        More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item._id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={'flex-start'} alignSelf={'stretch'}>
              {item.orderItems.map(({ product }, key) => (
                <HStack
                  w={'full'}
                  p="1rem"
                  gap={[3, 4, 5, 6]}
                  justifyContent={'space-evenly'}
                  key={key}
                >
                  <VStack>
                    <Box width="100px" height="100px">
                      <Image
                        rounded="lg"
                        height="full"
                        fit="cover"
                        draggable="false"
                        loading="lazy"
                        src={product.design.image}
                      />
                    </Box>
                    <Text>
                      {product.fields[0].size.split('_')[0]} x{' '}
                      {product.fields[0].size.split('_')[1]}
                    </Text>
                  </VStack>
                  <VStack
                    alignItems={'flex-start'}
                    gap={1}
                    alignSelf={'flex-start'}
                  >
                    <Text
                      fontSize={['14px', '16px', '20px', '22px']}
                      fontWeight={'bold'}
                    >
                      {product.name}
                    </Text>

                    <HStack
                      minW={['150px', '200px']}
                      justifyContent="space-between"
                    >
                      <Text>Quantity: </Text>{' '}
                      <Text> {product.fields[0].quantity}</Text>{' '}
                    </HStack>
                    <HStack
                      minW={['150px', '200px']}
                      justifyContent="space-between"
                    >
                      <Text>product Total: </Text>{' '}
                      <Text fontWeight={'bold'}> ${product.price}</Text>{' '}
                    </HStack>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant={'custom-black'} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
