import { Text } from "./Text";
import React, { useCallback } from "react";
import { Alert, Pressable, Linking, type TextProps } from "react-native";
import { useRouter } from 'expo-router'

export type ThemedTextProps = TextProps & {
    url: string;
    children: string;
};

export function Link({ children, url, ...rest }: LinkProps) {
  const router = useRouter();
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            router.push(url);
        }
    }, [url]);

    return (
        <Text onPress={handlePress} type="link" {...rest}>
            {children}
        </Text>
    );
}
