import { StyleSheet, Text, View, StatusBar, Pressable, Image} from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import Logo from "../assets/Group1.svg";
import Figura from "../assets/fotu_introtucao.png";

const Introducao1 = ()=> {
    const theme = useTheme();
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: StatusBar.currentHeight,
        backgroundColor: theme.background_primary,
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
    LogoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    Imagens: {
        marginBlockEnd: 75,
        width: 350,
        height: 170,
        resizeMode: "contain",
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
        maxWidth:230,
        alignSelf:'center',
        textAlign:'justify',
    },
    forgotPassword: {
        color: theme.primary_color,
        fontSize: 12,
        marginBlock: 10,
    },
});

    return (
    <View style={styles.container}>
        <View style={styles.LogoContainer}>
            <Logo width={300} height={120}/>
        </View>
        <View style={styles.LogoContainer}>
            <Image source={Figura} style={styles.Imagens} />
        </View> 
      <Text style={styles.text}>Já pensou em um app que reúne 
        diversão, música e cultura? Aqui você 
        encontra isso e muito mais!</Text>
    </View>
  );
}

export default Introducao1;