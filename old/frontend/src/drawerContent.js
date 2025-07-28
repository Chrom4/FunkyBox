import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Perfil')}>
          <Text style={styles.drawerItemText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('História do Funk')}>
          <Text style={styles.drawerItemText}>História do Funk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Jogo')}>
          <Text style={styles.drawerItemText}>Jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('Sobre Nós')}>
          <Text style={styles.drawerItemText}>Sobre Nós</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default DrawerContent;
