import { Text, View, SafeAreaView, Button, Link } from "@/components";
import { useColors } from "@/hooks/useColors";
import { useAuthActions } from "@/utils/auth-store";
import { Header } from '@/components/Header'

export default function Main() {
    const colors = useColors();
    const { logOut, resetOnboarding } = useAuthActions();
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

                    <Text style={{
                      textAlign: 'center'
                    }} type="semibold">Welcome to ExpoStarter Project by <Link type="semibold" url={"https://github.com/libyzxy0"} style={{
                      color: colors.primary
                    }}>@libyzxy0</Link></Text>

                <View style={{
                  height: 1,
                  width: '100%',
                  marginHorizontal: 20,
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: colors.border
                }} />
                
                <Text style={{
                  textAlign: 'center'
                }}>Edit this file at <Text type={"link"}>app/(tabs)/index.tsx</Text>, enjoy and happy coding!</Text>
            </View>
        </SafeAreaView>
    );
}
