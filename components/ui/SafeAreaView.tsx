import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { useColors } from "@/hooks/useColors";

export function SafeAreaView({ children }: PropsWithChildren) {
    const colors = useColors();
    return (
        <DefaultSafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.background
            }}
        >
            {children}
        </DefaultSafeAreaView>
    );
}
