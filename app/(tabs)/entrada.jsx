import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { useTheme } from "../../src/hooks/useTheme";
/*
import ValueFormatter from "../../src/components/ValueFormatter";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
*/

const Entrada = ()=> {
    const theme = useTheme();
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
        fontSize: 48,
        fontFamily: 'atma-bold',
        fontWeight: "300",
    },
    subTitle: {
        marginBlock: 100,
        fontSize: 24,
        fontWeight: "300",
    },
    text: {
        fontSize: 15,
        fontFamily: 'open-sans',
        fontWeight: "300",
    },
    forgotPassword: {
        color: theme.primary_color,
        fontSize: 12,
        marginBlock: 10,
    },
});

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é Tela!</Text>
      <Text style={styles.text}>blablablablablablablablablablablablablabla</Text>
      <Text style={styles.text}>blablablablablablablablablablablablablabla</Text>
    </View>
  );
}

export default Entrada;