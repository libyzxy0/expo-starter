import React from 'react';
import { Text as DefaultText, StyleSheet, type TextProps } from "react-native";
import { useColors } from "@/hooks/useColors";
export type TextType = | "default"
  | "medium"
  | "secondary"
  | "bold"
  | "semibold"
  | "italic"
  | "link";

export type ThemedTextProps = TextProps & {
  type?: TextType;
};

type ColorKey =
  | "primary"
  | "text"
  | "textSecondary"
  | "background"
  | "border"
  | "card"
  | "input"
  | "danger"
  | "warning"
  | "success";

const colorMap: Record<TextType, ColorKey> = {
  default: "text",
  medium: "text",
  secondary: "textSecondary",
  bold: "text",
  semibold: "text",
  italic: "text",
  link: "primary"
};

export function Text({ style, type = "default", ...rest }: ThemedTextProps) {
  const colors = useColors();
  return (
    <DefaultText
      style={[
        {
          color: colors[colorMap[type]]
        },
        styles[type] ? styles[type] : null,
        style
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Nunito"
  },
  medium: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "NunitoMedium"
  },
  secondary: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Nunito"
  },
  bold: {
    fontSize: 26,
    fontFamily: "NunitoBold",
    lineHeight: 30
  },
  semibold: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: "NunitoSemiBold"
  },
  italic: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "NunitoItalic"
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    fontFamily: "Nunito"
  }
});
