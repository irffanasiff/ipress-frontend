import {
  Box,
  HStack,
  Image,
  Text,
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

export const OrderInfo = ({ item, products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let productInfo = products || item.orderItems;
  return (
    <>
      <Text
        onClick={onOpen}
        color={'red'}
        textDecor={'underline'}
        cursor={'pointer'}
      >
        {' '}
        More Info{' '}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item._id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={'flex-start'} alignSelf={'stretch'}>
              {productInfo.map((item, key) => {
                let product = item.product || item;
                return (
                  <HStack
                    w={'full'}
                    p="1rem"
                    gap={[3, 4, 5, 6]}
                    justifyContent={'space-evenly'}
                    key={key}
                  >
                    <VStack>
                      <Box
                        width="100px"
                        height="100px"
                        border={'1px solid gray'}
                      >
                        <Image
                          rounded="lg"
                          height="full"
                          fit="cover"
                          draggable="false"
                          loading="lazy"
                          src={product.design.image}
                        />
                      </Box>
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
                        <Text>Quantity: </Text> <Text> 100</Text>{' '}
                      </HStack>
                      <HStack
                        minW={['150px', '200px']}
                        justifyContent="space-between"
                      >
                        <Text>Product Price: </Text>{' '}
                        <Text fontWeight={'bold'}> ${product.price}</Text>{' '}
                      </HStack>
                    </VStack>
                  </HStack>
                );
              })}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={'ipress-black'}
              mr={3}
              onClick={onClose}
              minW={'150px'}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
