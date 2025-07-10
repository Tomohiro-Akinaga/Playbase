import { Text, View } from "react-native";
import { useGames } from "@/hooks/useGames";

export default function Index() {
  // eslint-disable-next-line
  const { games } = useGames();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
