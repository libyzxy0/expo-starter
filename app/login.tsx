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

function reducer(state, action) {
    switch (action.type) {
        case "username_change": {
            return {
                username: action.value,
                password: state.password
            };
        }
        case "password_change": {
            return {
                username: state.username,
                password: action.value
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
        username: null,
        password: null
    });

    const handleLogin = async () => {
        try {
            await login(state.username, state.password);
            showToast({
                type: "success",
                text1: "Loggin Successful!",
                text2: `Currently logged in as @libyzxy0`
            });
        } catch (error) {
            showToast({
                type: "error",
                text1: "Oppya... Failed to Login",
                text2: `${error.message}`,
            });
        }
    };

    return (
        <SafeAreaView>
            <View
                style={{
                    marginTop: 80,
                    alignItems: "center",
                    gap: 20
                }}
            >
                <Image
                    source={logo}
                    width={300}
                    height={100}
                    contentFit="contain"
                />

                <Text type="bold">Login to your Account</Text>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    marginTop: 60,
                    marginHorizontal: 30,
                    gap: 14
                }}
            >
                <View
                    style={{
                        width: "100%",
                        flexDirection: "column",
                        gap: 5
                    }}
                >
                    <Text>Username/Email</Text>
                    <Input
                        onChangeText={value =>
                            dispatch({
                                type: "username_change",
                                value
                            })
                        }
                        value={state.username}
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
                        value={state.password}
                        cursorColor={colors.primary}
                        autoCorrect={false}
                        textContentType="password"
                        secureTextEntry={!showPassword}
                        autoComplete="current-password"
                        type={"password"}
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
                        onPress={handleLogin}
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
                            Login
                        </Text>
                    </Button>
                </View>

                <View
                    style={{
                        marginTop: 28,
                        gap: 120,
                        alignItems: "center"
                    }}
                >
                    <Text>
                        Don't have an account yet?{" "}
                        <Link url="/create-account">Create Account</Link>
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
        </SafeAreaView>
    );
}
