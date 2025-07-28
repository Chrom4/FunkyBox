import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OpenScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <View>
                <Image
                    source={require('../images/funkybox_logo.png')}
                    style={styles.logo}
                />
                </View>
                <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
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
        backgroundColor: '#ffffff',
        width: '100%',
        height: 500,
    },
    contentView: {
        height:500,
        weight: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 300,
        height: 150,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#004AAD', // Defina a cor de fundo desejada
        padding: 10,
        borderRadius: 15,
        width: 250,
        height: 50,
        alignItems: 'center',
        marginTop: 150
    },
    buttonText: {
        color: 'white', // Defina a cor do texto desejada
        fontSize: 18,
    },
});

export default OpenScreen;
