import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type SelectBoxProps = {
  isSelected: boolean;
};

const SelectBox = ({ isSelected }: SelectBoxProps) => {
  return isSelected ? (
    <Ionicons color={"#007AFF"} size={24} name="checkmark-circle" />
  ) : (
    <Ionicons size={24} name="ellipse-outline" />
  );
};

export { SelectBox };
