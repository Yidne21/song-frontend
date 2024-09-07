export type InputProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  onChange?: any;
  children?: any;
};

export interface IInputFile {
  name: string;
  handleChange: any;
  lable: string;
}
