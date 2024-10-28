import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import { useNavigation, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

import {
  getTestQuery,
  getContactWith_PhoneNumbers_Email_Address,
} from "../services/queries/getContactWith_PhoneNumbers_Email_Address";

const ContactCardModal = () => {
  // console.log("CONTACT Card Modal Loaded");
  // QZX: Need to change any to contact prop | null
  const [contact, setContact] = useState<any>(null);

  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // console.log("PARAMS :", params);

  useEffect(() => {
    // console.log("USE EFFECT: Contact Card Modal");
    const fetchData = async () => {
      const getContactWith_QueryResult =
        await getContactWith_PhoneNumbers_Email_Address(params.contact_id);

      // Converting JSON string to JSON object
      const parsedResult = JSON.parse(
        JSON.stringify(getContactWith_QueryResult)
      );
      // Parse the nested JSON strings (Addresses, email_addresses, phone_numbers)
      parsedResult.forEach((contact: any) => {
        contact.Addresses = JSON.parse(contact.Addresses); // Parse Addresses JSON string
        contact.email_addresses = JSON.parse(contact.email_addresses); // Parse email_addresses
        contact.phone_numbers = JSON.parse(contact.phone_numbers); // Parse phone_numbers
      });

      // Destructuring arrays outter layer and setting the parsed JSON object into contact state
      setContact(parsedResult[0]);
      console.log(parsedResult[0].Addresses[0].city);
    };
    fetchData();
  }, []);

  const testQueryHandler = async () => {
    console.log("RUNNING TEST QUERY HANDLER");
    const queryResult = await getTestQuery(params.contact_id);
    queryResult;
    console.log("TEST Query Result: ", queryResult[0]);
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">"CONTACTCARDMODAL"</ThemedText>
        <Pressable onPress={() => navigation.goBack()}>
          <ThemedText type="title">GO BACK</ThemedText>
        </Pressable>
        <Pressable onPress={() => testQueryHandler()}>
          <ThemedText type="title">TEST QUERY</ThemedText>
        </Pressable>
        {/* QZX: Is this proper method for a quick loading screen */}
        {contact ? (
          <>
            <ThemedText type="title">Contact ID: {contact.id}</ThemedText>
            <ThemedText type="title">
              First Name: {contact.first_name}
            </ThemedText>
            <ThemedText type="title">Last Name: {contact.last_name}</ThemedText>
            {Object.entries(contact.phone_numbers[0]).map(([key, value]) => {
              return (
                <ThemedText key={key + value}>
                  {key}: {value}
                </ThemedText>
              );
            })}
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
