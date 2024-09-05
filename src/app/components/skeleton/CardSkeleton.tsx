import React from 'react';
import { Flex } from '../Blocks';
import { Skeleton } from '@mui/material';

function CardSkeleton() {
  return (
    <Flex
      alignItems="center"
      backgroundColor="white"
      border="1px solid #e5e5e5"
      borderRadius="12px"
      flexDirection="column"
      gap="14px"
      justifyContent="center"
      mt={6}
      padding="30px 88px 40px"
    >
      <Skeleton height={32} variant="text" width="100px" />
      <Skeleton height={24} variant="text" width="40px" />
    </Flex>
  );
}

export default CardSkeleton;
