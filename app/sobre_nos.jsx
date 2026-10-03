import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { useTheme } from "../src/hooks/useTheme";
import ValueFormatter from "../src/components/ValueFormatter";

const Sobre_Nos = ({ onForgotPasswordClick }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: theme.background_secondary,
    },
    form: {
      width: "80%",
      height: "50%",
      padding: 24,
      backgroundColor: theme.background_primary,
      borderRadius: 10,
      gap: 12,
    },
    buttons: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "space-between",
      flexDirection: "row",
    },

    // Text styles
    title: {
      marginBlock: 100,
      fontSize: 30,
      fontWeight: "300",
      color: theme.text_primary
    },
    text: {
      fontSize: 16,
      fontFamily: 'open-sans',
      fontWeight: "300",
      maxWidth: 280,
      textAlign: 'center',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>Este aplicativo nasceu como uma iniciativa acadêmica desenvolvida no Cefet/RJ – Campus Petrópolis, com o propósito de unir tecnologia, educação e produção musical. A ferramenta foi projetada para possibilitar a criação, experimentação e manipulação de diferentes obras musicais cíclicas (loops e repetições), servindo como recurso pedagógico e prático em sala de aula.
            Partindo do princípio da indissociabilidade entre a cultura da diáspora negra no Brasil e o que hoje reconhecemos como identidade cultural brasileira (Rodrigues, 2012), o projeto resgata as raízes e a evolução desses gêneros.
            O aplicativo destaca de forma central a trajetória do electro-funk e a consolidação do funk carioca, integrando a história desses movimentos aos processos de criação musical cíclica, conectando ancestralidade, inovação sonora e experimentação digital.
            O projeto é fruto do esforço colaborativo e interdisciplinar de:
            Renan Ribeiro Moutinho (professor de artes….)
            André Felipe de Almeida Monteiro (professor de eng…)
            Ronald Santos Brito (aluno/bolsista)
            Maria Eduarda Gonçalves Mello (aluna/ex-bolsista)
            Diogo Costa de Jesus (aluno, voluntário)</Text>
     </View>
  );
};

export default Sobre_Nos;