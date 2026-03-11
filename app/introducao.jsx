import React, { useState } from 'react'; // Adicionado useState
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, Dimensions, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../src/hooks/useTheme";
import Logo from "../assets/Group1.svg";
import Figura1 from "../assets/images/Webinar 1.jpg";
import Figura2 from "../assets/images/Lesson 1.png";
import Figura3 from "../assets/images/Mic drop 1.png";

const { width } = Dimensions.get('window');

const Introducao = () => {
    const theme = useTheme();
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar as bolinhas

    // Função para detectar a página atual no scroll
    const handleScroll = (event) => {
        const scrollOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollOffset / width);
        setActiveIndex(index);
    };

    // Função ir proxima tela
    const handleNext = () => {
        router.replace("/(tabs)")
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background_primary,
        },
        page: {
            width: width,
            alignItems: "center",
            paddingTop: StatusBar.currentHeight + 20,
            paddingHorizontal: 20,
        },
        logoContainer: {
            width: "100%",
            alignItems: "center",
            marginBottom: 20,
        },
        imagemTutorial: {
            marginBottom: 40,
            width: width * 0.8, // 80% da tela para não encostar nas bordas
            height: 220,
            resizeMode: "contain",
        },
        text: {
            fontSize: 16,
            fontFamily: 'open-sans',
            fontWeight: "300",
            maxWidth: 280,
            textAlign: 'center',
            color: 'black',
        },
        // Estilos dos Indicadores e Botão
        footer: {
            position: 'absolute',
            bottom: 50,
            width: '100%',
            alignItems: 'center',
            gap: 20,
        },
        pagination: {
            flexDirection: 'row',
            gap: 8,
        },
        dot: {
            height: 8,
            borderRadius: 4,
            backgroundColor: '#D1D1D1',
        },
        activeDot: {
            width: 24,
            backgroundColor: '#0056b3',
        },
        inactiveDot: {
            width: 8,
        },
        button: {
            backgroundColor: '#0056b3',
            width: width * 0.8,
            paddingVertical: 15,
            borderRadius: 30,
            alignItems: 'center',
            position: 'absolute',
            bottom: width * 0.2,
            alignSelf: 'center',
        },
        buttonText: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 16,
        }
    });

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {/* PÁGINA 1 */}
                <View style={styles.page}>
                    <View style={styles.logoContainer}>
                        <Logo width={200} height={80} />
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
                        Tudo pronto para começar sua jornada cultural? 
                        Junte-se à nossa comunidade agora mesmo!
                    </Text>
                    {/* Botão Dinâmico */}
                    <Pressable style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>
                            {"Próximo"}
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>

            {/* ELEMENTOS FIXOS (FORA DO SCROLLVIEW) */}
            <View style={styles.footer}>
                {/* Bolinhas */}
                <View style={styles.pagination}>
                    {[0, 1, 2].map((i) => (
                        <View key={i} style={[styles.dot, i === activeIndex ? styles.activeDot : styles.inactiveDot]} />
                    ))}
                </View>

            </View>
        </View>
    );
}

export default Introducao;