import { useColorScheme } from "react-native";
import { theme } from "../common/theme";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const { colors } = theme;
  const { lightTheme, darkTheme } = colors;

  return colorScheme === "dark" ? darkTheme : lightTheme;
};
