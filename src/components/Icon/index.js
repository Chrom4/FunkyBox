// Icon.js
import React from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

const iconLibraries = {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export default function Icon({
  type = "Ionicons",
  name,
  size = 24,
  color = "black",
  ...props
}) {
  const IconComponent = iconLibraries[type];
  if (!IconComponent) {
    console.warn(
      `Icon type "${type}" does not exist. Check your Icon.js mapping.`
    );
    return null;
  }
  return <IconComponent name={name} size={size} color={color} {...props} />;
}
