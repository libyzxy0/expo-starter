import { SafeAreaView as DefaultSafeAreaView, type NativeSafeAreaViewProps } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { useColors } from "@/hooks/useColors";

export function SafeAreaView({ children, style, ...atIbaPangProps }: NativeSafeAreaViewProps) {
    const colors = useColors();
    return (
        <DefaultSafeAreaView
            style={[{
                flex: 1,
                backgroundColor: colors.background
            }, style]}
            {...atIbaPangProps}
        >
            {children}
        </DefaultSafeAreaView>
    );
}
