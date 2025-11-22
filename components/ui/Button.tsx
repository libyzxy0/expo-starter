import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { useColors } from "@/hooks/useColors";
import { Text } from '@/components/ui/Text'

export type ThemedButtonProps = TouchableOpacityProps & {
  variant?: 'default' | 'secondary' | 'outline' | 'icon';
};

export function Button({
    variant = "default",
    style,
    children,
    ...otherProps
}: ThemedButtonProps) {
    const colors = useColors();

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[
             variant === 'default' ? {
              backgroundColor: colors.primary,
              alignSelf: 'flex-start',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 6
             } : null,
             variant === 'destructive' ? {
              backgroundColor: colors.danger,
              alignSelf: 'flex-start',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 6
             } : null,
             variant === 'outline' ? {
              backgroundColor: 'transparent',
              alignSelf: 'flex-start',
              borderWidth: 1.5,
              borderColor: colors.border,
              paddingVertical: 7,
              paddingHorizontal: 15,
              borderRadius: 6
             } : null,
             variant === 'secondary' ? {
              backgroundColor: colors.card,
              alignSelf: 'flex-start',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 6
             }: null,
             variant === 'icon' ? {
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
             } : null,
             style]}
            {...otherProps}>
            {children}
        </TouchableOpacity>
    );
}

export function ButtonText({ children }) {
 return (
  <Text type="semibold">{children}</Text>
  )
}