import { Text, View, Button, SafeAreaView, Link } from "@/components";
import { useColors } from "@/hooks/useColors";
import illustrationSvg from "@/assets/images/storyset/preferences-rafiki.svg";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function Welcome() {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View
                style={{
                    marginHorizontal: 20,
                    flex: 1
                }}
            >
                <View
                    style={{
                        marginTop: 80
                    }}
                >
                    <Image source={illustrationSvg} width={300} height={250} />
                    <View
                        style={{
                            gap: 10
                        }}
                    >
                        <Text type="bold">
                            <Text
                                type="link"
                                style={{
                                    fontSize: 27,
                                    fontFamily: "NunitoBold",
                                    lineHeight: 32
                                }}
                            >
                                ExpoStarter
                            </Text>{" "}
                            Features
                        </Text>
                        <View>
                            <Text>
                                - Ready to use UI components, such as Button,
                                Text, View, Input and Modals.
                            </Text>
                            <Text>
                                - Ready to use pages for authentication process, Login Page, Create Account Page, and OTP verification page.
                            </Text>
                            <Text>
                              - Easy to configure theme colors for darkmode and lightmode color scheme.
                            </Text>
                            <Text>
                              - Organized and clean project structure.
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        position: "absolute",
                        bottom: 20,
                        width: "100%",
                        alignItems: "center"
                    }}
                >
                    <Text
                        type="secondary"
                        style={{
                            fontSize: 10,
                            paddingBottom: 20,
                            lineHeight: 12
                        }}
                    >
                        © Illustration shown above is from Business
                        illustrations by Storyset https://storyset.com/business
                    </Text>
                    <Button
                        onPress={() => router.push("/onboarding/final")}
                        style={{
                            paddingVertical: 10,
                            alignItems: "center",
                            width: "100%",
                            borderRadius: 10
                        }}
                    >
                        <Text
                            type="semibold"
                            style={{
                                fontSize: 16,
                                color: useColors(true)?.text
                            }}
                        >
                            Continue
                        </Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
