import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { API_URL } from '../config';


const url = `${API_URL}/cadastro`;


const CadastroScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const [instituicaoEducacional, setInstituicaoEducacional] = useState('');
    const [nivelEscolaridade, setNivelEscolaridade] = useState('');
    const [emailCadastro, setEmailCadastro] = useState('');
    const [senhaCadastro, setSenhaCadastro] = useState('');

    const handleCadastro = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nome,
                    ocupacao: ocupacao,
                    instituicaoEducacional: instituicaoEducacional,
                    nivelEscolaridade: nivelEscolaridade,
                    email: emailCadastro,
                    senha: senhaCadastro,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigation.navigate('Login');
            } else {
                // Restante do código para lidar com erros
            }
        } catch (error) {
            console.error('Erro ao processar o cadastro:', error);
            // Adicione um estado para exibir a mensagem de erro na interface do usuário
            setErroCadastro('Erro ao processar o cadastro. Tente novamente.');
        }
    };
    /*const handleCadastro = () => {
        navigation.navigate('Login');
    }*/

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={{ width: 50, height: 50, paddingTop: 50, flex: 0.5, justifyContent: "center", alignItems: "center" }}  onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../images/arrow.png')}
                        style={styles.arrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Bem vindo/a!</Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#363636"
                }}>
                    Vamos começar criando a sua conta
                </Text>
            </View>
            <View style={{height: 40}}/>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Giselle Matos"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setNome(text); // Atualizar o estado 'nome'
                    }}
                    value={nome}
                />

            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Ocupação</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Estudante"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setOcupacao(text); // Atualizar o estado 'nome'
                    }}
                    value={ocupacao}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Instituição Educacional</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Cefet/RJ Petrópolis"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setInstituicaoEducacional(text); // Atualizar o estado 'nome'
                    }} value={instituicaoEducacional}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Nível de Escolaridade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Ensino Fundamental"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setNivelEscolaridade(text); // Atualizar o estado 'nome'
                    }} value={nivelEscolaridade}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex: giselle@gmail.com"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setEmailCadastro(text); // Atualizar o estado 'nome'
                    }} value={emailCadastro}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*****"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    onChangeText={(text) => {
                        console.log(text); // Exibir o texto atual no console
                        setSenhaCadastro(text); // Atualizar o estado 'nome'
                    }} value={senhaCadastro}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                style={[styles.button, styles.cadastroButton]}
                onPress={handleCadastro}
            >

                <Text style={styles.cadastroButtonText}>
                    Cadastre-se
                </Text>
            </TouchableOpacity>
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
        width: "100%",
        height: 500
    },
    headerView: {
        width: "92%",
        height: 80,
        marginBottom: 10
    },
    arrow: {
        width: 30,
        height: 30,
        marginBottom:50
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        paddingBottom: 5,
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
    button: {
        padding: 10,
        borderRadius: 15,
        width: '70%',
        height: 45,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cadastroButton: {
        backgroundColor: '#004AAD',
        shadowOffset: {
            width: 0,
            height: 4, // Ajuste para a sombra aparecer apenas na parte inferior
        },
    },
    cadastroButtonText: {
        color: 'white', // Defina a cor do texto desejada
        fontSize: 18,
    }
});

export default CadastroScreen;
