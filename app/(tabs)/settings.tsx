import { Text, View, SafeAreaView, Button } from "@/components";
import { useColors } from "@/hooks/useColors";
import { useAuthStore } from "@/utils/auth-store";
import { Header } from "@/components/Header";

export default function Settings() {
    const colors = useColors();
    const {logout, resetOnboarding} = useAuthStore();
    
    return (
        <SafeAreaView>
            <Header />
            <View
                style={{
                    marginTop: 260,
                    alignItems: "center",
                    marginHorizontal: 20
                }}
            >
                <Text type="bold">Settings Page</Text>
                
                  <View style={{
                  height: 1,
                  width: '100%',
                  marginHorizontal: 20,
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: colors.border
                }} />

                <View
                    style={{
                        width: "100%",
                    }}
                >
                    <Button
                        variant={"danger"}
                        onPress={() => logout()}
                        style={{
                            paddingVertical: 8,
                            alignItems: "center",
                            width: "100%",
                            borderRadius: 8
                        }}
                    >
                        Logout
                    </Button>
                </View>

                <View
                    style={{
                        width: "100%",
                        marginTop: 10
                    }}
                >
                    <Button
                        onPress={() => resetOnboarding()}
                        style={{
                            paddingVertical: 8,
                            alignItems: "center",
                            width: "100%",
                            borderRadius: 8
                        }}
                    >
                        Reset Onboarding
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
