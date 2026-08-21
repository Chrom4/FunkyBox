import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import ValueFormatter from "../src/components/ValueFormatter";

const Sobre_Nos = ({ onForgotPasswordClick }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
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
      color: theme.text_primary
    },
    text: {
      fontSize: 16,
      fontFamily: 'open-sans',
      fontWeight: "300",
      maxWidth: 280,
      textAlign: 'center',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>Lorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun.</Text>
     </View>
  );
};

export default Sobre_Nos;