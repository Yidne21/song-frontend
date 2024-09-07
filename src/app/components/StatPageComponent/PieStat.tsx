import React from 'react';
import { Flex, Text } from '../Blocks';
import { PieStatProps } from './types';
import CustomPie from '../Chart/PieChart';

function PieStat(props: PieStatProps) {
  return (
    <Flex
      border="1px solid whitesmoke"
      borderRadius={4}
      flexDirection={'column'}
      gap={'5px'}
      justifyContent={'center'}
      p={4}
      px={26}
    >
      <Text color="black" fontSize="20px" p={'6px'} textAlign="center">
        {props.title}
      </Text>
      <CustomPie data={props.stat} />
    </Flex>
  );
}

export default PieStat;
