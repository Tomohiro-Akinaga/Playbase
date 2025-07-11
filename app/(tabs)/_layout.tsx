import { Tabs } from "expo-router";
import TabBarIcon from "../../components/TabBar/TabBarIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          // width: "100%",
          // height: "100%",
          // justifyContent: "center",
          // alignItems: "center",
        },
        tabBarStyle: {
          // backgroundColor: "#202020",
          // borderRadius: 50,
          // marginHorizontal: 20,
          // marginBottom: 36,
          // height: 52,
          // position: "absolute",
          // overflow: "hidden",
        },
      }}
    >
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
