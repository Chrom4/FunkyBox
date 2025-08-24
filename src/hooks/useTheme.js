import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import { theme } from "../common/theme";

export const useTheme = () => {
  const { colors } = theme;
  const { lightTheme, darkTheme } = colors;
  const [scheme, setScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return scheme === "dark" ? darkTheme : lightTheme;
};
