import { Text, View } from "react-native";
import { useGames } from "@/hooks/useGames";
import "./global.css";

export default function Index() {
  // eslint-disable-next-line
  const { games } = useGames();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind!</Text>
    </View>
  );
}
