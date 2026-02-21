import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, Dimensions } from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import Logo from "../assets/Group1.svg";
import Figura1 from "../assets/images/Webinar 1.jpg";
import Figura2 from "../assets/images/Lesson 1.png";
import Figura3 from "../assets/images/Mic drop 1.png";

// Importante para garantir que cada página ocupe a tela inteira
const { width } = Dimensions.get('window');

const Introducao = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background_primary,
        },
        // Estilo para cada "página" do tutorial
        page: {
            width: width, 
            alignItems: "center",
            paddingTop: StatusBar.currentHeight + 20,
        },
        logoContainer: {
            width: "100%",
            alignItems: "center",
            marginBottom: 20,
        },
        imagemTutorial: {
            marginBottom: 50,
            width: width * 1, // Responsivo: 80% da largura da tela
            height: 200,
            resizeMode: "contain",
        },
        text: {
            fontSize: 16,
            fontFamily: 'open-sans',
            fontWeight: "300",
            maxWidth: 280,
            alignSelf: 'center',
            textAlign: 'center', // 'justify' em textos curtos costuma ficar estranho no mobile
            color: 'black', // Verifique se essa variável existe no seu theme
        },
    });

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {/* PÁGINA 1 */}
                <View style={styles.page}>
                    <View style={styles.logoContainer}>
                        <Logo width={2000} height={80} />
                    </View>

                    <Image source={Figura1} style={styles.imagemTutorial} />
                    <Text style={styles.text}>
                        Já pensou em um app que reúne diversão, música e cultura? 
                        Aqui você encontra isso e muito mais!
                    </Text>
                </View>

                {/* PÁGINA 2 */}
                <View style={styles.page}>
                    <View style={styles.logoContainer}>
                        <Logo width={200} height={80} />
                    </View>

                    <Image source={Figura2} style={styles.imagemTutorial} />
                    <Text style={styles.text}>
                        Explore novos eventos, conecte-se com artistas e 
                        descubra o que está acontecendo na sua cidade.
                    </Text>
                </View>

                {/* PÁGINA 3 */}
                <View style={styles.page}>
                    <View style={styles.logoContainer}>
                        <Logo width={200} height={80} />
                    </View>

                    <Image source={Figura3} style={styles.imagemTutorial} />
                    <Text style={styles.text}>
                        Explore novos eventos, conecte-se com artistas e 
                        descubra o que está acontecendo na sua cidade.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Introducao;