import { Image, StyleSheet, Pressable, Platform } from "react-native";

import InitLocalDatabase from "@/src/services/initLocalDatabaseServices";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { getContactsAlphabeticalQuery } from "@/src/services/queries/getContactsQuery";

export default function SandboxScreen() {
  const onPressHandler = async () => {
    const result = await getContactsAlphabeticalQuery();
    console.log(result);
  };
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <Pressable onPress={onPressHandler}>
          <ThemedText type="title">QUERY</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
