import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const Button = ({ children, style, titleStyle, type }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    button: {
      paddingBlock: 8,
      paddingInline: 12,
      backgroundColor: theme.background_primary,
      borderWidth: 1,
      borderColor: theme.background_secondary,
      borderRadius: 8,
    },
    primary: {
      backgroundColor: theme.primary_color,
    },
    primaryTitle: {
      color: theme.background_primary,
    },
    title: {
      fontSize: 14,
      fontWeight: "500",
      color: theme.text_secondary
    },
  });

  let buttonStyle = [styles.button, style];
  titleStyle = [styles.title, titleStyle];

  switch (type) {
    case "primary":
      buttonStyle.push(styles.primary);
      titleStyle.push(styles.primaryTitle);
      break;
  }

  return (
    <TouchableOpacity activeOpacity={0.6} style={buttonStyle}>
      <Text style={titleStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
