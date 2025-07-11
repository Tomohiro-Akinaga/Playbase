import { Text, View } from "react-native";
import "../global.css";

export default function Home() {
  return (
    <View className="flex flex-1 items-center px-6 pt-20 pb-28 bg-primary">
      <Text className="text-white">Playbase</Text>
      <Text className="text-white">Find your favorite PS5 title</Text>
    </View>
  );
}
