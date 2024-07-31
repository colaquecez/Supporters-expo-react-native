import {
  ButtonProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const Button = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#007AFF",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      <Text style={{ color: "white", fontWeight: 600 }}>Continue</Text>
    </TouchableOpacity>
  );
};

export { Button };
