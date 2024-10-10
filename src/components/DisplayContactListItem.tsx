import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import { useNavigation, Link } from "expo-router";

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
  const navigation = useNavigation<any>(); //QZX: MTI1055 using any definition to resolve modal typeing issue in navigation.navigate("modal"). Real solution will be to type it accordingly. Nullifies the use of typescript.
  return (
    <ThemedView style={styles.titleContainer}>
      {banners?.map((banner, bannerIndex) => {
        console.log("BANNER: ", banner);
        const filteredContacts = contacts?.filter(
          (contact) => contact.first_name[0] == banner[0]
        );
        return (
          <React.Fragment key={bannerIndex}>
            <ThemedText type="title">{banner}</ThemedText>
            {filteredContacts?.map((contact, contactIndex) => (
              <Pressable
                key={contactIndex}
                onPress={() => {
                  navigation.navigate("modal", {
                    contactId: contact.id,
                  });
                }}
              >
                <ThemedText type="title">
                  {contact.first_name} {contact.last_name}
                </ThemedText>
              </Pressable>
            ))}
          </React.Fragment>
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
