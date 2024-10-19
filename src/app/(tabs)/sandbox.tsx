import { Image, StyleSheet, Pressable, Platform } from "react-native";

import InitLocalDatabase, {
  initLocalDatabaseSchema,
} from "@/src/services/initLocalDatabaseServices";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { getContactsAlphabeticalQuery } from "@/src/services/queries/getContactsIn_AlphabeticalQuery";
import { insertExampleData } from "@/src/services/initLocalDatabaseServices";
import { deleteAllData } from "@/src/services/initLocalDatabaseServices";

const getContactsHandler = async () => {
  const result = await getContactsAlphabeticalQuery();
  console.log(result);
};

const initDatabaseSchema = async () => {
  console.log("PRESS: INIT DATABASE");
  const result = await initLocalDatabaseSchema();
  result;
};

const insertExampleDataHandler = async () => {
  console.log("PRESS: INSERT EXAMPLE DATA");
  const result = await insertExampleData();
  result;
};

const deleteAllDataHandler = async () => {
  const result = await deleteAllData();
  result;
  console.log("RAN DROP ALL TABLES");
};

export default function SandboxScreen() {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <Pressable onPress={getContactsHandler}>
          <ThemedText type="title">QUERYY</ThemedText>
        </Pressable>
        <Pressable onPress={initDatabaseSchema}>
          <ThemedText type="title">INIT DATABASE SCH</ThemedText>
        </Pressable>
        <Pressable onPress={insertExampleDataHandler}>
          <ThemedText type="title">INSERT EXAMPLE DATA</ThemedText>
        </Pressable>
        <Pressable onPress={deleteAllDataHandler}>
          <ThemedText type="title">DROP ALL TABLES</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
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
