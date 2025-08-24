import { Platform, Text } from "react-native";

const defaultFont = Platform.OS === "ios" ? "Helvetica" : "monospace";

const GlobalStyles = (props) => {
  Text.defaultProps = {
    ...(Text.defaultProps || {}),
    style: { fontFamily: defaultFont },
  };
  return props.children;
};

export default GlobalStyles;
