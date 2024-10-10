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

const ContactCardModal = ({ some_string }: ThemedShowFilteredContactsProps) => {
  const [contact, setContact] = useState<any>(null); // QZX: Need to change any to contact prop | null

  //   useEffect(() => {
  //     // console.log("USE EFFECT: Fetch Data from Local Database");

  //     // Use an async function within the useEffect
  //     const fetchData = async () => {
  //       // Querying data from local SQLite Database
  //       const contactsAlphabetical = await getContactsAlphabeticalQuery();
  //       const banners = await getBannersFromQuery(contactsAlphabetical); // QZX: What if contactsAlphabetical takes a long time to load? Will this wait for that? How does await acutally work? Is it like a promise or does it actually wait before moving on?

  //       setContactBanners(banners);
  //       setContacts(contactsAlphabetical);
  //       // console.log(bannerList);
  //     };
  //     fetchData();
  //   }, []);

  const navigation = useNavigation();
  const params = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const contact = await getContactQuery(params.contactId); //Returns an array with an object inside.
      // Destructures the array. "if thats the correct terminology"
      setContact(contact[0]);
    };
    fetchData();
  }, []);

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">"CONTACTCARDMODAL"</ThemedText>
        <Pressable onPress={() => navigation.goBack()}>
          <ThemedText type="title">GO BACK</ThemedText>
        </Pressable>
        <Pressable onPress={() => console.log(contact)}>
          <ThemedText type="title">TEST QUERY</ThemedText>
        </Pressable>
        {contact ? (
          <>
            <ThemedText type="title">Contact ID: {contact.id}</ThemedText>
            <ThemedText type="title">
              First Name: {contact.first_name}
            </ThemedText>
            <ThemedText type="title">Last Name: {contact.last_name}</ThemedText>
          </>
        ) : (
          <ThemedText>Loading</ThemedText>
        )}
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

export default ContactCardModal;
