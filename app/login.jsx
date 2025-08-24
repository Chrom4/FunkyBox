import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import ValueFormatter from "../src/components/ValueFormatter";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

const Login = ({ onForgotPasswordClick }) => {
  const theme = useTheme();

  const handleForgotPasswordClick = () => {
    if (onForgotPasswordClick) onForgotPasswordClick();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: StatusBar.currentHeight,
      backgroundColor: theme.background_secondary,
    },
    form: {
      width: "80%",
      height: "50%",
      padding: 24,
      backgroundColor: theme.background_primary,
      borderRadius: 10,
      gap: 12,
    },
    buttons: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "space-between",
      flexDirection: "row",
    },

    // Text styles
    title: {
      marginBlock: 100,
      fontSize: 30,
      fontWeight: "300",
    },
    forgotPassword: {
      color: theme.primary_color,
      fontSize: 12,
      marginBlock: 10,
    },
  });

  const buttons = [
    <Button style={{backgroundColor: theme.light_blue_1}} >Cadastre-se</Button>,
    <Button type={"primary"}>Entrar</Button>,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <Input placeholder={"Insira seu e-mail"} title={"E-mail"} />
        <Input
          type={"password"}
          placeholder={"Insira sua senha"}
          title={"Senha"}
        />

        <Pressable onPress={handleForgotPasswordClick}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </Pressable>

        <View style={styles.buttons}>{buttons}</View>
      </View>
    </View>
  );
};

export default Login;
