import { GenersType } from '../AddNewSong/types';

export type SelectProps={
    handleChange?: () => void;    name:string,
    type:string,
    lable:string,
    options:GenersType[],
    value: string | unknown,
    onChange?: (e: any) => void
};