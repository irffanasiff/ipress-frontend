import { Box, HStack, Image, ModalBody, Text, VStack } from '@chakra-ui/react';
import { OrderInfo } from '../UserProfile/OrderInfo';

export const UserDetails = ({ orders, products }) => {
  return (
    <ModalBody>
      {orders.map((item, key) => {
        const { address, city, zipCode, country } = item.shippingAddress;
        return (
          <HStack
            w={'full'}
            p={{ base: '1.5rem 0', xl: '1.5rem' }}
            gap={[8, 4, 4, 8]}
            flexDirection={{
              base: 'column',
              sm: 'row',
              md: 'column',
              lg: 'row',
            }}
            justifyContent={'flex-start'}
            key={key}
            fontSize={[{ base: '14px', md: '16px' }]}
            textAlign={'right'}
            borderBottom={orders.length === key + 1 ? 'none' : '1px solid gray'}
          >
            <VStack>
              <Box width="135px" height="150px" border={'1px solid gray'}>
                <Image
                  rounded="lg"
                  height="full"
                  fit="cover"
                  draggable="false"
                  loading="lazy"
                  src={products[0].design.image}
                />
              </Box>
              <Text textAlign={'center'} fontWeight={600}>
                Payment: {item.isPaid ? 'COMPLETED' : 'PENDING'}
              </Text>
            </VStack>
            <VStack
              alignItems={'flex-start'}
              gap={1}
              alignSelf={['center', 'flex-start', 'center', 'flex-start']}
              w={{ xl: '350px' }}
              fontSize={['13px', '15px', '15px', '15px', '16px']}
            >
              <HStack
                w={'full'}
                justifyContent="space-between"
                fontSize={['14px', '16px', '18px']}
                fontWeight={600}
              >
                <Text>Id: </Text>{' '}
                <Text fontSize={['13px', '15px', '17px']}> {item._id}</Text>{' '}
              </HStack>
              <HStack w={'full'} justifyContent="space-between">
                <Text>Address: </Text>{' '}
                <Text> {`${address}, ${city}(${zipCode}), ${country}`}</Text>{' '}
              </HStack>
              <HStack w={'full'} justifyContent="space-between">
                <Text>Delivered: </Text>{' '}
                <Text> {item.isDelivered ? 'DELIVERED' : 'IN TRANSIT'}</Text>{' '}
              </HStack>
              <HStack w={'full'} justifyContent="space-between">
                <Text>Order Total: </Text>{' '}
                <Text fontWeight={'bold'}> ${item.totalPrice}</Text>{' '}
              </HStack>
              <OrderInfo item={item} products={products} />
            </VStack>
          </HStack>
        );
      })}
    </ModalBody>
  );
};
