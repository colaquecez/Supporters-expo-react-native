import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SelectBox } from "./SelectBox";
import { Avatar } from "../../../components";

type ListItemProps = {
  title: string;
  description: string;
  isSelected: boolean;
  onPress: () => void;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

const ListItem = ({
  description,
  title,
  isSelected,
  onPress,
}: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.subWrapper}>
        <Avatar />
        <View>
          <Text style={styles.title}>{title}</Text>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : null}
        </View>
      </View>

      <SelectBox isSelected={isSelected} />
    </TouchableOpacity>
  );
};

export { ListItem };
