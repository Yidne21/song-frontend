import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Flex } from '../Blocks';
import { Button } from '../Blocks/Button';
import { InputField } from '../Input';
import { FormComponentProps } from './types';
import Select from '../Select/Select';
import { genres } from './types';

function FormComponent(props: FormComponentProps) {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} width={'100%'}>
      <Formik
        initialValues={props.initialValues}
        onSubmit={values => {
          props.handleSubmit(values);
        }}
        validationSchema={props.validationSchema}
      >
        {({ handleSubmit }) => {
          return (
            <Form id="song">
              <Flex
                alignItems="flex-start"
                bg={'whitesmoke'}
                borderRadius={12}
                flexDirection={'column'}
                gap="10px"
                justifyContent={'center'}
                my={6}
                px={8}
                py={4}
                width={'100%'}
              >
                <InputField label="Title" name="title" type="text" />
                <InputField label="Artist" name="artist" type="text" />
                <InputField label="Album" name="album" type="text" />
                <Field
                  component={Select}
                  label="Genre"
                  name="genre"
                  options={genres}
                />

                <Button
                  background={'blue'}
                  borderRadius={2}
                  color="white.0"
                  disabled={props.isLoading}
                  fontSize={1}
                  fontWeight={3}
                  lineHeight="18px"
                  mt={5}
                  onClick={handleSubmit}
                  padding={'13px 30px'}
                  textAlign={'center'}
                  type="submit"
                  width={'109%'}
                >
                  {props.isEdit ? 'Update' : 'Add'}
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
}

export default FormComponent;
