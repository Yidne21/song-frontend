export type InputProps = {
  name: string;
  type: string;
  lable: string;
  value?: string;
  onChange?: any;
};

export interface IInputFile {
  name: string;
  handleChange: any;
  lable: string;
}
