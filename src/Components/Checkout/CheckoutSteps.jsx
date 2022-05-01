import { Link } from 'react-router-dom';
import {
  HStack,
  Flex,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';

export const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Flex justifyContent={'center'} my={'10px'}>
      <HStack spacing={10}>
        <Link to={step1 ? '/login?redirect=shipping' : '#'}>
          <Text
            color={step1 ? mode('gray.700', 'white') : 'gray.500'}
            fontWeight={step1 ? 600 : 400}
            cursor={step1 ? 'pointer' : 'default'}
          >
            Register
          </Text>
        </Link>
        <Link to={step2 ? '/shipping' : '#'}>
          <Text
            color={step2 ? mode('gray.600', 'white') : 'gray.500'}
            fontWeight={step2 ? 600 : 400}
            cursor={step2 ? 'pointer' : 'default'}
          >
            Shipping
          </Text>
        </Link>
        <Link to={step3 ? '/payment' : '#'}>
          <Text
            color={step3 ? mode('gray.600', 'white') : 'gray.500'}
            fontWeight={step3 ? 600 : 400}
            cursor={step3 ? 'pointer' : 'default'}
          >
            Payment
          </Text>
        </Link>
        <Link to={step4 ? '/order' : '#'}>
          <Text
            color={step4 ? mode('gray.600', 'white') : 'gray.500'}
            fontWeight={step4 ? 600 : 400}
            cursor={step3 ? 'pointer' : 'default'}
          >
            Place Order
          </Text>
        </Link>
      </HStack>
    </Flex>
  );
};
