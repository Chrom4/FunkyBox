import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import ValueFormatter from "../src/components/ValueFormatter";

const Login = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: StatusBar.currentHeight,
      backgroundColor: theme.background_secondary,
    },
    title: {
      marginBlock: 100,
      fontSize: 30,
      fontWeight: "300",
    },
    form: {
      width: "80%",
      height: "50%",
      backgroundColor: theme.background_primary,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}></View>
    </View>
  );
};

export default Login;
