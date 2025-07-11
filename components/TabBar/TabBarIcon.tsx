import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import "../../app/global.css";

interface Props {
  icon: any;
  focused: boolean;
}

export default function TabBarIcon({ icon, focused }: Props) {
  const color = focused ? "#fff" : "rgba(255, 255, 255, 0.4)";

  return (
    <View>
      <Ionicons name={icon} color={color} size={24} />
    </View>
  );
}
