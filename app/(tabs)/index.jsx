import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "../../src/helpers/dataFormat";
import Icon from "../../src/components/Icon";
import Logo from "../../assets/icon.png";
import Char1 from "../../assets/images/char1.jpeg";
import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [soundTrack, setSoundTrack] = useState([]);
  const intervalRef = useRef(null);

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
      backgroundColor: "#667ca5",
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

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handleReset = () => {
    setCount(0);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSoundAdd = (index) => {
    setSoundTrack((prevValue) => {
      let clone = [...prevValue];

      if (clone.find(({ instrument }) => instrument === index)) return clone;

      const maxIndex =
        clone.length > 0 ? Math.max(...clone.map((item) => item.char)) : -1;
      const newIndex = maxIndex + 1;

      console.log(newIndex);

      if (newIndex > chars.length - 1) return clone;

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
      backgroundColor: "#f364bb",
      icon: {
        type: "MaterialCommunityIcons",
        name: "boombox",
        size: 45,
      },
    },
    {
      backgroundColor: "#f364bb",
      icon: {
        type: "MaterialCommunityIcons",
        name: "boombox",
        size: 45,
      },
    },
    {
      backgroundColor: "#ffc626",
      icon: {
        type: "FontAwesome6",
        name: "headphones-simple",
        size: 36,
      },
    },
    {
      backgroundColor: "#ffc626",
      icon: {
        type: "FontAwesome6",
        name: "headphones-simple",
        size: 36,
      },
    },
  ];

  const chars = [
    {
      icon: {
        type: "FontAwesome",
        name: "user",
        size: 50,
      },
    },
    {
      icon: {
        type: "FontAwesome",
        name: "user",
        size: 50,
      },
    },
    {
      icon: {
        type: "FontAwesome",
        name: "user",
        size: 50,
      },
    },
  ];

  console.log(soundTrack);
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
        {/* <Image style={styles.CharIcon} source={Char1} /> */}

        {chars.map((obj, index) => {
          const found = soundTrack.find(
            ({ char }) => char === index
          )?.instrument;

          const instrumentBackgroundColor = instruments[found]?.backgroundColor;

          return (
            <TouchableOpacity
              onPress={() => handleSoundRemove(index)}
              key={index}
              style={[
                styles.CharIcon,
                instrumentBackgroundColor && {
                  backgroundColor: instrumentBackgroundColor,
                },
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
            const found = soundTrack.find(
              ({ instrument }) => instrument === index
            );

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleSoundAdd(index)}
                style={[
                  { ...styles.InstrumentIcon },
                  !found && { backgroundColor: obj.backgroundColor },
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
