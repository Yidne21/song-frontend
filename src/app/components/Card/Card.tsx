import React from 'react';
import { Flex } from '../Blocks';
import { CardProps } from './types';
import { Text } from '../Blocks/Text/Text';

function Card(props: CardProps) {
  return (
    <Flex
      alignItems="center"
      backgroundColor="white"
      border={'1px solid #e5e5e5'}
      borderRadius="12px"
      flexDirection="column"
      gap="14px"
      hoverBgColor="blue"
      hoverColor="white"
      justifyContent="center"
      mt={6}
      padding="30px 88px 40px"
    >
      <Text color="black" fontSize="24px" textAlign="center">
        {props.title}
      </Text>
      <Text
        color="black"
        fontSize="16px"
        fontWeight="normal"
        textAlign="center"
      >
        {props.stat}
      </Text>
    </Flex>
  );
}

export default Card;
