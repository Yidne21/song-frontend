import React from 'react';
import { ErrorMessage, FieldProps } from 'formik';
import { Text } from '../Blocks';
import { Selector } from '../Blocks/Selectors';

interface SelectProps extends FieldProps {
  label: string;
  options: { label: string; value: string }[];
}

function Select({ field, label, options }: SelectProps) {
  const { name, value, onChange, onBlur } = field;

  return (
    <>
      <Text
        fontFamily={'poppins'}
        fontSize={'14px'}
        fontWeight={2}
        lineHeight="18px"
        textAlign={'center'}
      >
        {label}
      </Text>
      <Selector
        as="select"
        background={'white.0'}
        borderRadius={2}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        padding={4}
        value={value}
        width={'109%'}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Selector>
      <Text
        color="red"
        fontFamily={'Roboto'}
        fontSize={'12px'}
        fontWeight={3}
        paddingTop={'5px'}
      >
        <ErrorMessage name={name} />
      </Text>
    </>
  );
}

export default Select;
