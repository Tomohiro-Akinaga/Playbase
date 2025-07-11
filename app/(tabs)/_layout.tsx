import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: "red",
          height: 52,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          opacity: 0.7,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarIconStyle: {
          backgroundColor: "blue",
          height: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <View className="bg-purple-500 h-[52px]">
          //     <Text>Home</Text>
          //   </View>
          // ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <View className="bg-purple-500 h-[52px]">
          //     <Text>Search</Text>
          //   </View>
          // ),
        }}
      />
    </Tabs>
  );
}
