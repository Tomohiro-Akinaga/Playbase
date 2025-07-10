import { Text } from "react-native";

interface Props {
  title: string;
  focused: boolean;
}

export default function TabBarIcon({ title, focused }: Props) {
  if (focused) return <Text>focused!!!!</Text>;
  return <Text className="size-full">{title}</Text>;
}
