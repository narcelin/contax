import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import { useNavigation, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { getContactQuery } from "../services/queries/getContactQuery";

export type ThemedShowFilteredContactsProps = {
  some_string?: string;
};

const Modal = ({ some_string }: ThemedShowFilteredContactsProps) => {
  console.log("REGULAR Modal Loaded");
  const [contact, setContact] = useState<any>(null); // QZX: Need to change any to contact prop | null

  useEffect(() => {}, []);

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MODAL</ThemedText>
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

export default Modal;
