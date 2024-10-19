import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

export type ThemedShowFilteredContactsProps = {
  some_string?: string;
};

const ShowFilteredContacts = ({
  some_string,
}: ThemedShowFilteredContactsProps) => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{some_string}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default ShowFilteredContacts;
