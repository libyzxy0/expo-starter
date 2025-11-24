import { Text, type TextType } from "./Text";
import React, { useCallback } from "react";
import { Alert, Pressable, Linking, type TextProps } from "react-native";
import { useRouter, type RelativePathString } from 'expo-router'

export type LinkProps = TextProps & {
  url: any;
  type?: TextType;
  children: string;
};

export function Link({ children, url, type,...rest }: LinkProps) {
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
    <Text onPress={handlePress} type={type ?? 'link'} {...rest}>
      {children}
    </Text>
  );
}
