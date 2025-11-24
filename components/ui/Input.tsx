import React from 'react';
import { TextInput, type TextInputProps } from "react-native";
import { useColors } from "@/hooks/useColors";

export function Input({ style, ...atIbaPa }: TextInputProps) {
  const colors = useColors();
  return (
    <TextInput
      placeholderTextColor={colors.textSecondary}
      cursorColor={colors.primary}
      style={[
        {
          color: colors.text,
          backgroundColor: colors.input,
          borderRadius: 6,
          paddingHorizontal: 10,
          borderColor: colors.border,
          borderWidth: 1
        },
        style
      ]}
      {...atIbaPa}
    />
  );
}
