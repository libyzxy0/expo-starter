import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export { type ColorsType } from "@/constants/Colors";

export function useColors(inverted?: boolean) {
    return Colors[
        inverted
            ? useColorScheme() === "dark"
                ? "light"
                : "dark"
            : useColorScheme() ?? "light"
    ];
}
