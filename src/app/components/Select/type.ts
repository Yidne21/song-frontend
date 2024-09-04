import { GenersType } from '../Form/types';

export type SelectProps = {
  handleChange?: () => void;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange?: (e: any) => void;
  options: GenersType[];
};