import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HistoryScreen = ({ navigation }) => {
    const handleLinkPress = () => {
        navigation.navigate('GameScreen');

    }
    
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#FFF', height: 50 }}>
                    <Pressable onPress={openDrawer}>
                    </Pressable>
                </View>
                <Image
                    source={require('../images/funkybox_logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View>
                    <Text style={styles.title}>Electro-funk</Text>
                    <Text>
                        O Electro Funk é um estilo que combina elementos de dois mundos, o Funk dos anos 1970 com o Electro. Ele trouxe no campo de suas aspirações musicais uma nova premissa: as bandas não precisavam mais gastar fortunas com gravações em estúdios, pois o som era feito com o auxílio de máquinas, computadores e outros aparatos eletrônicos. Neste momento as bandas grandes foram desfeitas e o produtor se tornou o personagem central, conhecido como “one-man show”, ou em sua tradução, banda de um homem só.
                    </Text>
                    <Text />
                    <Text>
                        Ele é reconhecido por suas linhas de baixo sequenciadas, com efeitos sonoros sintetizados, que enfatizam algo mais futurístico através de texturas e timbres peculiares. Como exemplo disto, pode-se citar a influencia do uso da bateria eletrônica TR-808. Essas gravações faziam uso de baterias eletrônicas e linhas de baixo pesadas.
                    </Text>
                    <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center", marginTop: '20%', marginBottom: '20%'}}>
                        <Image
                            source={require('../images/remix.png')}
                            style={styles.images}
                            resizeMode="contain"
                        />
                    </View>
                    <Text />
                    <Text>
                        Nessa época, o termo "Electro" se popularizou nessa sonoridade Funk da década de 1980, pois o funk dessa década estava ficando cada vez mais eletrônico, algo bem diferente do funk clássico da década anterior. No início dos anos 80 em Nova York, o nível de inovação musical era impressionante. A diversidade de músicas durante este período era algo era imprevisível, pois você nunca sabia o que estava por vir.
                    </Text>
                    <Text />
                    <Text>
                        O funk é um estilo musical que surgiu nas favelas do Rio de Janeiro ao longo das décadas de 1970 e 1980. Combinando elementos de subgêneros norte americanos como o electro-funk, Miami Bass, electro-funk de Los Angeles. Foi originalmente criado por artistas que cresceram em favelas —comunidades estas da negligência governamental— e passavam o tempo ouvindo música americana nas rádios.

                        Os músicos que criaram este estilo foram influenciados por DJs e a música eletrônica; eles também adicionaram suas próprias idéias ao longo do tempo.

                        Ao mesmo tempo, DJs brasileiros tocavam música soul, shaft e funk em festas nas favelas. Nos anos 80, o DJ Marlboro trouxe para o Rio o gênero Miami Bass, que se tornando super popular. Foi aí que o funk carioca começou a parecer como o que nós conhecemos hoje. No final dos anos 80 e início dos anos 90, esses DJs misturavam rap e hip-hop com batidas repetitivas. As letras frequentemente falavam sobre a vida nas favelas, violência, brutalidade policial e direitos civis.

                    </Text>
                    <Text />
                    <Text>
                        É imprescindível falar de Funk Carioca sem falar das danças e festas, conhecidas como Baile Funk ou Baile de Favela. É lá que as pessoas iam e vão até hoje para se divertir e dançar a noite toda.
                    </Text>
                    <Text />
                    <Text>

                        Por volta dos anos 2000, com o gênero popularizado, surgiu a Furacão 2000. As suas primeiras atividades foram a organização de bailes de funk e soul, as equipes de som eram responsáveis por montar o equipamento de som para que seja possível colocar todo mundo para dançar.
                    </Text>
                    <Text />
                    <Text />
                    <Text>
                        Nas palavras do eminente e falecido MC Sapão, “o natural do Rio é o batidão”. No Rio de Janeiro, batidão e pancadão são algumas das expressões utilizadas pelos funkeiros, os apreciadores e frequentadores dos bailes funk.
                        (foto)
                    </Text>
                    <Text />
                    <Text />
                    <Text>
                        A história do funk carioca está repleta de histórias de resistência e opressão. A própria música foi moldada por esta história e pela necessidade de sobreviver em um país onde ainda é marginalizado.
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={handleLinkPress}
                >
                    <Text style={styles.loginButtonText}>Jogar</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "white"
    },
    pseudoHeader: {
        flex: 1,
        width: "90%",
        height: 50,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginTop: 50,
    },
    loginView: {
        width: "90%",
        height: 230
    },
    title: {
        fontSize: 22,
        marginBottom: 16,
        color: "#004AAD",
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5, // Raio da sombra
    },
    input: {
        height: 50,
        width: '100%',
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 10,
        backgroundColor: "white"
    },
    logo: {
        width: 180,
        height: 100,
        marginBottom: 50,
    },
    userImage: {
        width: 180,
        height: 100,
        marginBottom: 16,
    },
    images: {
        width: '50%',
        height: 230,
    },
    forgotPasswordContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8,
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'blue',
        marginLeft: 5,
    },
    button: {
        padding: 10,
        borderRadius: 15,
        width: '70%',
        height: 45,
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginButton: {
        backgroundColor: '#004AAD',
        shadowOffset: {
            width: 0,
            height: 4, // Ajuste para a sombra aparecer apenas na parte inferior
        },
    },
    cadastroButton: {
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 4, // Ajuste para a sombra aparecer apenas na parte inferior
        },
    },
    loginButtonText: {
        color: 'white', // Defina a cor do texto desejada
        fontSize: 18,
    },
    cadastroButtonText: {
        color: 'black', // Defina a cor do texto desejada
        fontSize: 18,
    }
});

export default HistoryScreen;
