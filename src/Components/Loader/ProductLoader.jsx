import React from 'react';
import { Center, Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const ProductLoader = () => {
  return (
    <Box border="1px solid gray" rounded="md" maxW="24rem">
      <Skeleton height="15rem" />
      <SkeletonText height="8rem" />
    </Box>
  );
};

export default ProductLoader;
