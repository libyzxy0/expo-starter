import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs } from "expo-router";
import { Platform } from "react-native";
import { useColors } from "@/hooks/useColors";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>["name"];
    color: string;
}) {
    return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colors = useColors();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute"
                    },
                    default: {
                        backgroundColor: colors.background,
                        borderColor: colors.border
                    }
                }),
                tabBarLabelStyle: {
                    fontFamily: "Nunito"
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Dashboard",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="extension-puzzle" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="settings-outline" color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
