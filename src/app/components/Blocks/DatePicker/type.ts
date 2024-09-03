import React, { ReactNode } from 'react';
import { 
    BorderProps,
    BorderRadiusProps,
    FontSizeProps,
    FontWeightProps,
    SpaceProps,
    LineHeightProps,
    FontFamilyProps,
    BoxShadowProps,
    FlexboxProps 
} from 'styled-system';

export interface DatePickerProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    FontSizeProps,
    FontWeightProps,
    SpaceProps,
    LineHeightProps,
    FontFamilyProps,
    BoxShadowProps,
    FlexboxProps {
        children: ReactNode,
        as:string
    }