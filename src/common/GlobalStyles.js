import { Platform, StatusBar, Text, View } from "react-native";

const defaultFont = Platform.OS === "ios" ? "Helvetica" : "monospace";

const GlobalStyles = (props) => {
  Text.defaultProps = {
    ...(Text.defaultProps || {}),
    style: { fontFamily: defaultFont },
  };
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      {props.children}
    </View>
  );
};

export default GlobalStyles;
