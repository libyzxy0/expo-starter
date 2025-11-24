import React from 'react';
import { View as DefaultView, type ViewProps } from 'react-native';
import { useColors } from "@/hooks/useColors";

export type ThemedViewProps = ViewProps & {
  bg?: boolean;
};

export function View({ style, bg, ...rest }: ThemedViewProps) {
  const colors = useColors();

  return <DefaultView style={[{ backgroundColor: bg ? colors.background : 'transparent' }, style]} {...rest} />;
}