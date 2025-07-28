import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { API_URL } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { cond } from 'react-native-reanimated';



const url = `${API_URL}/login`;


const GameScreen = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <View style={styles.pseudoHeader}>
                <Pressable/> 
                <View style={styles.subPseudoHeader}>
                    <Image
                        source={require('../images/translate.png')}
                        style={styles.translateImage}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/sound.png')}
                        style={styles.translateImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <Image
                source={require('../images/funkybox_blue_logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.retryAndPauseView}>
                <Image
                    source={require('../images/retry.png')}
                    style={styles.translateImage}
                    resizeMode="contain"
                />
                <Image
                    source={require('../images/pause.png')}
                    style={styles.translateImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.userIconButtons}>
                <View style={styles.userIconButtonsTop}>
                    <Image
                        source={require('../images/user1.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/user2.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/user3.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/user4.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.userIconButtonsBottom}>
                    <Image
                        source={require('../images/user5.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/user6.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../images/user7.png')}
                        style={styles.userIcon}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View style={styles.instruments}>
                <View style={styles.instrumentsRow}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/soundbox.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../images/soundbox.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/drummer.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/drummer.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.instrumentsRow}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/soundbox.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/headphones.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/headphones.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/microphone.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.instrumentsRow}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/pandero.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/pandero.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/microphone.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/microphone.png')}
                            style={styles.instumentIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#A0BEEC"
    },
    pseudoHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        paddingHorizontal: 16,
        paddingTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1, // Garante que o pseudo-header esteja acima do restante do conteúdo
    },
    subPseudoHeader: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        width: "70%",
        paddingRight: 10
    },
    logo: {
        width: 180,
        height: 100,
        marginTop: 70,
    },
    menuIcon: {
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 1, // Garante que o ícone de menu esteja acima do restante do conteúdo
    },
    userImage: {
        width: 180,
        height: 100,
        marginBottom: 16,
    },
    translateImage: {
        width: "15%",
        height: 40,
        marginRight: 10,
    },
    menu: {
        width: "15%",
        height: 40,
        marginLeft: 20,
    },
    retryAndPauseView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "90%",
        marginTop: 10
    },
    userIconButtons: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 150,
        marginTop: 30,
    },
    userIconButtonsTop: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "90%",
        height: 75,
        marginTop: 30,
    },
    userIconButtonsBottom: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: "70%",
        height: 75,
        marginTop: 30,
    },
    userIcon: {
        width: 90,
        height: 90
    },
    instruments: {
        width: "90%",
        height: 260,
        backgroundColor: "#004AAD",
        marginTop: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    instrumentsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor:"red",
        width: "90%",
        marginBottom: 8
    },
    instumentIcon: {
        width: 60,
        height: 70
    },

});

export default GameScreen;
