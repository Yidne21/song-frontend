import React from 'react';
import { Flex } from '../Blocks';
import { Skeleton } from '@mui/material';

function SongCardSkeleton() {
  return (
    <Flex
      alignItems="center"
      backgroundColor="white"
      border="1px solid #e5e5e5"
      borderRadius={12}
      flexDirection="row"
      gap={3}
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        gap={2}
        justifyContent="space-between"
        p={4}
      >
        <Skeleton height={28} variant="text" width={150} />
        <Skeleton height={20} variant="text" width={100} />
        <Skeleton height={20} variant="text" width={100} />
        <Skeleton height={20} variant="text" width={80} />
      </Flex>

      <Flex
        alignItems="center"
        display="flex"
        gap={2}
        justifyContent="center"
        padding={5}
      >
        <Skeleton height={24} variant="circular" width={24} />
        <Skeleton height={24} variant="circular" width={24} />
        <Skeleton height={24} variant="circular" width={24} />
      </Flex>
    </Flex>
  );
}

export default SongCardSkeleton;
