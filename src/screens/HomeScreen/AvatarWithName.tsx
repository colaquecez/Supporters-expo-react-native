import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "../../components";

type AvatarWithNameProps = {
  title: string;
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 45,
    gap: 1,
    alignItems: "center",
  },
});

const AvatarWithName = ({ title }: AvatarWithNameProps) => {
  return (
    <View style={styles.container}>
      <Avatar />
      <Text numberOfLines={1}>{title}</Text>
    </View>
  );
};

export { AvatarWithName };
