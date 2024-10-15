import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Pressable,
  SectionList,
} from "react-native";

import { useNavigation, Link } from "expo-router";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { ContactProps } from "../services/queries/getContactsQuery";

export type ThemedDisplayContactListItemProps = {
  contacts?: ContactProps[] | null;
};

interface GroupedContacts {
  [key: string]: { data: ContactProps[] };
}

const DisplayContactListItem = ({
  contacts,
}: ThemedDisplayContactListItemProps) => {
  //QZX: MTI1055 using any definition to resolve modal typeing issue in navigation.navigate("modal"). Real solution will be to type it accordingly. Nullifies the use of typescript.
  const navigation = useNavigation<any>();

  const convertedContactListForSecitonList = (
    contacts: ContactProps[] | undefined | null
  ) => {
    //QZX: What is Record???
    const grouped = contacts?.reduce<Record<string, ContactProps[]>>(
      (accumulator, contact, index) => {
        console.log(index);
        // console.log("CONTACT: ", contact);
        // console.log("ACCUMULATOR: ", accumulator);
        const contactFirstNamesLetter = contact.first_name[0].toUpperCase();
        if (!accumulator[contactFirstNamesLetter]) {
          accumulator[contactFirstNamesLetter] = [];
        }
        accumulator[contactFirstNamesLetter].push(contact);
        // console.log("END ACCUM: ", accumulator);
        return accumulator;
      },
      {}
    );

    const output = grouped
      ? Object.keys(grouped).map((letter) => ({
          title: letter,
          data: grouped[letter],
        }))
      : [];

    console.log("GROUPED:", grouped);
    return output;
  };

  const sections = convertedContactListForSecitonList(contacts);
  console.log("SECTIONS", sections);

  if (true) {
    return (
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/contactCardModal",
              params: { data: JSON.stringify(item) },
            }}
            asChild
          >
            <Pressable>
              <ThemedView style={styles.itemContainer}>
                <ThemedText style={styles.itemText}>
                  {item.first_name}
                </ThemedText>
                <ThemedText style={styles.itemText}>
                  {item.first_name}
                </ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ThemedView style={styles.sectionHeader}>
            <ThemedText style={styles.sectionHeaderText}>{title}</ThemedText>
          </ThemedView>
        )}
        contentContainerStyle={styles.listContainer}
      />
    );
  }
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  listContainer: {
    backgroundColor: "#F5F5F7",
  },
  sectionHeader: {
    backgroundColor: "#dddddd",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8E8E93",
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C8C7CC",
    flexDirection: "row",
    gap: 15,
  },
  itemText: {
    fontSize: 17,
    color: "#1C1C1E",
  },
});

export default DisplayContactListItem;
