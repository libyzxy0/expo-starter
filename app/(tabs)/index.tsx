import { Text, View, SafeAreaView, Button } from "@/components";
import { useColors } from "@/hooks/useColors";
import { useAuthStore } from "@/utils/auth-store";

export default function Main() {
    const colors = useColors();
    const { logOut, resetOnboarding } = useAuthStore();
    return (
        <SafeAreaView>
            <View
                style={{
                    marginTop: 300,
                    alignItems: "center",
                    marginHorizontal: 20
                }}
            >

                    <Text type="semibold">Welcome to Dashboard Page</Text>

                    <View
                        style={{
                            width: "100%",
                            marginTop: 20
                        }}
                    >
                        <Button
                            onPress={logOut}
                            style={{
                                paddingVertical: 8,
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
                                Logout
                            </Text>
                        </Button>
                    </View>
                    
                    <View
                        style={{
                            width: "100%",
                            marginTop: 20
                        }}
                            
                    >
                        <Button
                        onPress={resetOnboarding}
                            style={{
                                paddingVertical: 8,
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
                                Reset Onboarding
                            </Text>
                        </Button>
                    </View>
            </View>
        </SafeAreaView>
    );
}
