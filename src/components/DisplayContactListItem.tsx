import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { ContactProps } from "../services/queries/getContactsQuery";

export type ThemedDisplayContactListItemProps = {
  banners?: string[] | null;
  contacts?: ContactProps[] | null;
};

const DisplayContactListItem = ({
  banners,
  contacts,
}: ThemedDisplayContactListItemProps) => {
  return (
    <ThemedView style={styles.titleContainer}>
      {banners?.map((banner, bannerIndex) => {
        console.log("BANNER: ", banner);
        const filteredContacts = contacts?.filter(
          (contact) => contact.first_name[0] == banner[0]
        );
        return (
          <>
            <ThemedText type="title">{banner}</ThemedText>
            {filteredContacts?.map((contact) => (
              <ThemedText type="title">{contact.first_name}</ThemedText>
            ))}
          </>
        );
      })}
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
    flexDirection: "column",
    gap: 8,
  },
});

export default DisplayContactListItem;
