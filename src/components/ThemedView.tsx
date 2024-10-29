import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  transparentColor?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  transparentColor, // Avoids this component to override parents backgroundColor
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = transparentColor
    ? "transparent"
    : useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
