import React from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { Colors } from "@/src/constants/Colors";

export const ContactInfoDisplay = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.titleText}>{title}</ThemedText>
      <ThemedText style={styles.text}>{children}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.secondaryBackground,
    padding: 10,
    borderRadius: 25,
    marginVertical: 3,
  },
  titleText: {
    color: Colors.dark.secondaryForegroundColor,
    fontSize: 15,
  },
  text: {
    paddingHorizontal: 10,
    color: Colors.dark.foregroundColor,
  },
});
