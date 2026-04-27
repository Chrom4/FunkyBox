import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "../../src/helpers/dataFormat";
import Icon from "../../src/components/Icon";
import Logo from "../../assets/icon.png";
import { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [soundTrack, setSoundTrack] = useState([]);
  const intervalRef = useRef(null);
  const soundsRef = useRef([]); // Armazena as instâncias de áudio ativas

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: "#a1bdec",
    },
    Title: {
      fontSize: 24,
    },
    LogoContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    Logo: {
      width: 300,
      height: 120,
      resizeMode: "contain",
    },
    PlayBar: {
      flexDirection: "row",
      paddingVertical: 20,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "center",
    },
    Icon: {
      borderRadius: 100,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      elevation: 10,
    },
    CharPanel: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: 20,
      gap: 20,
    },
    CharIcon: {
      width: 70,
      height: 70,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    InstrumentsPanel: {
      backgroundColor: "#0049ac",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: 20,
      gap: 20,
      flex: 1,
      borderRadius: 8,
    },
    InstrumentIcon: {
      width: 60,
      height: 60,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#667ca5",
    },
  });

  // Função para gerenciar o áudio (carregar e tocar em loop)
  const syncAudio = async () => {
    // Para e descarrega todos os sons atuais para evitar sobreposição
    await Promise.all(soundsRef.current.map(s => s.unloadAsync()));
    soundsRef.current = [];

    if (isPlaying) {
      const newSounds = await Promise.all(
        soundTrack.map(async (item) => {
          const { sound } = await Audio.Sound.createAsync(
            instruments[item.instrument].file,
            { shouldPlay: true, isLooping: true }
          );
          return sound;
        })
      );
      soundsRef.current = newSounds;
    }
  };

  useEffect(() => {
    // Sincroniza o áudio sempre que o estado de Play ou a trilha mudar
    syncAudio();

    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, soundTrack]);

  const handleReset = () => {
    setCount(0);
    setIsPlaying(false);
    setSoundTrack([]); // Limpa os instrumentos dos personagens também
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSoundAdd = (index) => {
    setSoundTrack((prevValue) => {
      let clone = [...prevValue];
      if (clone.find(({ instrument }) => instrument === index)) return clone;

      const newIndex = chars.findIndex((user, idx) =>
        !clone.some(item => item.char === idx)
      );

      if (newIndex === -1) return clone;
      clone.push({ char: newIndex, instrument: index });
      return clone;
    });
  };

  const handleSoundRemove = (charIndex) => {
    setSoundTrack((prevValue) =>
      prevValue.filter(({ char }) => char !== charIndex)
    );
  };

  const instruments = [
    {
      file: require("../../assets/sounds/[Beat]_Volt-Mix.mp3"),
      backgroundColor: "#f364bb",
      icon: { type: "MaterialCommunityIcons", name: "boombox", size: 45 },
    },
    {
      file: require("../../assets/sounds/[Beat]_Warp9.mp3"),
      backgroundColor: "#f364bb",
      icon: { type: "MaterialCommunityIcons", name: "boombox", size: 45 },
    },
    {
      file: require("../../assets/sounds/[Ponto]_Bass_Mechanic2.mp3"),
      backgroundColor: "#ffc626",
      icon: { type: "FontAwesome6", name: "headphones-simple", size: 36 },
    },
    {
      file: require("../../assets/sounds/[Ponto]_Open_Your_Eyes.mp3"),
      backgroundColor: "#ffc626",
      icon: { type: "FontAwesome6", name: "headphones-simple", size: 36 },
    },
  ];

  const chars = [
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.LogoContainer}>
        <Image source={Logo} style={styles.Logo} />
      </View>

      <View style={styles.PlayBar}>
        <TouchableOpacity onPress={handleReset} style={styles.Icon}>
          <Icon type="FontAwesome6" name="arrows-rotate" size={24} />
        </TouchableOpacity>

        <View>
          <Text style={styles.Title}>{formatTime(count)}</Text>
        </View>

        <TouchableOpacity onPress={handlePlayPause} style={styles.Icon}>
          <Icon
            type="FontAwesome6"
            name={isPlaying ? "pause" : "play"}
            size={24}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.CharPanel}>
        {chars.map((obj, index) => {
          const found = soundTrack.find(({ char }) => char === index)?.instrument;
          const instrumentBackgroundColor = instruments[found]?.backgroundColor;

          return (
            <TouchableOpacity
              onPress={() => handleSoundRemove(index)}
              key={index}
              style={[
                styles.CharIcon,
                { backgroundColor: instrumentBackgroundColor || "#667ca5" },
              ]}
            >
              <Icon
                type={obj.icon.type}
                name={obj.icon.name}
                size={obj.icon.size}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ flex: 2, padding: 20 }}>
        <View style={styles.InstrumentsPanel}>
          {instruments.map((obj, index) => {
            const isUsed = soundTrack.some(({ instrument }) => instrument === index);

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleSoundAdd(index)}
                style={[
                  styles.InstrumentIcon,
                  !isUsed && { backgroundColor: obj.backgroundColor },
                ]}
              >
                <Icon
                  type={obj.icon.type}
                  name={obj.icon.name}
                  size={obj.icon.size}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;