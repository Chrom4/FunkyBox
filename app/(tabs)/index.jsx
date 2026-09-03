import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "../../src/helpers/dataFormat";
import Icon from "../../src/components/Icon";
import Logo from "../../assets/Group1.svg";
import { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";
import Svg, { Circle } from "react-native-svg";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [soundTrack, setSoundTrack] = useState([]);
  const [soundsLoaded, setSoundsLoaded] = useState(false);
  
  const intervalRef = useRef(null);
  
  // Armazena as instâncias pré-carregadas: { sound, active, pending }
  const soundsRef = useRef({}); 
  const countRef = useRef(0);
  const isPlayingRef = useRef(false);

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
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
    { icon: { type: "FontAwesome", name: "user", size: 50 } },
  ];

  const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "#a1bdec" },
    Title: { fontSize: 20, fontWeight: "bold", color: "#0049ac" },
    LogoContainer: { width: "100%", justifyContent: "center", alignItems: "center"},
    logo: {alignSelf: 'center', marginVertical: 20,},
    PlayBar: { flexDirection: "row", paddingVertical: 20, paddingHorizontal: 10, justifyContent: "space-between", alignItems: "center" },
    Icon: { borderRadius: 100, backgroundColor: "white", justifyContent: "center", alignItems: "center", height: 40, width: 40, elevation: 10 },
    TimerContainer: { justifyContent: "center", alignItems: "center", position: "relative" },
    TimerTextContainer: { position: "absolute", justifyContent: "center", alignItems: "center" },
    CharPanel: { flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", padding: 20, gap: 20 },
    CharIcon: { width: 70, height: 70, borderRadius: 100, justifyContent: "center", alignItems: "center" },
    InstrumentsPanel: { backgroundColor: "#0049ac", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", padding: 20, gap: 20, flex: 1, borderRadius: 8 },
    InstrumentIcon: { width: 60, height: 60, borderRadius: 100, justifyContent: "center", alignItems: "center", backgroundColor: "#667ca5" },
  });

  useEffect(() => {
    let isMounted = true;

    const loadAllSounds = async () => {
      try {
        const loadedSounds = {};
        
        await Promise.all(
          instruments.map(async (inst, index) => {
            const { sound } = await Audio.Sound.createAsync(
              inst.file,
              { isLooping: true, volume: 1 }
            );
            loadedSounds[index] = { sound, active: false, pending: false };
          })
        );

        if (isMounted) {
          soundsRef.current = loadedSounds;
          setSoundsLoaded(true);
        }
      } catch (error) {
        console.warn("Erro ao carregar sons:", error);
      }
    };

    loadAllSounds();

    return () => {
      isMounted = false;
      Object.values(soundsRef.current).forEach((item) => {
        if (item.sound) item.sound.unloadAsync().catch(() => {});
      });
    };
  }, []);

  useEffect(() => {
    isPlayingRef.current = isPlaying;

    if (!soundsLoaded) return;

    const activeItems = Object.values(soundsRef.current).filter(i => i.active);

    if (isPlaying) {
      Promise.all(activeItems.map(i => i.sound.playAsync())).catch(() => {});
    } else {
      Promise.all(activeItems.map(i => i.sound.pauseAsync())).catch(() => {});
    }
  }, [isPlaying, soundsLoaded]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          const newCount = (prevCount + 1) % 15;
          countRef.current = newCount;
          
          if (newCount === 0) {
            const itemsToPlay = Object.values(soundsRef.current).filter(
              i => i.active || i.pending
            );

            itemsToPlay.forEach((item) => {
              item.active = true;
              item.pending = false;
            });

 
            Promise.all(
              itemsToPlay.map(item => item.sound.playFromPositionAsync(0))
            ).catch(() => {});
          }

          return newCount;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handleReset = () => {
    setCount(0);
    countRef.current = 0;
    setIsPlaying(false);
    setSoundTrack([]);
    
    Object.values(soundsRef.current).forEach((item) => {
      item.active = false;
      item.pending = false;
      item.sound.stopAsync().catch(() => {});
    });
  };

  const handlePlayPause = () => {
    if (soundsLoaded) setIsPlaying((prev) => !prev);
  };

  const handleSoundAdd = (index) => {
    if (!soundsLoaded) return;
    if (soundTrack.some(({ instrument }) => instrument === index)) return;

    const newIndex = chars.findIndex(
      (user, idx) => !soundTrack.some((item) => item.char === idx),
    );
    if (newIndex === -1) return; 

    setSoundTrack((prevValue) => [...prevValue, { char: newIndex, instrument: index }]);

    const item = soundsRef.current[index];
    if (!item) return;

    if (isPlayingRef.current && countRef.current > 0) {
      item.pending = true;
    } else {
      item.active = true;

      if (isPlayingRef.current) {
        item.sound.playFromPositionAsync(0).catch(() => {});
      }
    }
  };

  const handleSoundRemove = (charIndex) => {
    const trackItem = soundTrack.find(({ char }) => char === charIndex);
    if (!trackItem) return;

    const instIndex = trackItem.instrument;

    setSoundTrack((prevValue) => prevValue.filter(({ char }) => char !== charIndex));

    const item = soundsRef.current[instIndex];
    if (item) {
      item.active = false;
      item.pending = false;
      item.sound.stopAsync().catch(() => {}); 
    }
  };

  const { timeStr } = formatTime(count);
  const circleSize = 80;
  const strokeWidth = 6;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (count % 15) / 15;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <View style={styles.Container}>
      <Logo width={250} height={80} style={{ alignSelf: 'center', marginVertical: 20 }} />

      <View style={styles.PlayBar}>
        <TouchableOpacity onPress={handleReset} style={styles.Icon}>
          <Icon type="FontAwesome6" name="arrows-rotate" size={24} />
        </TouchableOpacity>

        <View style={styles.TimerContainer}>
          <Svg width={circleSize} height={circleSize}>
            <Circle stroke="#d3e0f7" fill="none" cx={circleSize / 2} cy={circleSize / 2} r={radius} strokeWidth={strokeWidth} />
            <Circle stroke="#0049ac" fill="none" cx={circleSize / 2} cy={circleSize / 2} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`} />
          </Svg>
          <View style={styles.TimerTextContainer}>
            <Text style={styles.Title}>{timeStr}</Text>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handlePlayPause} 
          style={[styles.Icon, { opacity: soundsLoaded ? 1 : 0.5 }]}
          disabled={!soundsLoaded}
        >
          <Icon type="FontAwesome6" name={isPlaying ? "pause" : "play"} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.CharPanel}>
        {chars.map((obj, index) => {
          const found = soundTrack.find(({ char }) => char === index)?.instrument;
          const instrumentBackgroundColor = instruments[found]?.backgroundColor;

          return (
            <TouchableOpacity onPress={() => handleSoundRemove(index)} key={index} style={[styles.CharIcon, { backgroundColor: instrumentBackgroundColor || "#667ca5" }]}>
              <Icon type={obj.icon.type} name={obj.icon.name} size={obj.icon.size} />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ flex: 2, padding: 20 }}>
        <View style={styles.InstrumentsPanel}>
          {instruments.map((obj, index) => {
            const isUsed = soundTrack.some(({ instrument }) => instrument === index);

            return (
              <TouchableOpacity key={index} onPress={() => handleSoundAdd(index)} style={[styles.InstrumentIcon, !isUsed && { backgroundColor: obj.backgroundColor }]}>
                <Icon type={obj.icon.type} name={obj.icon.name} size={obj.icon.size} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;