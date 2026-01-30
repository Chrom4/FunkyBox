import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Entrada() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Esta é a tela de Entrada!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  texto: {
    fontSize: 18,
    color: '#000',
  },
});