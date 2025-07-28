import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { API_URL } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

const url = `${API_URL}/user`; // Assuming the endpoint to fetch user data

const ProfileScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const [instituicaoEducacional, setInstituicaoEducacional] = useState('');
    const [nivelEscolaridade, setNivelEscolaridade] = useState('');
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState({}); // To store fetched user data

    // Fetch user data on component mount (assuming you have a logged-in user)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    // Pre-populate input fields with user data
                    setNome(data.nome);
                    setOcupacao(data.ocupacao);
                    setInstituicaoEducacional(data.instituicaoEducacional);
                    setNivelEscolaridade(data.nivelEscolaridade);
                    setEmail(data.email);
                } else {
                    console.error('Erro ao buscar dados do usuário');
                }
            } catch (error) {
                console.error('Erro ao processar a requisição:', error);
            }
        };
        fetchUserData();
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../images/funkybox_blue_logo.png')}
                    style={{ width: 200, height: 100, marginTop: 50 }}
                    resizeMode="contain"
                />
                <Image
                    source={require('../images/user7.png')}
                    style={styles.userImage}
                    resizeMode="contain"
                />
                <View style={{ height: 40 }} />
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={nome} // Pre-populated with fetched data
                        editable={false} // Make the input field non-editable
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Ocupação</Text>
                    <TextInput
                        style={styles.input}
                        value={ocupacao} // Pre-populated with fetched data
                        editable={false} // Make the input field non-editable
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Instituição Educacional</Text>
                    <TextInput
                        style={styles.input}
                        value={instituicaoEducacional} // Pre-populated with fetched data
                        editable={false} // Make the input field non-editable
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Nível de Escolaridade</Text>
                    <TextInput
                        style={styles.input}
                        value={nivelEscolaridade} // Pre-populated with fetched data
                        editable={false} // Make the input field non-editable
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email} // Pre-populated with fetched data
                        editable={false} // Make the input field non-editable
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
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
        backgroundColor: "#A0BEEC"
    },
    inputView: {
        width: "95%",
        paddingTop: 5,
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: "#A0BEEC",
        borderWidth: 1.8,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 10,
        backgroundColor: "white"
    },
    inputText: {
        marginLeft: 5,
        marginBottom: 10,
        color: "#808080",
        fontWeight: "bold"
    },
    loginView: {
        width: "90%",
        height: 230
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: "bold"
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
        marginBottom: 90,
        backgroundColor: "red",
    },
    userImage: {
        width: 180,
        height: 100,
        marginBottom: 5,
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
    },
    alertText: {
        color: 'red',
        marginBottom: 16,
    }
});

export default ProfileScreen;
