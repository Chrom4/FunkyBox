import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { API_URL } from '../config';


const url = `${API_URL}/login`;


const LoginScreen = ({ navigation }) => {
    const [emailVerification, setEmailVerification] = useState('');
    const [senhaVerification, setSenhaVerification] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleLinkPress = () => {
        navigation.navigate('CadastroScreen');
    };

    const handleLogin = () => {
        if (!emailVerification || !senhaVerification) {
          setShowAlert(true);
          return;
        }
      
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailVerification: emailVerification,
            senhaVerification: senhaVerification
          })
        })
        .then(response => {
          if (response.ok) {
            // Navegue para o DrawerNavigator após o login bem-sucedido
            navigation.reset({
              index: 0,
              routes: [{ name: 'DrawerNavigator' }]
            });
          } else {
            console.error('Erro ao fazer login:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Erro ao fazer login:', error);
        });
      };
      

    const handleCadastro = () => {
        navigation.navigate('CadastroScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/funkybox_blue_logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Image
                source={require('../images/user.png')}
                style={styles.userImage}
                resizeMode="contain"
            />
            <View style={styles.loginView}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmailVerification}
                    value={emailVerification}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setSenhaVerification}
                    value={senhaVerification}
                    secureTextEntry
                />
                {showAlert && ( // Renderiza o alerta apenas se showAlert for verdadeiro
                    <Text style={styles.alertText}>Os campos de email e senha são obrigatórios</Text>
                )}
                <View style={styles.forgotPasswordContainer}>
                    <Text>Esqueceu a senha? </Text>
                    <TouchableOpacity onPress={handleLinkPress}>
                        <Text style={styles.linkText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.cadastroButton]}
                onPress={handleCadastro}
            >
                <Text style={styles.cadastroButtonText}>Cadastre-se</Text>
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
        backgroundColor: "#A0BEEC"
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
    },
    userImage:{
        width: 180,
        height: 100,
        marginBottom: 16,
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
    cadastroButtonText:{
        color: 'black', // Defina a cor do texto desejada
        fontSize: 18,
    },
    alertText: {
        color: 'red',
        marginBottom: 16,
    }
});

export default LoginScreen;
