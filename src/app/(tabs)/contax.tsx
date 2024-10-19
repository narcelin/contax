import React, { useState, useEffect, useCallback } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable, View } from "react-native";
import { Link, useFocusEffect } from "expo-router";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import { getContactsAlphabeticalQuery } from "@/src/services/queries/getContactsAlphabeticalQuery";
import { getBannersFromQuery } from "@/src/services/getBannersFromQuery"; // This is no longer needed. Creating banners from original contacts query in the contactlist component

import ContactsSectionList from "@/src/components/ContactsSectionList";
import { ContactProps } from "@/src/services/queries/getContactsAlphabeticalQuery";

const contax = () => {
  const [contacts, setContacts] = useState<ContactProps[] | null>(null);

  {
    // OLD METHOD OF RETREIVING DATA
    // useEffect(() => {
    //   // console.log("USE EFFECT: Fetch Data from Local Database");
    //   // Use an async function within the useEffect
    //   const fetchData = async () => {
    //     // Querying data from local SQLite Database
    //     const contactsAlphabetical = await getContactsAlphabeticalQuery();
    //     const banners = await getBannersFromQuery(contactsAlphabetical); // QZX: What if contactsAlphabetical takes a long time to load? Will this wait for that? How does await acutally work? Is it like a promise or does it actually wait before moving on?
    //     setContactBanners(banners);
    //     setContacts(contactsAlphabetical);
    //     // console.log(bannerList);
    //   };
    //   fetchData();
    // }, []);
  }

  //QZX: Not sure if this is the right method, but I query local database everytime the screen is focused. This helps with state if for example I add a new contact. May want to link this directly to if there is a change in the database directly somehow
  useFocusEffect(
    useCallback(() => {
      console.log("screen is focused");
      const fetchData = async () => {
        // Querying data from local SQLite Database
        const contactsAlphabetical = await getContactsAlphabeticalQuery();
        // QZX: What if contactsAlphabetical takes a long time to load? Will this wait for that? How does await acutally work? Is it like a promise or does it actually wait before moving on?

        setContacts(contactsAlphabetical);
        // console.log(bannerList);
      };
      fetchData();
    }, [])
  );

  // QZX: Might need a loading screen
  return (
    <ThemedView style={styles.titleContainer}>
      <ContactsSectionList contacts={contacts} />
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

  listContainer: {
    backgroundColor: "#F5F5F7",
  },
  sectionHeader: {
    backgroundColor: "#F7F7F7",
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
  },
  itemText: {
    fontSize: 17,
    color: "#1C1C1E",
  },
});

export default contax;
