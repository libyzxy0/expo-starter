import { Text } from "./Text";
import React, { useCallback } from "react";
import { Alert, Pressable, Linking } from "react-native";

type LinkProps = {
    url: string;
    children: string;
};

export function Link({ children, url }: LinkProps) {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Ayaw maopen ng url shesshhh: ${url}`);
        }
    }, [url]);

    return (
        <Text onPress={handlePress} type="link">
            {children}
        </Text>
    );
}
