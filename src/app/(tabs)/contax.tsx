import React, { useState, useEffect, Suspense } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { getContactsAlphabeticalQuery } from "@/src/services/queries/getContactsQuery";
import { getBannersFromQuery } from "@/src/services/getBannersFromQuery";

import DisplayContactListItem from "@/src/components/DisplayContactListItem";
import { ContactProps } from "@/src/services/queries/getContactsQuery";

const contax = () => {
  const [contacts, setContacts] = useState<ContactProps[] | null>(null);
  const [contactBanners, setContactBanners] = useState<string[] | null>(null);

  useEffect(() => {
    // console.log("USE EFFECT: Fetch Data from Local Database");

    // Use an async function within the useEffect
    const fetchData = async () => {
      const contactsAlphabetical = await getContactsAlphabeticalQuery();
      const banners = await getBannersFromQuery(contactsAlphabetical);
      setContacts(contactsAlphabetical);
      setContactBanners(banners);
      // console.log(bannerList);
    };
    fetchData();
  }, []);
  //   const [loading, isLoading] = useState(null); // This can be used for a loading screen if needed

  return (
    <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    //   headerImage={
    //     <Ionicons size={310} name="code-slash" style={styles.headerImage} />
    //   }
    >
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">Explore</ThemedText> */}
        <Pressable onPress={() => console.log(contactBanners, contacts)}>
          <ThemedText type="title">BUTTON</ThemedText>
          {contacts?.map((contact) => (
            <DisplayContactListItem
              banners={contactBanners}
              first_name={contact.first_name}
              last_name={contact.last_name}
            />
          ))}
          {/* {contacts ? (
            <ThemedText>Loaded</ThemedText>
          ) : (
            <ThemedText>Not loaded</ThemedText>
          )} */}
        </Pressable>
        {/* <DisplayContactListItem first_name="Nicolas" last_name="Arcelin" /> */}
      </ThemedView>
    </ParallaxScrollView>
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

export default contax;
