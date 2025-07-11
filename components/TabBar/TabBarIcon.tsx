import { Text } from "react-native";
import "../../app/global.css";

interface Props {
  title: string;
  focused: boolean;
}

export default function TabBarIcon({ title, focused }: Props) {
  if (focused) return <Text>focused!!!!</Text>;
  return <Text className="text-red-600">{title}</Text>;
}
