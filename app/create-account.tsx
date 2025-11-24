import {
  Text,
  View,
  Button,
  Input,
  SafeAreaView,
  showToast,
  Link
} from "@/components";
import { Image } from "expo-image";
import logo from "@/assets/images/logo.png";
import { useColors } from "@/hooks/useColors";
import { useAuthActions } from "@/utils/auth-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useReducer } from "react";
import { ScrollView } from 'react-native'
type ActionType = {
  type: 'email_change' | 'password_change' | 'confirm_password_change' | 'firstname_change' | 'lastname_change';
  value: string | null;
}

type CredType = {
  email: string | null;
  password: string | null;
  confirm_password: string | null;
  firstname: string | null;
  lastname: string | null;
}

function reducer(state: CredType, action: ActionType) {
  switch (action.type) {
    case "email_change": {
      return {
        email: action.value,
        password: state.password,
        confirm_password: state.confirm_password,
        lastname: state.lastname,
        firstname: state.firstname
      };
    }
    case "password_change": {
      return {
        email: state.email,
        password: action.value,
        confirm_password: state.confirm_password,
        lastname: state.lastname,
        firstname: state.firstname
      };
    }
    case "confirm_password_change": {
      return {
        email: state.email,
        password: state.password,
        confirm_password: action.value,
        lastname: state.lastname,
        firstname: state.firstname
      };
    }
    case "firstname_change": {
      return {
        email: state.email,
        password: state.password,
        confirm_password: state.confirm_password,
        lastname: state.lastname,
        firstname: action.value
      };
    }
    case "lastname_change": {
      return {
        email: state.email,
        password: state.password,
        confirm_password: state.confirm_password,
        lastname: action.value,
        firstname: state.firstname
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function LoginPage() {
  const { login } = useAuthActions();
  const colors = useColors();
  const [showPassword, setShowPassword] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    email: null,
    password: null,
    confirm_password: null,
    firstname: null,
    lastname: null
  });

  const handleCreateAccount = async () => {
    try {
      if (!state.firstname) {
        showToast({
          type: "warning",
          text1: "Failed to create account!",
          text2: `Please enter your firstname.`
        });
        return;
      }
      if (!state.lastname) {
        showToast({
          type: "warning",
          text1: "Failed to create account!",
          text2: `Please enter your lastname.`
        });
        return;
      }
      if (!state.email) {
        showToast({
          type: "warning",
          text1: "Failed to create account!",
          text2: `Please enter your email.`
        });
        return;
      }

      if (!state.password) {
        showToast({
          type: "warning",
          text1: "Failed to create account!",
          text2: `Please enter your desired password.`
        });
        return;
      }

      if (state.password !== state.confirm_password) {
        showToast({
          type: "warning",
          text1: "Failed to create account!",
          text2: `Please confirm your password correctly!`
        });
        return;
      }

      showToast({
        type: "success",
        text1: "Loggin Successful!",
        text2: `Currently logged in as @libyzxy0`
      });
    } catch (error: any) {
      showToast({
        type: "error",
        text1: "Oppya... Failed to Login",
        text2: `${error.message}`
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
            gap: 20
          }}
        >
          <Image
            source={logo}
            style={{
              width: 300,
              height: 100
            }}
            contentFit="contain"
          />

          <Text type="bold">Create your new Account</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: 60,
            marginHorizontal: 30,
            gap: 14,
            marginBottom: 60
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: "4%"
            }}
          >
            <View
              style={{
                width: "48%",
                flexDirection: "column",
                gap: 5
              }}
            >
              <Text>First Name</Text>
              <Input
                onChangeText={value =>
                  dispatch({
                    type: "firstname_change",
                    value
                  })
                }
                value={state.firstname ?? undefined}
                cursorColor={colors.primary}
                textContentType={"givenName"}
                autoCorrect={false}
                autoComplete={"given-name"}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 14,
                  borderRadius: 10
                }}
                placeholder="Jan Liby"
              />
            </View>

            <View
              style={{
                width: "48%",
                flexDirection: "column",
                gap: 5
              }}
            >
              <Text>Last Name</Text>
              <Input
                onChangeText={value =>
                  dispatch({
                    type: "lastname_change",
                    value
                  })
                }
                value={state.lastname ?? undefined}
                cursorColor={colors.primary}
                textContentType={"familyName"}
                autoCorrect={false}
                autoComplete={"family-name"}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 14,
                  borderRadius: 10
                }}
                placeholder="Dela Costa"
              />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 5
            }}
          >
            <Text>Email</Text>
            <Input
              onChangeText={value =>
                dispatch({
                  type: "email_change",
                  value
                })
              }
              value={state.email ?? undefined}
              cursorColor={colors.primary}
              textContentType={"emailAddress"}
              keyboardType={"email-address"}
              autoCorrect={false}
              autoComplete={"email"}
              style={{
                paddingVertical: 14,
                paddingHorizontal: 14,
                borderRadius: 10
              }}
              placeholder="janlibydelacosta@gmail.com"
            />
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "column",
              position: "relative",
              gap: 5
            }}
          >
            <Button
              onPress={() => setShowPassword(!showPassword)}
              variant={"icon"}
              style={{
                position: "absolute",
                right: 12,
                bottom: 8,
                zIndex: 10
              }}
            >
              <Ionicons
                name={
                  showPassword ? "eye-outline" : "eye-off-outline"
                }
                size={20}
                color={colors.text}
              />
            </Button>

            <Text>Password</Text>
            <Input
              onChangeText={value =>
                dispatch({
                  type: "password_change",
                  value
                })
              }
              value={state.password ?? undefined}
              cursorColor={colors.primary}
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={!showPassword}
              autoComplete="new-password"

              style={{
                paddingVertical: 14,
                paddingHorizontal: 14,
                borderRadius: 10
              }}
              placeholder="NapakaPogiko@123"
            />
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "column",
              position: "relative",
              gap: 5
            }}
          >
            <Button
              onPress={() => setShowPassword(!showPassword)}
              variant={"icon"}
              style={{
                position: "absolute",
                right: 12,
                bottom: 8,
                zIndex: 10
              }}
            >
              <Ionicons
                name={
                  showPassword ? "eye-outline" : "eye-off-outline"
                }
                size={20}
                color={colors.text}
              />
            </Button>

            <Text>Confirm Password</Text>
            <Input
              onChangeText={value =>
                dispatch({
                  type: "confirm_password_change",
                  value
                })
              }
              value={state.confirm_password ?? undefined}
              cursorColor={colors.primary}
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={!showPassword}
              autoComplete="new-password"

              style={{
                paddingVertical: 14,
                paddingHorizontal: 14,
                borderRadius: 10
              }}
              placeholder="NapakaPogiko@123"
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 5
            }}
          >
            <Button
              onPress={handleCreateAccount}
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
                Create Account
              </Text>
            </Button>
          </View>

          <View
            style={{
              marginTop: 20,
              gap: 36,
              alignItems: "center"
            }}
          >
            <Text>
              Already have an account? <Link url="/login">Let's Login</Link>
            </Text>

            <Text
              type="secondary"
              style={{
                fontSize: 12
              }}
            >
              Privacy Policy | Terms and Conditions
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
