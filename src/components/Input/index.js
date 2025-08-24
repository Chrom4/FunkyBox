import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const Input = ({
  type,
  placeholder,
  initialValue,
  title,
  fullWidth = true,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    // Container styles
    container: {
      gap: 4,
      width: fullWidth ? "100%" : "auto",
    },
    inputContainer: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: theme.background_secondary,
      borderRadius: 4,
    },

    // Text styles
    title: {
      color: theme.text_primary,
    },
    value: {
      color: theme.text_primary,
    },
    placeholder: {
      color: theme.text_secondary,
      opacity: 0.5,
    },
  });

  let value = (
    <TextInput style={styles.value} placeholder={placeholder}>
      {initialValue}
    </TextInput>
  );

  switch (type) {
    case "password":
      value = (
        <TextInput
          style={styles.value}
          placeholder={placeholder}
          secureTextEntry={true}
        >
          {initialValue}
        </TextInput>
      );
      break;
    default:
  }

  let content = <View style={styles.inputContainer}>{value}</View>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {content}
    </View>
  );
};

export default Input;
