import { Text, View, SafeAreaView, Button, Link, Input, showToast } from "@/components";
import { useAuthActions } from "@/utils/auth-store";
import { Header } from '@/components/Header'
import { useColors } from '@/hooks/useColors'
import { ScrollView } from 'react-native'
export default function Main() {
  const colors = useColors();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{
          paddingVertical: 20
        }}>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              marginHorizontal: 20
            }}
          >

            <Text style={{
              textAlign: 'center'
            }} type="semibold">Welcome to ExpoStarter Project by <Link type="semibold" url={"https://github.com/libyzxy0"} style={{
              color: colors.primary
            }}>@libyzxy0</Link></Text>

            <Text style={{
              textAlign: 'center',
              marginTop: 20
            }}>Edit this file at <Text type={"link"}>app/(tabs)/index.tsx</Text>, enjoy and happy coding!</Text>

            <View style={{
              height: 1,
              width: '100%',
              marginHorizontal: 20,
              marginTop: 15,
              marginBottom: 20,
              backgroundColor: colors.border
            }} />
          </View>

          <View
            style={{
              marginTop: 5,
              marginHorizontal: 20
            }}
          >
            <Text type={"bold"}>Examples</Text>

            <View style={{
              gap: 8,
              marginTop: 16
            }}>
              <Text type={"secondary"}>Buttons</Text>
              <View style={{
                gap: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>

                <Button>Button</Button>
                <Button variant={"outline"}>Outline</Button>
                <Button variant={"secondary"}>Secondary</Button>
                <Button variant={"danger"}>Danger</Button>

              </View>
            </View>
            <View style={{
              gap: 8,
              marginTop: 16
            }}>
              <Text type={"secondary"}>Input</Text>
              <Input placeholder="Tap to Enter." />
            </View>


            <View style={{
              gap: 8,
              marginTop: 16
            }}>
              <Text type={"secondary"}>Texts</Text>
              <View style={{
                gap: 8
              }}>
                <Text>This is a normal text.</Text>
                <Text type={"secondary"}>This is a secondary text.</Text>
                <Text type={"link"}>This is a link text.</Text>
                <Text type={"italic"}>This is a italic text.</Text>
                <Text type={"medium"}>This is a medium text.</Text>
                <Text type={"semibold"}>This is a semibold text.</Text>
                <Text type={"bold"}>This is a bold text.</Text>
              </View>
            </View>

            <View style={{
              gap: 8,
              marginTop: 16
            }}>
              <Text type={"secondary"}>Toasts</Text>
              <View style={{
                gap: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
                <Button
                  style={{
                    backgroundColor: colors.success
                  }}
                  onPress={() => showToast({
                    type: 'success',
                    text1: "Success Toast",
                    text2: "This is a description for success toast."
                  })}>Success</Button>
                <Button
                  style={{
                    backgroundColor: colors.warning
                  }}
                  onPress={() => showToast({
                    type: 'warning',
                    text1: "Warning Toast",
                    text2: "This is a description for warning toast."
                  })}
                >Warning</Button>
                <Button
                  variant={"danger"}
                  onPress={() => showToast({
                    type: 'error',
                    text1: "Error Toast",
                    text2: "This is a description for error toast."
                  })}
                >Error</Button>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
