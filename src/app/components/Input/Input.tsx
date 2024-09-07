/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { InputProps } from './type';
import { ErrorMessage } from 'formik';
import { Text } from '../Blocks/Text/Text';
import { FieldInput } from '../Blocks/FieldInput';

function InputField(props: InputProps) {
  return (
    <>
      <Text
        fontSize={1}
        fontWeight={3}
        lineHeight="18px"
        mt="10px"
        textAlign={'center'}
      >
        {props.label}
      </Text>

      <FieldInput
        background="white.0"
        borderRadius={2}
        id={props.name}
        name={props.name}
        padding={4}
        width="100%"
      >
        {props.children}
      </FieldInput>

      <Text color="red">
        <ErrorMessage name={props.name} />
      </Text>
    </>
  );
}

export default InputField;
