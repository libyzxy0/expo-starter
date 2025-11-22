import { Text, View, Button, Input, SafeAreaView } from '@/components';
import { Image } from 'expo-image';
import logo from '@/assets/images/logo.png';
import { useColors } from "@/hooks/useColors";

export default function Main() {
  return (
    <SafeAreaView>
      <View style={{
        marginTop: 80,
        alignItems: 'center',
        gap: 20
      }}>
        <Image source={logo} width={105} height={105} contentFit="cover" />
        
        <Text type="bold">Login to your account</Text>
      </View>
      
      <View style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 60,
        marginHorizontal: 30,
        gap: 14
      }}>
        
        <View style={{
          width: '100%',
          flexDirection: 'column',
          gap: 5
        }}>
          <Text>Username/Email</Text>
          <Input style={{
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 10
          }} placeholder="janlibydelacosta@gmail.com" />
        </View>
        
        <View style={{
          width: '100%',
          flexDirection: 'column',
          gap: 5
        }}>
          <Text>Password</Text>
          <Input style={{
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 10
          }} placeholder="NapakaPogiko@123" />
        </View>
        
        <View style={{
          width: '100%',
          marginTop: 5
        }}>
          <Button style={{
            paddingVertical: 10,
            alignItems: 'center',
            width: '100%',
            borderRadius: 10
          }}>
            <Text type="semibold" style={{
              fontSize: 16,
              color: useColors(true)?.text
            }}>Login</Text>
          </Button>
        </View>
        
        <View style={{
          marginTop: 28,
          gap: 120,
          alignItems: 'center'
        }}>
          <Text>Don't have an account yet? <Text type="link">Create Account</Text></Text>
          
          <Text type="secondary" style={{
            fontSize: 12
          }}>This login is secured and developed by <Text style={{
            fontSize: 12
          }} type="link">@libyzxy0</Text>.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}