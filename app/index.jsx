import React from 'react';
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "../src/hooks/useTheme";

const Informativo = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background_secondary,
    },
    contentContainer: {
      paddingVertical: 40,
      paddingHorizontal: 24,
      alignItems: "center", // Centraliza o conteúdo horizontalmente
    },
    title: {
      fontSize: 30,
      fontWeight: "300",
      marginTop: 20,
      marginBottom: 20,
      color: theme.text_primary,
      textAlign: 'center',
    },
    
    text: {
      fontSize: 16,
      fontFamily: 'open-sans',
      fontWeight: "300",
      textAlign: 'center',
      color: theme.text_secondary,
      lineHeight: 24,
      marginBottom: 20,
    },
  });

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={true}
      alwaysBounceVertical={true} // Força a física de scroll no iOS
    >
      {/* Oculta a barra de título superior */}
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.title}>FunkBox</Text>

      <Text style={styles.text}>O Electro Funk é um estilo que combina elementos de dois mundos, o Funk dos anos 1970 com o Electro.
        Ele trouxe no campo de suas aspirações musicais uma nova premissa:as bandas não precisavam mais gastar fortunas
        com gravações em estúdios, pois o som era feito com o auxílio de máquinas, computadores e outros aparatos eletrônicos.
        Neste momento as bandas grandes foram desfeitas e o produtor se tornou o personagem central,
        conhecido como “one-man show”, ou em sua tradução, banda de um homem só.
      </Text>

      <Text style={styles.text}>
        Ele é reconhecido por suas linhas de baixo sequenciadas, com efeitos sonoros sintetizados, que enfatizam algo 
        mais futurístico através de texturas e timbres peculiares. Como exemplo disto, pode-se citar a influencia do uso 
        da bateria eletrônica TR-808. Essas gravações faziam uso de baterias eletrônicas e linhas de baixo pesadas.
      </Text>

      <Text style={styles.text}>
        O funk é um estilo musical que surgiu nas favelas do Rio de Janeiro ao longo das décadas de 1970 e 1980. 
        Combinando elementos de subgêneros norte americanos como o electro-funk, Miami Bass, electro-funk de Los Angeles. 
        Foi originalmente criado por artistas que cresceram em favelas —comunidades estas da negligência governamental— 
        e passavam o tempo ouvindo música americana nas rádios.
      </Text>

      <Text style={styles.text}>
        Os músicos que criaram este estilo foram influenciados por DJs e a música eletrônica; 
        eles também adicionaram suas próprias idéias ao longo do tempo.
      </Text>

      <Text style={styles.text}>
        Ao mesmo tempo, DJs brasileiros tocavam música soul, shaft e funk em festas nas favelas. Nos anos 80, o DJ Marlboro trouxe para o Rio o 
        gênero Miami Bass, que se tornando super popular. Foi aí que o funk carioca começou a parecer como o que nós conhecemos hoje. No final 
        dos anos 80 e início dos anos 90, esses DJs misturavam rap e hip-hop com batidas repetitivas. As letras frequentemente falavam sobre a 
        vida nas favelas, violência, brutalidade policial e direitos civis.
      </Text>

      <Text style={styles.text}>
        É imprescindível falar de Funk Carioca sem falar das danças e festas, conhecidas como Baile Funk ou Baile de Favela. É lá que as 
        pessoas iam e vão até hoje para se divertir e dançar a noite toda. 
      </Text>

      <Text style={styles.text}>
        Por volta dos anos 2000, com o gênero popularizado, surgiu a Furacão 2000. As suas primeiras atividades foram a organização de bailes 
        de funk e soul, as equipes de som eram responsáveis por montar o equipamento de som para que seja possível colocar todo mundo para dançar.
      </Text>

      <Text style={styles.text}>
        Nas palavras do eminente e falecido MC Sapão, “o natural do Rio é o batidão”. No Rio de Janeiro, batidão e pancadão são algumas 
        das expressões utilizadas pelos funkeiros, os apreciadores e frequentadores dos bailes funk.
      </Text>

      <Text style={styles.text}>
        A história do funk carioca está repleta de histórias de resistência e opressão. A própria música foi moldada por esta história 
        e pela necessidade de sobreviver em um país onde ainda é marginalizado.
      </Text>
      
    </ScrollView>
  );
};

export default Informativo;