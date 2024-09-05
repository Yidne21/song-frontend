import React from 'react';
import { Flex } from '../Blocks';
import CardSkeleton from './CardSkeleton';

function MainStatSkeleton() {
  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      gap="30px"
      justifyContent={'center'}
      p={6}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Flex>
  );
}

export default MainStatSkeleton;
