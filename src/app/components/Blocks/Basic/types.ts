import {
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  PositionProps,
  ShadowProps,
  ResponsiveValue
} from 'styled-system';

// Box Props
export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    FlexboxProps,
    ShadowProps {}

// Flex Props
export interface FlexProps extends FlexboxProps {
  gap?:ResponsiveValue<number | string>
}

