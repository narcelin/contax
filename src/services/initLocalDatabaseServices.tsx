import React from "react";
import * as SQLite from "expo-sqlite";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { Pressable } from "react-native";

import {
  initSQLSchemaString,
  testDataInputQuery,
  dropAllTablesQuery,
} from "./initSQLSchemaString";

export const initLocalDatabaseSchema = async () => {
  console.log("RUNNING: Init Local Database");
  const db = await SQLite.openDatabaseAsync("contax.db");
  await db.execAsync(initSQLSchemaString);
};

export const insertExampleData = async () => {
  console.log("RUNNING: Insert Test Data");
  const db = await SQLite.openDatabaseAsync("contax.db");
  db.execAsync(testDataInputQuery);
};

export const deleteAllData = async () => {
  const db = await SQLite.openDatabaseAsync("contax.db");
  await db.execAsync(dropAllTablesQuery);
};

export const printLocalDatabase = async () => {
  console.log("RUNNING: getAllAsync");
  const db = await SQLite.openDatabaseAsync("contax.db");
  const firstRow = await db.getAllAsync("SELECT * FROM PhoneNumbers");
  console.log(firstRow);
};

// Dont really need code below. Can export functions directly
const InitLocalDatabase = () => {
  initLocalDatabaseSchema();
  return (
    <ThemedView>
      <Pressable onPress={initLocalDatabaseSchema}>
        <ThemedText type="title">InitLocalDatabase</ThemedText>
      </Pressable>

      <Pressable onPress={insertExampleData}>
        <ThemedText type="title">Insert Example Data</ThemedText>
      </Pressable>

      <Pressable onPress={printLocalDatabase}>
        <ThemedText type="title">Print Database</ThemedText>
      </Pressable>
    </ThemedView>
  );
};

export default InitLocalDatabase;
