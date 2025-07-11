import TabBarIcon from "@/components/TabBar/TabBarIcon";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: 52,
        },
        tabBarStyle: {
          backgroundColor: "#767676",
          borderColor: "#767676",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarIconStyle: {
          width: "50%",
          height: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon icon="home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon icon="search" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
