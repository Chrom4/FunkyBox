import { Platform, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Open Sans",
  },
});

const ValueFormatter = ({ children, style, type }) => {
  switch (type) {
    case "text":
    case "string":
    default:
      return <Text style={[styles.text, style]}>{children}</Text>;
  }
};

export default ValueFormatter;
