import React from 'react';
import {
  BorderProps,
  BorderColorProps,
  BorderRadiusProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  LineHeightProps,
  FontFamilyProps,
  BoxShadowProps,
  FlexBasisProps,
  FontStyleProps,
  FlexProps,
  BackgroundProps,
} from 'styled-system';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    FontStyleProps,
    SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    FlexProps,
    FlexBasisProps,
    BackgroundProps,
    BorderColorProps,
    BoxShadowProps {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  OnIconClick?: () => void;
  icon_height?: string;
  icon_width?: string;
  icon_top?: string;
  icon_right?: string;
  iconOpacity?: string;
  haveLeftLine?: boolean;
}

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    SpaceProps,
    FontFamilyProps,
    LineHeightProps,
    FontSizeProps,
    FontWeightProps,
    BackgroundProps,
    BoxShadowProps {}
export interface InputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    FontStyleProps,
    SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    FlexProps,
    FlexBasisProps,
    BackgroundProps,
    BorderColorProps,
    BoxShadowProps {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  file_height?: string;
  icon_height?: string;
  icon_width?: string;
  icon_top?: string;
  icon_right?: string;
}
export interface SelectProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    SpaceProps,
    FontFamilyProps,
    LineHeightProps,
    FontSizeProps,
    FontWeightProps,
    BackgroundProps,
    BorderColorProps,
    BoxShadowProps {
  // childern:HTMLSelectElement;
}
