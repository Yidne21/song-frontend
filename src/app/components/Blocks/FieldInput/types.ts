import React from 'react';
import { 
    SpaceProps,
    BordersProps,
    BorderRadiusProps,
    FontSizeProps,
    FontFamilyProps,
    BoxShadowProps,
    FontWeightProps,
    LineHeightProps,
    FlexboxProps,
    BackgroundProps,
 } from 'styled-system';

export interface FieldInputProp
    extends React.InputHTMLAttributes<HTMLInputElement>,
    SpaceProps ,
    BordersProps,
    FontSizeProps,
    BorderRadiusProps,
    FontFamilyProps,
    BoxShadowProps,
    FontWeightProps,
    FlexboxProps,
    LineHeightProps,
    BackgroundProps {
        children:React.ReactNode,
        as:string
    }