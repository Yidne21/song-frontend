import { Text } from '../Blocks';
import { FileInput } from '../Blocks/input/input';
import { IInputFile } from './type';

export const InputFile = (props: IInputFile) => {
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
      <FileInput
        accept="audio/mpeg, audio/wav"
        background="white.0"
        borderRadius={2}
        id={props.name}
        m={0}
        name={props.name}
        onChange={(event: any) => {
          props.handleChange(event);
        }}
        p={4}
        type="file"
      />
    </>
  );
};
