import { Formik, Form } from 'formik';
import { Flex } from '../Blocks';
import { Button } from '../Blocks/Button';
import { InputField } from '../Input';
import { FormComponentProps } from './types';
import { Select } from '../Select';
import { genres } from './types';

function FormComponent(props: FormComponentProps) {
  return (
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
              backgroundColor={'#D1CECE'}
              borderRadius={12}
              flexDirection={'column'}
              gap="10px"
              my={6}
              padding={'30px 88px 30px'}
              width={'100%'}
            >
              <InputField lable="Title" name="title" type="text" />
              <InputField lable="Artist" name="artist" type="text" />
              <InputField lable="Album" name="album" type="text" />
              <Select
                lable="Genre"
                name="genre"
                options={genres}
                type="select"
                value={'pppp'}
              />
              <Button
                background={'blue'}
                borderRadius={2}
                color="white.0"
                disabled={props.isLoading && !props.isLoaded}
                fontSize={1}
                fontWeight={3}
                lineHeight="18px"
                mt={5}
                onClick={() => {
                  handleSubmit();
                }}
                padding={'13px 30px'}
                textAlign={'center'}
                type="button"
                width={'109%'}
              >
                {props.isEdit ? 'Update' : 'Add'}
              </Button>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComponent;
