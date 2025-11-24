import DefaultToast, { BaseToast } from "react-native-toast-message";
import { useColors } from '@/hooks/useColors'

export const showToast = (config) => DefaultToast.show(config);

export function Toast() {
  const colors = useColors();
    const toastConfig = {
        success: props => (
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
        error: props => (
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
        warning: props => (
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
