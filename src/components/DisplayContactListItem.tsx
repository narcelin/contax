import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

export type ThemedDisplayContactListItemProps = {
  banners?: string[] | undefined;
  first_name?: string;
  last_name?: string;
};

const DisplayContactListItem = ({
  first_name,
  last_name,
}: ThemedDisplayContactListItemProps) => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{first_name}</ThemedText>
      <ThemedText type="title">{last_name}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default DisplayContactListItem;
