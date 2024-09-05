import React from 'react';
import { Flex } from '../Blocks';
import SongCardSkeleton from './SongCardSkeleton';

function SongListSkeleton() {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      mt={5}
      width="100%"
    >
      <SongCardSkeleton />
      <SongCardSkeleton />
      <SongCardSkeleton />
      <SongCardSkeleton />
      <SongCardSkeleton />
    </Flex>
  );
}

export default SongListSkeleton;
