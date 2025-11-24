import { Text, View, Button, SafeAreaView, Link } from "@/components";
import { useColors } from "@/hooks/useColors";
import illustrationSvg from "@/assets/images/storyset/welcome-rafiki.svg";
import { Image } from "expo-image";
import { useRouter } from 'expo-router'

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
            alignItems: "center",
            marginTop: 100
          }}
        >
          <Image source={illustrationSvg} style={{
            width: 300,
            height: 300
          }} />
          <View
            style={{
              alignItems: "center",
              gap: 10
            }}
          >
            <Text type="bold">
              Welcome to{" "}
              <Text
                type="link"
                style={{
                  fontSize: 27,
                  fontFamily: "NunitoBold",
                  lineHeight: 32
                }}
              >
                ExpoStarter
              </Text>
              {" "}
              👋
            </Text>
            <Text
              style={{
                textAlign: "center"
              }}
            >
              Welcome to expo starter, a basic template for
              starting your expo projects with autuentication
              features and decent login, register, otp and onboarding page,
              designed and developed for you by{" "}
              <Link url="https://github.com/libyzxy0">
                @libyzxy0
              </Link>
              .
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
            onPress={() => router.push('/onboarding/benefits')}
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
              Next
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
