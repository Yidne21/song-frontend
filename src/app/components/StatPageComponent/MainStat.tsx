import React from 'react';
import { Flex } from '../Blocks';
import { MainStatProps } from './types';
import Card from '../Card/Card';

function MainStat(props: MainStatProps) {
  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      gap="30px"
      justifyContent={'center'}
      p={6}
    >
      {props.stat.map((item, index) => (
        <Card key={index} stat={item.stat} title={item.title} />
      ))}
    </Flex>
  );
}

export default MainStat;
