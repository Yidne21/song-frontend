import React from 'react';
import { InputProps } from './type';
import { ErrorMessage } from 'formik';
import { Text } from '../Blocks/Text/Text';
import { FileInput, Input, TextAreaInput } from '../Blocks/input/input';
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
      {props.type === 'textarea' ? (
        <FieldInput name={props.name} onChange={props.onChange}>
          {(props: any) => {
            return (
              <>
                <TextAreaInput
                  {...props.field}
                  as="textarea"
                  background="white.0"
                  borderRadius={2}
                  color="black.0"
                  height="93px"
                  id={props.name}
                  padding={4}
                  type="text"
                  width="100%"
                />
              </>
            );
          }}
        </FieldInput>
      ) : props.type == 'date' ? (
        <FieldInput name={props.name}>
          {(props: any) => {
            return (
              <>
                <Input
                  {...props.field}
                  background="white.0"
                  borderRadius={2}
                  color="black.0"
                  id={props.name}
                  onChange={event => {
                    props.form.setFieldValue('releaseDate', event.target.value);
                  }}
                  padding={4}
                  type="date"
                  width="100%"
                />
              </>
            );
          }}
        </FieldInput>
      ) : props.type == 'file' ? (
        <FieldInput name={props.name}>
          {(props: any) => {
            return (
              <FileInput
                {...props.field}
                background="white.0"
                borderRadius={2}
                id={props.name}
                m={0}
                name={props.name}
                onChange={(event: any) => {
                  props.onChange(event);
                }}
                p={4}
                type="file"
              />
            );
          }}
        </FieldInput>
      ) : (
        <FieldInput
          background="white.0"
          borderRadius={2}
          id={props.name}
          name={props.name}
          padding={4}
          width="100%"
        />
      )}
      <Text color="red">
        <ErrorMessage name={props.name} />
      </Text>
    </>
  );
}

export default InputField;
