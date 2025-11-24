import { Text, View, Button, SafeAreaView, Link } from "@/components";
import { useColors } from "@/hooks/useColors";
import illustrationSvg from "@/assets/images/storyset/startup-life-rafiki.svg";
import { Image } from "expo-image";
import { useAuthActions } from '@/utils/auth-store';

export default function Welcome() {
    const { completeOnboarding } = useAuthActions();
    
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
                        alignItems: "center",
                        marginTop: 100
                    }}
                >
                    <Image source={illustrationSvg} width={300} height={280} />
                    <View
                        style={{
                            alignItems: "center",
                            gap: 10,
                            marginTop: 10
                        }}
                    >
                        <Text type="bold">
                            Happy Hacking Kiddo!
                        </Text>
                        <Text
                        type="secondary"
                            style={{
                                textAlign: "center"
                            }}
                        >
                            Enjoy using the app, feel free to customize this boilerplate, happy hacking! 👨‍💻
                        </Text>
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
                  <Text type="secondary" style={{
                      fontSize: 10,
                      paddingBottom: 20,
                      lineHeight: 12,
                    }}>© Illustration shown above is from Business illustrations by Storyset https://storyset.com/business</Text>
                    <Button
                    onPress={completeOnboarding}
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
                            Get Started
                        </Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
