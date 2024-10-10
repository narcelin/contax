import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import { useNavigation } from "expo-router";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

export type ThemedShowFilteredContactsProps = {
  some_string?: string;
};

const ShowFilteredContacts = ({
  some_string,
}: ThemedShowFilteredContactsProps) => {
  const navigation = useNavigation();
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">"MODAL"</ThemedText>
        <Pressable onPress={() => navigation.goBack()}>
          <ThemedText type="title">GO BACK</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
});

export default ShowFilteredContacts;
