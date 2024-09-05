import React from 'react';
import { Flex } from 'app/components/Blocks';
import { Skeleton } from '@mui/material';

function ArtistStatSkeleton() {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      {/* Simulate the "Artists" header */}
      <Skeleton
        height={40}
        style={{ marginBottom: 16, textAlign: 'center' }}
        variant="text"
        width={120}
      />

      {/* Simulating the artist items */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Flex
          alignItems="center"
          backgroundColor="white"
          border="1px solid #e5e5e5"
          borderRadius="12px"
          flexDirection="row"
          gap={4}
          justifyContent="space-between"
          key={index}
          mb={2}
          padding="20px"
          width="80%"
        >
          {/* Artist name skeleton */}
          <Skeleton height={28} variant="text" width={150} />

          {/* Simulating the Songs and Albums skeleton */}
          <Flex alignItems="center" gap={4}>
            <Flex alignItems="center" gap={1}>
              <Skeleton height={20} variant="circular" width={20} />
              <Skeleton height={24} variant="text" width={100} />
            </Flex>

            <Flex alignItems="center" gap={1}>
              <Skeleton height={20} variant="circular" width={20} />
              <Skeleton height={24} variant="text" width={100} />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default ArtistStatSkeleton;
