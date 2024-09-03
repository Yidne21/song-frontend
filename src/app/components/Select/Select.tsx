import React from 'react';
import { SelectProps } from './type';
import { ErrorMessage } from 'formik';
import { Text } from '../Blocks/Text/Text';
import { Selector } from '../Blocks/Selectors';
function Select(props: SelectProps) {
  const { options } = props;

  return (
    <>
      <Text
        fontSize={1}
        fontWeight={3}
        lineHeight="18px"
        mt="10px"
        textAlign={'center'}
      >
        {props.lable}
      </Text>
      <Selector
        as="select"
        background="white.0"
        borderRadius={2}
        id={props.name}
        mb="10px"
        name={props.name}
        onChange={props.onChange}
        padding={4}
        type={props.type}
        width="108%"
      >
        {options.map(genre => (
          <option
            key={genre.value}
            selected={props.value === genre.value}
            value={genre.value}
          >
            {genre.label}
          </option>
        ))}
      </Selector>
      <ErrorMessage name={props.name} />
    </>
  );
}

export default Select;
