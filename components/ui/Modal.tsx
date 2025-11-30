import React from "react";
import { View } from "./View";
import {
  Modal as DefaultModal,
  type ModalProps,
  type StyleProp,
  type ViewStyle
} from "react-native";
import { useColors } from "@/hooks/useColors";

export function Modal({
  visible,
  children,
  onRequestClose,
  ...otherProps
}: ModalProps) {
  const colors = useColors();
  return (
    <DefaultModal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onRequestClose}
      {...otherProps}
    >
      <ModalOverlay>{children}</ModalOverlay>
    </DefaultModal>
  );
}

export function ModalContent({
  children,
  style
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const colors = useColors();
  return (
    <View
      style={[
        {
          backgroundColor: colors.card,
          borderRadius: 12,
          paddingHorizontal: 18,
          paddingVertical: 20,
          marginHorizontal: 20,
          minWidth: 300,
          shadowColor: colors.background,
          shadowOffset: {
            width: 0,
            height: 2
          },
          borderWidth: 1,
          borderColor: colors.border,
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        style
      ]}
    >
      {children}
    </View>
  );
}

function ModalOverlay({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: useColors().card + "0A"
      }}
    >
      {children}
    </View>
  );
}
