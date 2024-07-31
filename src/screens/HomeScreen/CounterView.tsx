import { StyleSheet, Text, View } from "react-native";

type CounterViewProps = {
  number: number | string;
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#007AFF",
    borderWidth: 3,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2000,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#007AFF",
  },
});

const CounterView = ({ number }: CounterViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

export { CounterView };
