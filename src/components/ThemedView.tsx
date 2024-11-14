import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  transparentBackgroundColor?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  transparentBackgroundColor = true, // Avoids this component to override parents backgroundColor
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = transparentBackgroundColor
    ? "transparent"
    : useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
