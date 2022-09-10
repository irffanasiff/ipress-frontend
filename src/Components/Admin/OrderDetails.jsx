import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  ModalBody,
  ModalFooter,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editOrders } from '../../Actions/userAction';
// SET PAID AND DELIVERED
export const OrderDetails = ({ order, user, products, onClose }) => {
  const [paid, setPaid] = useState('initial');
  const [delivered, setDelivered] = useState('initial');
  const renderOrderDetails = order => (
    <>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Payment:{' '}
        </Text>
        <Box>
          <Checkbox
            defaultChecked={order.isPaid}
            onChange={e => setPaid(e.target.checked)}
          >
            <Text fontSize={['13px', '15px', '18px', '18px', '20px']}>
              {order.isPaid || paid === true ? 'Paid' : 'Not Paid'}
            </Text>
          </Checkbox>
        </Box>
      </Box>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Items Price:{' '}
        </Text>
        <Text>{order.itemsPrice}</Text>
      </Box>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Tax:{' '}
        </Text>
        <Text>{order.taxPrice}</Text>
      </Box>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Shipping:{' '}
        </Text>
        <Text>{order.shippingPrice}</Text>
      </Box>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Total Price:{' '}
        </Text>
        <Text>{order.totalPrice}</Text>
      </Box>
      <Box>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Delivered:{' '}
        </Text>
        <Box>
          <Checkbox
            defaultChecked={order.isDelivered}
            onChange={e => setDelivered(e.target.checked)}
          >
            <Text fontSize={['13px', '15px', '18px', '18px', '20px']}>
              {order.isDelivered || delivered === true
                ? 'Delivered'
                : 'In transit'}
            </Text>
          </Checkbox>
        </Box>
      </Box>
      <GridItem colSpan={3}>
        <Text
          as="span"
          color="#00509E"
          fontWeight={600}
          mr={3}
          fontSize={['12px', '14px', '16px', '16px', '18px']}
        >
          Address:{' '}
        </Text>
        <Text>
          {Object.keys(order.shippingAddress).map(
            key => `${order.shippingAddress[key]},`
          )}
        </Text>
      </GridItem>
    </>
  );
  const dispatch = useDispatch();
  return (
    <>
      <ModalBody p={{ base: 2, md: 4 }}>
        <Container w={'100%'} m={0} maxW={'full'}>
          <Grid
            w={'100%'}
            templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
            justifyContent={'space-between'}
            fontSize={['13px', '15px', '18px', '18px', '20px']}
            color={'gray.800'}
            gap={4}
          >
            <Box>
              <Text
                as="span"
                color="#00509E"
                fontWeight={600}
                mr={3}
                fontSize={['12px', '14px', '16px', '16px', '18px']}
              >
                User:{' '}
              </Text>
              <Text>{user.name}</Text>
            </Box>
            <Box>
              <Text
                as="span"
                color="#00509E"
                fontWeight={600}
                mr={3}
                fontSize={['12px', '14px', '16px', '16px', '18px']}
              >
                Email:{' '}
              </Text>
              <Text>{user.email}</Text>
            </Box>
            {order ? renderOrderDetails(order) : ''}
          </Grid>
          <VStack w={'100%'} my={6} gap={'20px'}>
            {products.map((product, index) => (
              <Stack
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                w={'100%'}
                direction={{ base: 'column', md: 'row' }}
                bg={'white'}
                padding={4}
                boxShadow={'xl'}
              >
                <Flex flex={1} bg="blue.200" maxH={'300px'}>
                  <Image
                    objectFit="cover"
                    maxH={'300px'}
                    boxSize="100%"
                    src={product.design.image}
                  />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {product.name}
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                    ${product.price}
                  </Text>
                  <Text
                    textAlign={'center'}
                    color="#00509E"
                    px={3}
                    fontWeight={600}
                    textTransform={'uppercase'}
                  >
                    Product Information
                  </Text>
                  <SimpleGrid mt={6} columns={2}>
                    {Object.keys(product.fields).map((key, index) => (
                      <>
                        <Text key={index} fontWeight={600}>
                          {key}:
                        </Text>
                        <Text as="span" mx={3} key={product.fields[key]}>
                          {product.fields[key]}
                        </Text>
                      </>
                    ))}
                  </SimpleGrid>
                  <Stack
                    width={'100%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Text fontWeight={600}>
                      Created At: <br />
                      <Text fontWeight={500} as="span">
                        {product.createdAt.split('T')[0]}
                      </Text>{' '}
                    </Text>
                    <Text fontWeight={600} textAlign={'center'}>
                      Ordered: <br />
                      <Text
                        fontWeight={500}
                        as="span"
                        color={product.isOrdered ? 'Green' : 'Red'}
                      >
                        {product.isOrdered ? 'Yes' : 'No'}
                      </Text>{' '}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </VStack>
        </Container>
      </ModalBody>
      <ModalFooter mx={'auto'} mb={4}>
        <Button
          colorScheme="red"
          rounded={'none'}
          mr={3}
          onClick={onClose}
          w={{ base: '80px', md: '150px' }}
        >
          Close
        </Button>
        {order ? (
          <Button
            type={'submit'}
            colorScheme="blue"
            rounded={'none'}
            w={{ base: '80px', md: '150px' }}
            onClick={() => {
              let update;
              if (paid !== 'initial' && paid !== order.isPaid) {
                update = { isPaid: paid };
              }
              if (delivered !== 'initial' && delivered !== order.isDelivered) {
                update = { ...update, isDelivered: delivered };
              }
              if (update) dispatch(editOrders({ update, id: order._id }));
              onClose();
            }}
          >
            Save
          </Button>
        ) : (
          ''
        )}
      </ModalFooter>
    </>
  );
};
