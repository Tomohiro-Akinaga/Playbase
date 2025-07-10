import { Tabs } from "expo-router";
import TabBarIcon from "../components/TabBar/TabBarIcon";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon title="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon title="Search" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
