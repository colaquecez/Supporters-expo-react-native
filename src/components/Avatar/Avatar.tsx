import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: 40,
    borderRadius: 2000,
    height: 40,
    backgroundColor: "#ccc",
  },
});

const Avatar = () => {
  return <View style={styles.imagePlaceholder} />;
};

export { Avatar };
