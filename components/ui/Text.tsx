import { Text as DefaultText, StyleSheet, type TextProps } from "react-native";
import { useColors } from "@/hooks/useColors";

export type ThemedTextProps = TextProps & {
    type?:
        | "default"
        | "medium"
        | "secondary"
        | "bold"
        | "semibold"
        | "italic"
        | "link";
};

const colorMap = {
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
                    color: colorMap[type]
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
        fontSize: 27,
        fontFamily: "NunitoBold",
        lineHeight: 32
    },
    semibold: {
        fontSize: 14,
        lineHeight: 24,
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
