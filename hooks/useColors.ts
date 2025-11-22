import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

type ThemeType = "dark" | "light";

export function useColors(customTheme?: ThemeType) {
    const colorScheme = useColorScheme() ?? "light";

    if (!Colors) {
        console.error("Cannot find theme colors!");
        return null;
    }

    return Colors[customTheme ? customTheme : colorScheme];
}
