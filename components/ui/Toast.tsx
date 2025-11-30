import DefaultToast, { BaseToast, type BaseToastProps, type ToastOptions } from "react-native-toast-message";
import { useColors } from '@/hooks/useColors'

type OptionsType = BaseToastProps & {
  type: 'default' | 'success' | 'error' | 'warning';
}
export const showToast = (options: OptionsType) => DefaultToast.show(options);

export function Toast() {
  const colors = useColors();
  const toastConfig = {
    default: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.gray,
          backgroundColor: colors.card
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontFamily: "NunitoBold",
          color: colors.gray
        }}
        text2Style={{
          fontSize: 13,
          color: colors.text
        }}
      />
    ),
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.success,
          backgroundColor: colors.card
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontFamily: "NunitoBold",
          color: colors.success
        }}
        text2Style={{
          fontSize: 13,
          color: colors.text
        }}
      />
    ),
    error: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.danger,
          backgroundColor: colors.card
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontFamily: "NunitoBold",
          color: colors.danger
        }}
        text2Style={{
          fontSize: 13,
          color: colors.text
        }}
      />
    ),
    warning: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: colors.warning,
          backgroundColor: colors.card
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontFamily: "NunitoBold",
          color: colors.warning
        }}
        text2Style={{
          fontSize: 13,
          color: colors.text
        }}
      />
    )
  };
  return (
    <DefaultToast position="top" topOffset={45} swipeable config={toastConfig} />
  );
}
